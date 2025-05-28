
import { Item } from '../types/item';
import { calcularSubtotal } from './calcularSubtotal';
import { calcularDescontoPorValor } from './calcularDescontoPorValor';
import { calcularDescontoPorQuantidade } from './calcularDescontoPorQuantidade';

export const aplicarPromocoes = (carrinho: Item[]): number => {
  const subtotal = calcularSubtotal(carrinho);
  const descontoPorValor = calcularDescontoPorValor(subtotal);
  const descontoPorQuantidade = calcularDescontoPorQuantidade(carrinho);

  return descontoPorValor + descontoPorQuantidade.desconto;
};
