import React from "react";
import "./Button.css";

// eslint-disable-next-line
export default (props) => {
  return (
    <button
      onClick={e => props.click && props.click(props.label) }
      className={`button
        ${props.operation ? "operation" : ""}
        ${props.double ? "double" : ""}
        ${props.triple ? "triple" : ""}
      `}
    >
      {props.label}
    </button>
  );
};
