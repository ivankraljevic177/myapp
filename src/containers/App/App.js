import React, { Component } from "react";
import styles from "./App.module.css";
import tyre from '../../assets/rim.png';
import Buttons from "../../components/Buttons/Buttons";
import Address from "../../components/Address/Address";
import DeviceOrientation from "../DeviceOrientation/DeviceOrientation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addAddress } from "../../redux/actions";
import { useOrientation } from "../../redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAdress: "",
    };
  }

  handleRequest = async (url = "", data = {}) => {
    if (url) {
      fetch("http://" + url + data)
        .then(function (response) {
          return response;
        })
        .then(function (result) {
          console.log(result);
        })
        .catch((error) =>
          console.log("Authorization failed : " + error.message)
        );
    }
  };

  handleSubmitIp = (event) => {
    event.preventDefault();
    //this.setState({ ipAddress: event.target.value });
    alert("Unijeli ste adresu: " + this.state.ipAdress);
    this.props.actions.addAddress(this.state.ipAdress);
  };

  handleChangeIp = (event) => {
    console.log(event.target.value);
    this.setState({ ipAdress: event.target.value });
  };

  handleCheckButton = (event) => {
    const isChecked = event.target.checked;
    this.props.actions.useOrientation(isChecked);
  };

  render() {
    return (
      <div className={styles.App}>
        <header>CarAPP</header>
        <div>
          <div>
          <img src={tyre} alt="tyre" className={styles.rotate} />
          </div>
          <Address
            onHandleChangeIp={this.handleChangeIp}
            onHandleSubmitIp={this.handleSubmitIp}
          />
          <Buttons
            onHandleCheckButton={this.handleCheckButton}
            onHandleRequest={this.handleRequest}
          />
          <DeviceOrientation
            onHandleRequest={this.handleRequest}
          ></DeviceOrientation>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addAddress,
        useOrientation,
      },
      dispatch
    ),
  };
}

export default connect(null, mapDispatchToProps)(App);
