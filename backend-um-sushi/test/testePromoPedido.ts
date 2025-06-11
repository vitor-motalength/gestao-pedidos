import { aplicarPromocoesPedido } from 'utils/aplicarPromocoesPedidos';
import { Item } from '../types/item';
import test, { describe } from 'node:test';
import assert from 'node:assert/strict';

describe('aplicarPromocoesPedido', () => {
  describe('Quando o pedido tem itens sem desconto', () => {
    test('Deve calcular subtotal, desconto zero e total igual ao subtotal', () => {
      // Arrange (Preparação)
      const pedidoMock: Item[] = [
        { id: '1', nome: 'Sushi', valor: 50, qtd: 2 }, // 100
        { id: '2', nome: 'Cerveja Belga', valor: 100, qtd: 1 },    // 100
      ];

    
      const resultado = aplicarPromocoesPedido(pedidoMock);

      assert.strictEqual(resultado.subtotal, 200); // 50*2 + 100*1 = 200
      assert.strictEqual(resultado.valorDesconto, 0);
      assert.strictEqual(resultado.total, 200); // subtotal - desconto
      assert.deepStrictEqual(resultado.motivos, []); // Sem motivos de desconto
      expect(resultado.motivos).toEqual([]); // Sem motivos de desconto
    });
  });

  describe('Quando o pedido tem itens com desconto', () => {
    test('Deve aplicar descontos e retornar motivos', () => {
      // Arrange
      const pedidoMock: Item[] = [
        { id: '1', nome: 'Produto com Desconto', valor: 100, qtd: 1, desconto: 0.1 }, // 10% de desconto
      ];

      // Act
      const resultado = aplicarPromocoesPedido(pedidoMock);

      assert.strictEqual(resultado.subtotal, 100);
      assert.strictEqual(resultado.valorDesconto, 10); // 10% de 100
      assert.strictEqual(resultado.total, 90); // 100 - 10
      assert.ok(resultado.motivos.includes('Desconto de 10% aplicado')); // Exemplo de motivo
      expect(resultado.motivos).toContain('Desconto de 10% aplicado'); // Exemplo de motivo
    });
  });
});
/* Removido: função expect não é mais necessária pois usamos assert */   throw new Error('Function not implemented.');