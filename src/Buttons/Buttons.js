import React, { Component } from "react";
import styles from "../Buttons/Button.module.css";
import DeviceOrientation from "../DeviceOrientation/DeviceOrientation";
class Buttons extends Component {
  handleFoward = async (url = "", data = {}) => {
    console.log(this.props.ipAddress);

    if (url) {
      fetch("http://" + url + data)
        .then(function (response) {
          return response;
        })
        .then(function (result) {
          console.log(result);
        });
    }
  };

  render() {
    return (
      <div>
        <div className={styles.buttonDiv} unselectable="on">
          <button
            unselectable="on"
            className={styles.fBtn}
            onMouseDown={() =>
              this.handleFoward(this.props.ipAddress, "/forward")
            }
            onMouseUp={() =>
              this.handleFoward(this.props.ipAddress, "/driveStop")
            }
            onTouchStart={() =>
              this.handleFoward(this.props.ipAddress, "/forward")
            }
            onTouchEnd={() =>
              this.handleFoward(this.props.ipAddress, "/driveStop")
            }
          >
            &#x21e7;
          </button>
          <button
            unselectable="on"
            className={styles.bBtn}
            onMouseDown={() => this.handleFoward(this.props.ipAddress, "/back")}
            onMouseUp={() =>
              this.handleFoward(this.props.ipAddress, "/driveStop")
            }
            onTouchStart={() =>
              this.handleFoward(this.props.ipAddress, "/back")
            }
            onTouchEnd={() =>
              this.handleFoward(this.props.ipAddress, "/driveStop")
            }
          >
            &#x21e9;
          </button>
          <button
            unselectable="on"
            className={styles.lBtn}
            onMouseDown={() => this.handleFoward(this.props.ipAddress, "/left")}
            onMouseUp={() =>
              this.handleFoward(this.props.ipAddress, "/steerStop")
            }
            onTouchStart={() =>
              this.handleFoward(this.props.ipAddress, "/left")
            }
            onTouchEnd={() =>
              this.handleFoward(this.props.ipAddress, "/steerStop")
            }
          >
            &#x21e6;
          </button>
          <button
            unselectable="on"
            className={styles.rBtn}
            onMouseDown={() =>
              this.handleFoward(this.props.ipAddress, "/right")
            }
            onMouseUp={() =>
              this.handleFoward(this.props.ipAddress, "/steerStop")
            }
            onTouchStart={() =>
              this.handleFoward(this.props.ipAddress, "/right")
            }
            onTouchEnd={() =>
              this.handleFoward(this.props.ipAddress, "/steerStop")
            }
          >
            &#x21e8;
          </button>
        </div>
        <div id="root">
          <DeviceOrientation></DeviceOrientation>
        </div>
      </div>
    );
  }
}
export default Buttons;
