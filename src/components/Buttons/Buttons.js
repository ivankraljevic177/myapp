import React from "react";
import styles from "../Buttons/Button.module.css";
import { useSelector } from "react-redux";

const Buttons = (props) => {
  const adr = useSelector((state) => state.address);

  return (
    <div>
      <p className={styles.lblUseOrSensor}>Use Orientation</p>
      <label className={styles.switch}>
        <input type="checkbox" onChange={props.onHandleCheckButton}></input>
        <span className={styles.sliderRound}></span>
      </label>
      <div className={styles.buttonDiv} unselectable="on">
        <button
          unselectable="on"
          className={styles.fBtn}
          onMouseDown={() => props.onHandleRequest(adr.ipAddress, "/forward")}
          onMouseUp={() => props.onHandleRequest(adr.ipAddress, "/driveStop")}
          onTouchStart={() => props.onHandleRequest(adr.ipAddress, "/forward")}
          onTouchEnd={() => props.onHandleRequest(adr.ipAddress, "/driveStop")}
        >
          &#x21e7;
        </button>
        <button
          unselectable="on"
          className={styles.bBtn}
          onMouseDown={() => props.onHandleRequest(adr.ipAddress, "/back")}
          onMouseUp={() => props.onHandleRequest(adr.ipAddress, "/driveStop")}
          onTouchStart={() => props.onHandleRequest(adr.ipAddress, "/back")}
          onTouchEnd={() => props.onHandleRequest(adr.ipAddress, "/driveStop")}
        >
          &#x21e9;
        </button>
        <button
          unselectable="on"
          className={styles.lBtn}
          onMouseDown={() => props.onHandleRequest(adr.ipAddress, "/left")}
          onMouseUp={() => props.onHandleRequest(adr.ipAddress, "/steerStop")}
          onTouchStart={() => props.onHandleRequest(adr.ipAddress, "/left")}
          onTouchEnd={() => props.onHandleRequest(adr.ipAddress, "/steerStop")}
        >
          &#x21e6;
        </button>
        <button
          unselectable="on"
          className={styles.rBtn}
          onMouseDown={() => props.onHandleRequest(adr.ipAddress, "/right")}
          onMouseUp={() => props.onHandleRequest(adr.ipAddress, "/steerStop")}
          onTouchStart={() => props.onHandleRequest(adr.ipAddress, "/right")}
          onTouchEnd={() => props.onHandleRequest(adr.ipAddress, "/steerStop")}
        >
          &#x21e8;
        </button>
      </div>
    </div>
  );
};
export default Buttons;
