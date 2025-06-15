import { UUID } from 'crypto';

export interface Pedido {
  id: UUID;           
  idCliente: UUID;    
  dataHora: Date;
  produtos: string[]; 
  valorTotal: number;
}