import {Controller,Get,Param,BadRequestException,NotFoundException,InternalServerErrorException,HttpCode,HttpStatus,Logger,} from '@nestjs/common';
import { RecomendacaoService } from '../service/recomendacao.service';
import { ProdutoRecomendado } from 'types/produtoRecomendado';

@Controller('recomendacoes')
export class RecomendacaoController {
  private readonly logger = new Logger(RecomendacaoController.name);

  constructor(private readonly recomendacaoService: RecomendacaoService) {}

  @Get(':idCliente')
  @HttpCode(HttpStatus.OK)
  
  async getRecomendacoes(@Param('idCliente') idCliente: string): Promise<ProdutoRecomendado[]> {
    const id = this.validarId(idCliente);

    try {
      this.logger.log(`Buscando recomendações para cliente ${id}...`);

      const recomendacoes = await this.recomendacaoService.getRecomendacoesPorCliente(id);

      if (!recomendacoes.length) {
        this.logger.warn(`Nenhum histórico encontrado para cliente ${id}`);
        throw new NotFoundException(`Nenhum histórico encontrado para o cliente ${id}.`);
      }

      this.logger.log(`Retornando ${recomendacoes.length} itens para cliente ${id}`);
      return recomendacoes;

    } catch (erro) {
      this.tratarErro(erro, id);
    }
  }

  private validarId(idCliente: string): string {
    const id = idCliente?.trim();
    if (!id) {
      this.logger.warn(`ID inválido recebido: "${idCliente}"`);
      throw new BadRequestException('ID do cliente não pode ficar vazio.');
    }
    return id;
  }

  private tratarErro(err: unknown, id: string): never {
    if (err instanceof BadRequestException) {
      this.logger.error(`Requisição inválida para o cliente ${id}: ${err.message}`);
      throw new BadRequestException(err.message);
    }
    if (err instanceof NotFoundException) {
      this.logger.warn(`Recurso não encontrado para o cliente ${id}: ${err.message}`);
      throw new NotFoundException(err.message);
    }
    this.logger.error(
      `Erro interno ao processar requisição para o cliente ${id}:`,
      err instanceof Error ? err.stack : String(err),
    );
    throw new InternalServerErrorException('Erro interno do servidor.');
  }
}