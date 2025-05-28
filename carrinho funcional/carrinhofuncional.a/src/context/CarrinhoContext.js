'use client';
import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState({});

  const handleAdd = (produto) => {
    setCarrinho(prev => ({
      ...prev,
      [produto.id]: (prev[produto.id] || 0) + 1
    }));
  };

  const handleRemove = (produto) => {
    const atual = carrinho[produto.id] || 1;
    if (atual > 1) {
      setCarrinho(prev => ({ ...prev, [produto.id]: atual - 1 }));
    }
  };

  const handleClear = (produto) => {
    setCarrinho(prev => {
      const novo = { ...prev };
      delete novo[produto.id];
      return novo;
    });
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, handleAdd, handleRemove, handleClear }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);
