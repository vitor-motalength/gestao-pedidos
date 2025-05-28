import { Item } from '../src/types/Item'
import { calcularSubtotal } from './calcularSubtotal';
import { calcularDescontoPorValor } from './calcularDescontoPorValor';
import { calcularDescontoPorQuantidade } from './calcularDescontoPorQuantidade';
import { ResultadoDesconto } from '../src/types/ResultadoDesconto';

export const calcularDescontos = (pedido: Item[]): ResultadoDesconto => {
  const motivos: string[] = [];
  const subtotal = calcularSubtotal(pedido);
  const descontoPorValor = calcularDescontoPorValor(subtotal);
  
  if (descontoPorValor > 0) {
    motivos.push('Desconto de 10% por valor acima de R$100');
  }

  const { desconto: descontoPorQuantidade, motivos: motivosPorQuantidade } =
    calcularDescontoPorQuantidade(pedido);

  motivos.push(...motivosPorQuantidade);

  const valorDesconto = descontoPorValor + descontoPorQuantidade;

  return {
    valorDesconto,
    motivo: motivos.join(' | ') 
  };
};
