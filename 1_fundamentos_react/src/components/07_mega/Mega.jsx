import React, { useState } from "react";

//eslint-disable-next-line
export default (props) => {
  let [qtde, setQtde] = useState(6);
  const [numeros, setNumeros] = useState([]);

  function gerarNumeros(e) {
    let sorteados = [];

    let contador = 0;
    while (contador < qtde) {
      let sorteado = parseInt(Math.random() * 60 + 1);
      //Verifica se o numero sorteado já foi sorteado anteriormente
      if (sorteados.indexOf(sorteado) < 0) {
        sorteados.push(sorteado);
        contador++;
      }
    }

    //auxilia o sort
    function compareNumbers(a, b) {
      return a - b;
    }

    //ordena os valores sorteados
    sorteados = sorteados.sort(compareNumbers);

    setNumeros(sorteados);
  }

  function alterarQtde(e) {
    setQtde(e.target.value);
  }

  return (
    <>
      <div>{numeros.length > 0 ? "" : "Sorteie seus números!"}</div>
      <p>
        {numeros.map((numero) => {
          return (
            <span key={numeros.indexOf(numero)}>
              {" "}
              {numero}
              {numeros.indexOf(numero) === numeros.length - 1 ? "." : " - "}
            </span>
          );
        })}
      </p>
      <div>
        <label id="qtde">Quantos números você deseja sortear?</label>
        <input
          type={"number"}
          id="qtde"
          value={qtde}
          onChange={alterarQtde}
          min={6}
        ></input>
      </div>
      <button onClick={gerarNumeros}> Gerar Números</button>
    </>
  );
};
