import React from "react";

class DeviceOrientation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      absolute: null,
      alpha: null,
      beta: null,
      gamma: null,
    };
  }

  handleOrientation = (event) => {
    const { absolute, alpha, beta, gamma } = event;
    this.setState({
      absolute,
      alpha,
      beta,
      gamma,
    });
  };

  componentDidMount() {
    window.addEventListener("deviceorientation", this.handleOrientation);
  }

  render() {
    return <div>
      <p>Absolute: {this.state.absolute}</p>
      <p>Alpha: {this.state.alpha}</p>
      <p>Beta: {this.state.beta}</p>
      <p>Gamma: {this.state.gamma}</p>
    </div>;
  }
}
export default DeviceOrientation;
