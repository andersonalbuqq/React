import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

const clientes = [
  new Cliente("Gaby", 32, '1'),
  new Cliente("Ana", 52, '2'),
  new Cliente("Pedro", 18, '3'),
  new Cliente("José", 62, '4'),
]

function clienteSelecionado(cliente: Cliente){
  console.log(cliente.nome)
}

function clienteExluido(cliente: Cliente){
  console.log("Exclir " + cliente.nome)
}

  return (
   <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
    <Layout titulo="Cadastro Simples">
      <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExluido}></Tabela>
    </Layout>
   </div>
  )
}
