import { aplicarPromocoesPedido } from 'utils/aplicarPromocoesPedidos';
import { Item } from '../types/item';
import test, { describe } from 'node:test';
import assert from 'node:assert/strict';

describe('aplicarPromocoesPedido', () => {
  describe('Quando o pedido tem itens sem desconto', () => {
    test('Deve calcular subtotal, desconto zero e total igual ao subtotal', () => {
      const pedidoMock: Item[] = [
        { id: '1', nome: 'Sushi', valor: 50, qtd: 2 }, 
        { id: '2', nome: 'Cerveja Belga', valor: 100, qtd: 1 },    
      ];

    
      const resultado = aplicarPromocoesPedido(pedidoMock);

      assert.strictEqual(resultado.subtotal, 200); 
      assert.strictEqual(resultado.valorDesconto, 0);
      assert.strictEqual(resultado.total, 200); 
      assert.deepStrictEqual(resultado.motivos, []);
      expect(resultado.motivos).toEqual([]); 
    });
  });

  describe('Quando o pedido tem itens com desconto', () => {
    test('Deve aplicar descontos e retornar motivos', () => {
      const pedidoMock: Item[] = [
        { id: '1', nome: 'Produto com Desconto', valor: 100, qtd: 1, desconto: 0.1 },
      ];

      const resultado = aplicarPromocoesPedido(pedidoMock);

      assert.strictEqual(resultado.subtotal, 100);
      assert.strictEqual(resultado.valorDesconto, 10);
      assert.strictEqual(resultado.total, 90); 
      assert.ok(resultado.motivos.includes('Desconto de 10% aplicado')); 
      expect(resultado.motivos).toContain('Desconto de 10% aplicado'); 
    });
  });
});
