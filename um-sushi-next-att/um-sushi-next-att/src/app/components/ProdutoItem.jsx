'use client';
import React from 'react';
import { useCarrinho } from '@/context/CarrinhoContext';

export default function ProdutoItem({ produto }) {
  const { carrinho, handleAdd, handleClear } = useCarrinho();

  const estaNoCarrinho = carrinho[produto.id] !== undefined;

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px',
      width: '200px',
      margin: '10px',
      textAlign: 'center'
    }}>
      <img
        src={produto.imagem}
        alt={produto.nome}
        style={{ width: '100%', borderRadius: '6px' }}
      />
      <h4 style={{ margin: '10px 0 5px' }}>{produto.nome}</h4>
      <p style={{ color: '#555' }}>R$ {produto.valor.toFixed(2)}</p>

      {estaNoCarrinho ? (
        <button
          onClick={() => handleClear(produto)}
          style={{
            marginTop: '10px',
            padding: '6px 12px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Remover do carrinho
        </button>
      ) : (
        <button
          onClick={() => handleAdd(produto)}
          style={{
            marginTop: '10px',
            padding: '6px 12px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Adicionar ao carrinho
        </button>
      )}
    </div>
  );
}
