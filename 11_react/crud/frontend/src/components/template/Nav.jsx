import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line
export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"> Início</i>
      </Link>
      <Link to="/users">
        <i className="fa fa-users"> Usuários</i>
      </Link>
    </nav>
  </aside>
);
