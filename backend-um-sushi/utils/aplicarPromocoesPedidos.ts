import { Item } from '../types/item';
import { calcularSubtotal } from './calcularSubtotal';
import { calcularDescontos } from './calcularDescontos';


export const aplicarPromocoesPedido = (pedido: Item[]): {
  subtotal: number;
  valorDesconto: number;
  total: number;
  motivos: string[];
} => {
  const subtotal = calcularSubtotal(pedido);
  const { valorDesconto, motivos } = calcularDescontos(pedido);
  const total = subtotal - valorDesconto;

  return {
    subtotal,
    valorDesconto,
    total,
    motivos
  };
};



