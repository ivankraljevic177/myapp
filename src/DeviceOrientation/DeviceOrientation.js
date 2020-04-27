import { Component } from "react";
import PropTypes from "prop-types";

export default class DeviceOrientation extends Component {
  static propTypes = {
    children: PropTypes.func,
  };

  static defaultProps = {
    children: () => null,
  };

  state = {
    absolute: true,
    alpha: 0,
    beta: 0,
    gamma: 0,
  };

  handleOrientation = (event) => {
    const { absolute, alpha, beta, gamma } = event;

    this.setState({ absolute, alpha, beta, gamma });
  };

  componentDidMount() {
    window.addEventListener("deviceorientation", this.handleOrientation, true);
    document.write( `Absolute: ${this.state.absolute}`)
    document.write(`Alpha: ${this.state.alpha}`)
    document.write( `Beta: ${this.state.beta}`)
    document.write(`Gamma: ${this.state.gamma}`)
  }

  

  render() {
    return this.props.children(this.state)
  }
}
