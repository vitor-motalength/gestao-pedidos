import { Item } from "./item";

export type Pedido = {
  clienteId: string;
  data: string;
  itens: Item[];
};