import { Item } from '../types/item';

export const calcularSubtotal = (carrinho: Item[]): number => {
  let subtotal = 0;

  for (const item of carrinho) {
    subtotal += item.valor * item.qtd;
  }

  return subtotal;
};
