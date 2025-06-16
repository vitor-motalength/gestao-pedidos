import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('pedido')
export class ControladorController {
  private pedidos = [];

  @Post()
  criarPedido(@Body() body: any) {
    const pedido = {
      cliente: body.cliente,
      itens: body.itens,
    };

    this.pedidos.push(pedido);

    return {
      mensagem: 'Pedido cadastrado com sucesso!',
      pedido,
    };
  }

  @Get()
  listarPedidos() {
    return this.pedidos;
  }
}
