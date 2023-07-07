import React from "react";
import Main from "../template/Main";

// eslint-disable-next-line
export default (props) => (
  <Main
    icon="home"
    title="Inicio"
    subtitle="Projeto de revisão do curso de React."
  >
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">
      Sistema para exemplificar a construção de um cadastro desenvolvido em
      React.
    </p>
  </Main>
);
