import React, { useState } from "react";
import "./Input.css";

//eslint-disable-next-line
export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div className="inputs">
        <input value={valor} onChange={quandoMudar} />
        <input value={valor} readOnly/>
        <input value={undefined}/>
      </div>
    </div>
  );
};
