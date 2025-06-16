import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePedidoDto {
  @IsString()
  @IsNotEmpty()
  idCliente: string;

  @IsString()
  @IsNotEmpty()
  nomeProduto: string;

  @IsNumber()
  quantidade: number;

  @IsNumber()
  preco: number;
}
