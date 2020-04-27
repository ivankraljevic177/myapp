import React from "react";
import styles from "../Address/Address2.module.css";

const Address = (props) => {
  return (
    <div className={styles.ipForm}>
      <form onSubmit={props.onHandleSubmitIp}>
        <p>Enter IP address:</p>
        <input type="text" onChange={props.onHandleChangeIp} />
      </form>
    </div>
  );
};
export default Address;
