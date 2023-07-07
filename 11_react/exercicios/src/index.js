import React from "react";
import ReactDOM from "react-dom";

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <>
    <Pai nome="João" sobrenome="Silva">
      <Filho  nome="Pedro"/>
      <Filho  nome="Paulo"/>
      <Filho  nome="Carla"/>
    </ Pai>
  </>  
, document.getElementById("root"));
