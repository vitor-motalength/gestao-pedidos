import { Item } from '../types/item';

export const calcularDescontoPorQuantidade = (
  carrinho: Item[]
): { desconto: number; motivos: string[] } => {
  let desconto = 0;
  const motivos: string[] = [];

  for (const item of carrinho) {
    if (item.qtd >= 2) {
      desconto += 5;
      motivos.push(`Desconto de R$5 por quantidade em "${item.nome}"`);
    }
  }

  return { desconto, motivos };
};
