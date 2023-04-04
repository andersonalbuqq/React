import React from "react";

export default (props) => {

  // Destructuring isso faz com que a variavel do lado esquerdo da igualdade assuma o mesmo valor da variavel do mesmo nome que se encontra dentro do objeto.
  const { min, max } = props

  const valorGerado = parseInt(Math.random() * (max - min) + min);
  return (
    <>
      <h2>Gerando valores aleatórios</h2>
      <p>Valor minimo: {min}</p>
      <p>Valor máximo: {max}</p>
      <p>O número gerado foi: {valorGerado}.</p>
    </>
  );
};
