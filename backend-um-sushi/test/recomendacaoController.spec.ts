import { RecomendacaoController } from 'src/recomendacao/controller/recomendacao.controller';
import { RecomendacaoService } from 'src/recomendacao/service/recomendacao.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { ProdutoRecomendado } from 'types/produtoRecomendado';

describe('RecomendacaoController', () => {
  let controller: RecomendacaoController;
  let service: RecomendacaoService;

  beforeEach(() => {
    service = {
      getRecomendacoesPorCliente: jest.fn(),
    } as any;

    controller = new RecomendacaoController(service);
  });

  it('ele deve retornar produtos recomendados quando há histórico', async () => {
    const mockId = '001';
    const mockProdutos: ProdutoRecomendado[] = [
      { id: '01', nome: 'Sushi combo', totalQtd: 3, valor: 55.90 },
    ];

    (service.getRecomendacoesPorCliente as jest.Mock).mockReturnValue(mockProdutos);

    const resultado = await controller.getRecomendacoes(mockId);
    expect(resultado).toEqual(mockProdutos);
  });

  it('aqui deve retornar lançar NotFoundException quando não há histórico', async () => {
    const mockId = '012';
    (service.getRecomendacoesPorCliente as jest.Mock).mockReturnValue([]);

    await expect(controller.getRecomendacoes(mockId)).rejects.toThrow(NotFoundException);
  });

  it('deve lançar BadRequestException se idCliente for vazio', async () => {
    await expect(controller.getRecomendacoes('')).rejects.toThrow(BadRequestException);
  });
});
