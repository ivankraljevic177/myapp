import React, { Component } from "react";
import styles from "./App.module.css";
import Buttons from "../Buttons/Buttons";
import Address from "../Address/Address";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAdress: "",
    };
  }

  handleSubmitIp = (event) => {
    event.preventDefault();
    //this.setState({ ipAddress: event.target.value });
    alert("Unijeli ste adresu: " + this.state.ipAdress);
    console.log(this.state.ipAdress);
  };

  handleChangeIp = (event) => {
    console.log(event.target.value);
    this.setState({ ipAdress: event.target.value });
  };

  render() {
    return (
      <div className={styles.App}>
        <header>CarAPP</header>
        <div>
          <Address
            onHandleChangeIp={this.handleChangeIp}
            onHandleSubmitIp={this.handleSubmitIp}
          />
          <Buttons ipAddress={this.state.ipAdress} />
        </div>
      </div>
    );
  }
}

export default App;
