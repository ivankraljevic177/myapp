import React from "react";
import styles from "../Address/Address2.module.css";
import { useSelector } from "react-redux";

const Address = (props) => {
  const adr = useSelector((state) => state.address);

  return (
    <div className={styles.ipForm}>
      <p>{adr.ipAddress}</p>
      <form onSubmit={props.onHandleSubmitIp}>
        <p>Enter IP address:</p>
        <input type="text" onChange={props.onHandleChangeIp} />
      </form>
    </div>
  );
};
export default Address;
