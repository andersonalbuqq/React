import "./TabelaProduto.css";

import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const produtosLi = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco.toFixed(2)}</td>
      </tr>
    );
  });
  return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Produto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{produtosLi}</tbody>
      </table>
  );
};
