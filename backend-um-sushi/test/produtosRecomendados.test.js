const { produtosRecomendados } = require('../utils/produtosRecomendados.js');

describe('produtosRecomendados', () => {
  it("retorna os produtos agregados e ordenados corretamente por quantidade total, com base em múltiplos pedidos", () => {
    
    const historico = [
      {
        clienteId: '001',
        data: '2025-05-01',
        itens: [
          { id: '01', nome: 'Sushi combo', qtd: 1, valor: 55.90 },
          { id: '03', nome: 'Refrigerante', qtd: 2, valor: 11.00 },
          { id: '02', nome: 'Temaki', qtd: 1, valor: 45.49 }
        ]
      },
      {
        clienteId: '002',
        data: '2025-05-12',
        itens: [
          { id: '04', nome: 'Yakisoba', qtd: 1, valor: 65.90 },
          { id: '03', nome: 'Refrigerante', qtd: 3, valor: 16.50 },
          { id: '01', nome: 'Sushi combo', qtd: 2, valor: 90.98 }
        ]
      },
      {
        clienteId: '003',
        data: '2025-04-30',
        itens: [
          { id: '02', nome: 'Temaki', qtd: 1, valor: 45.49 },
          { id: '03', nome: 'Refrigerante', qtd: 5, valor: 27.50 },
          { id: '04', nome: 'Yakisoba', qtd: 3, valor: 197.70 }
        ]
      },
      {
        clienteId: '004',
        data: '2025-05-02',
        itens: [
          { id: '01', nome: 'Sushi combo', qtd: 3, valor: 167.70 },
          { id: '04', nome: 'Yakisoba', qtd: 2, valor: 131.80 },
          { id: '03', nome: 'Refrigerante', qtd: 5, valor: 27.50 }
        ]
      }
    ];

    const resultado = produtosRecomendados(historico);

    expect(resultado).toEqual([
      { id: '03', nome: 'Refrigerante', totalQtd: 15, valor: 27.50 },
      { id: '01', nome: 'Sushi combo', totalQtd: 6, valor: 167.70 },
      { id: '04', nome: 'Yakisoba', totalQtd: 6, valor: 131.80 },
      { id: '02', nome: 'Temaki', totalQtd: 2, valor: 45.49 }
    ]);
  });

  it("retorna lista vazia se o histórico for uma string", () => {
    const historico = 'isso não é um array';
    const resultado = produtosRecomendados(historico);
    expect(resultado).toEqual([]);
  });

  it("ignora pedidos com estrutura inválida ou sem itens", () => {

    const historico = [
      { clienteId: '001', data: '2025-05-01', itens: null },
      { clienteId: '002', data: '2025-05-02', itens: 'string' },
      { clienteId: '003', data: '2025-05-03', itens: [] },
      {
        clienteId: '004',
        data: '2025-05-04',
        itens: [
          { nome: 'Produto sem ID', qtd: 1, valor: 9.99 }
        ]
      },
      {
        clienteId: '005',
        data: '2025-05-05',
        itens: [
          { id: 'P1', nome: 'Produto válido', qtd: 2, valor: 19.99 }
        ]
      }
    ];

    const resultado = produtosRecomendados(historico);
    expect(resultado).toEqual([
      { id: 'P1', nome: 'Produto válido', totalQtd: 2, valor: 19.99 }
    ]);
  });

  it("retorna lista vazia se o histórico for um array vazio", () => {
    const historico = [];
    const resultado = produtosRecomendados(historico);
    expect(resultado).toEqual([]);
  });

  it("usa o último valor encontrado para cada produto ao consolidar", () => {

    const historico = [
      {
        clienteId: '001',
        data: '2025-05-01',
        itens: [
          { id: '01', nome: 'Produto A', qtd: 2, valor: 10.00 }
        ]
      },
      {
        clienteId: '002',
        data: '2025-05-02',
        itens: [
          { id: '01', nome: 'Produto A', qtd: 3, valor: 15.00 }
        ]
      }
    ];

    const resultado = produtosRecomendados(historico);
    expect(resultado).toEqual([
      { id: '01', nome: 'Produto A', totalQtd: 5, valor: 15.00 }
    ]);
  });
});
