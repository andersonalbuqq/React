import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "Center",
        height: "100vh",
        flexWrap: "wrap"
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400D3"/>
      <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
      <Navegador texto="Navegação #02" destino="/cliente/Pe/175" cor="blue"/>
      <Navegador texto="Componente com Estado" destino="/estado" cor="#A45B71"/>
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#42A9A9"/>
      <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#FA054A"/>
    </div>
  );
}
