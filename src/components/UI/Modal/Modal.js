import React from "react";
import classes from "./Modal.css";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";

const Modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "TransformY(0)" : "Transform(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
