import React from "react";

//eslint-disable-next-line
export default (props) => {
  return (
    <div>
      <label htmlFor="">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={e => props.setPasso(+e.target.value)}
      />
    </div>
  );
};
