import React from "react";

//eslint-disable-next-line
export default props => {
  return(
    <div>
      <button onClick={props.setInc}> + </button>
      <button onClick={props.setDec}> - </button>
    </div>
  )
}