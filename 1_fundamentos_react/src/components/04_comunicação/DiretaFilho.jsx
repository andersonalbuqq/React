import React from "react";

//eslint-disable-next-line
export default props => {
  return (
    <div>
      <span>{props.nome} </span>
      <span><strong>{props.idade}</strong> </span>
      <span>{props.nerd ? "Verdadeiro" : "Falso"}!</span>
    </div>
  )
}