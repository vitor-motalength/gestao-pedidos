const calcularSubtotal = (carrinho) => {
  let subtotal = 0;

  for (const item of carrinho) {
    subtotal += item.valor * item.qtd;
  }

  return subtotal;
};

module.exports = { calcularSubtotal };