import { RecomendacaoService } from 'src/recomendacao/service/recomendacao.service';
import { ProdutoRecomendado } from 'types/produtoRecomendado';
import historico from 'src/data/historicoCliente.json';

describe('RecomendacaoService', () => {
  let service: RecomendacaoService;

  beforeEach(() => {
    service = new RecomendacaoService();
  });

  test('getRecomendacoesPorCliente retorna recomendações ordenadas pela quantidade total', () => {
    const idCliente = '001';
    const resultado: ProdutoRecomendado[] = service.getRecomendacoesPorCliente(idCliente);

    expect(resultado.length).toBeGreaterThan(0);
    expect(resultado[0]).toHaveProperty('nome');
    expect(resultado[0]).toHaveProperty('totalQtd');
    expect(typeof resultado[0].totalQtd).toBe('number');
  });

  test('getRecomendacoesPorCliente retorna array vazio se cliente não existe', () => {
    const idInexistente = 'clienteInexistente';

    const resultado = service.getRecomendacoesPorCliente(idInexistente);

    expect(resultado).toEqual([]);
  });
});
