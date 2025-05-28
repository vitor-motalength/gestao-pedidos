export const calcularDescontoPorValor = (subtotal: number): number => {
  if (subtotal > 100) {
    return subtotal * 0.1;
  }
  return 0;
};
