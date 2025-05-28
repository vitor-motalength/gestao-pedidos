import React from "react";
import { Item } from "../src/types/Item";
import { calcularSubtotal } from "../utils/calcularSubtotal";
import { aplicarPromocoes } from "../utils/aplicarPromocoes";

type Props = {
  carrinho: Item[];
};

const ResumoCarrinho: React.FC<Props> = ({ carrinho }) => {
  const subtotal = calcularSubtotal(carrinho);
  const desconto = aplicarPromocoes(carrinho);
  const total = subtotal - desconto;

  return (
    <div className="p-4 border rounded-lg shadow bg-white w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Resumo do Carrinho</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>R${subtotal.toFixed(2)}</span>
      </div>

      {desconto > 0 && (
        <div className="flex justify-between mb-2 text-green-600 font-semibold">
          <span>Desconto aplicado:</span>
          <span>–R${desconto.toFixed(2)}</span>
        </div>
      )}

      <div className="flex justify-between border-t pt-2 text-lg font-semibold">
        <span>Total:</span>
        <span>R${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ResumoCarrinho;
