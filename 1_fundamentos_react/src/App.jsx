import "./App.css";
import React from "react";

import Mega from "./components/07_mega/Mega";
import Contador from "./components/06_contador/Contador";
import Input from "./components/05_formulario/Input";
import IndiretaPai from "./components/04_comunicação/IndiretaPai";
import DiretaPai from "./components/04_comunicação/DiretaPai";
import UsuarioInfo from "./components/03_condicional/UsuarioInfo";
import ParOuImpar from "./components/03_condicional/ParOuImpar";
import TabelaProdutos from "./components/02_repeticao/TabelaProdutos";
import ListaAlunos from "./components/02_repeticao/ListaAlunos";
import Familia from "./components/01_basicos/Familia";
import FamiliaMembro from "./components/01_basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Primeiro from "./components/01_basicos/Primeiro";
import ComParametro from "./components/01_basicos/ComParametro";
import Aleatorio from "./components/01_basicos/Aleatorio";

const App = () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      
      <Card titulo="#13 - Mega" color="#3A739E">
        <Mega qtde={8} />
      </Card>
      
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>
      
      <Card titulo="#11 - Componente Controlado" color="#E45F56">
        <Input></Input>
      </Card>
      
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={201}/>
        <UsuarioInfo usuario={{nome: 'Anderson'}}/>
        <UsuarioInfo usuario={{email: 'teste@teste.com'}}/>
        <UsuarioInfo usuario={{}}/>
        <UsuarioInfo />
      </Card>

      <Card titulo="#07 - Desafio Repetição Tabela" color="#2918E2">
        <TabelaProdutos />
      </Card>
 
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E94C6F">
        <ComParametro
          titulo="Sitação do Aluno"
          aluno="Pedro Pascal"
          nota={8.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73'">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

export default App