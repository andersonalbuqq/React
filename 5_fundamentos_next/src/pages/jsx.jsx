import Layout from "@/components/Layout";

export default function Jsx() {
  return (
    <Layout titulo="Entendendo o JSX">
      <h1>Jsx é um conceito central</h1>
      <h2>{"muito interessante".toUpperCase()}</h2>
      <p>{JSON.stringify({ nome: "Anderson", idade: 29 })}</p>
    </Layout>
  );
}
