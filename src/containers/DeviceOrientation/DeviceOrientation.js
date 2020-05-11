import React from "react";
import styles from "../DeviceOrientation/DeviceOrientation.module.css";
import { connect } from "react-redux";

class DeviceOrientation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      absolute: null,
      alpha: null,
      beta: null,
      gamma: null,
      direction: "",
      driveDirection: "",
    };
  }

  handleOrientation = (event) => {
    event.preventDefault();
    const { absolute, alpha, beta, gamma } = event;
    this.setState({
      absolute,
      alpha,
      beta,
      gamma,
    });
  };

  handleMoving = () => {
    const direction = (() => {
      if (this.state.gamma < -20) return "/left";
      if (this.state.gamma > -20 && this.state.gamma < 20) return "/steerStop";
      if (this.state.gamma > 20) return "/right";
    })();

    const driveDirection = (() => {
      if (this.state.beta < -20) return "/forward";
      if (this.state.beta > -20 && this.state.beta < 20) return "/driveStop";
      if (this.state.beta > 20) return "/back";
    })();

    if (this.state.direction !== direction) {
      this.setState({ direction });
    }

    if (this.state.driveDirection !== driveDirection) {
      this.setState({ driveDirection });
    }
    if (
      this.props.useOrientation &&
      this.state.driveDirection !== driveDirection
    ) {
      this.props.onHandleRequest(this.props.ipadrs, driveDirection);
    }
    if (this.props.useOrientation && this.state.direction !== direction) {
      this.props.onHandleRequest(this.props.ipadrs, direction);
    }
  };

  componentDidMount() {
    window.addEventListener("deviceorientation", this.handleOrientation);
  }

  componentDidUpdate() {
    this.handleMoving();
  }

  render() {
    return (
      <div className={styles.orientation}>
        {/* <p>Absolute: {this.state.absolute}</p>
        <p>Alpha: {this.state.alpha}</p>
        <p>Beta: {this.state.beta}</p>
        <p>Gamma: {this.state.gamma}</p> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ipadrs: state.address.ipAddress,
    useOrientation: state.useOrientation,
  };
}

export default connect(mapStateToProps)(DeviceOrientation);
