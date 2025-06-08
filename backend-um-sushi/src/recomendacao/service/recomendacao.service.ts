import { Injectable } from '@nestjs/common';
import historico from '../../data/historicoCliente.json';
import { ProdutoRecomendado } from 'types/produtoRecomendado';
import { Pedido } from 'types/pedido';

@Injectable()
export class RecomendacaoService {
  getRecomendacoesPorCliente(idCliente: string): ProdutoRecomendado[] {
    const historicoCliente = (historico as Pedido[]).filter(
      (pedido) => pedido.clienteId === idCliente,
    );

    if (historicoCliente.length === 0) {
      return [];
    }

    const mapa: Record<string, ProdutoRecomendado> = {};

    historicoCliente.forEach((pedido) => {
      pedido.itens.forEach((item) => {
        if (!mapa[item.id]) {
          mapa[item.id] = {
            id: item.id,
            nome: item.nome,
            totalQtd: item.qtd,
            valor: item.valor,
          };

        } else {
          mapa[item.id].totalQtd += item.qtd;
        }
      });
    });

    return Object.values(mapa).sort((a, b) => b.totalQtd - a.totalQtd);
  }
}
