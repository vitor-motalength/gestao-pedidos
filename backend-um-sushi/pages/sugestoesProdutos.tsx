import { useState } from "react";
import { produtosRecomendados } from "../utils/produtosRecomendados";
import historico from "../data/historico.json";

const produtosSugeridos = produtosRecomendados(historico).slice(0, 3);

export default function Home() {
  const [carrinho, setCarrinho] = useState<string[]>([]);

  function adicionarProduto(produto: string) {
    setCarrinho((prev) => [...prev, produto]);
  }

  return (
    <main>
      <h1>Carrinho</h1>
      <h2>Sugestões para você:</h2>
      <ul>
        {produtosSugeridos.map((produto) => (
          <li key={produto.id}>
            {produto.nome}
            <button onClick={() => adicionarProduto(produto.nome)}>Adicionar</button>
          </li>
        ))}
      </ul>
      <h2>Produtos no carrinho: </h2>
      <ul>
        {carrinho.map((item, indice) => (
          <li key={indice}>{item}</li>
        ))}
      </ul>
    </main>
  );
}