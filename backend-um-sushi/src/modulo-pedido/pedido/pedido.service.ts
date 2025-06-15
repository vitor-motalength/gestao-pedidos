import { Injectable } from "@nestjs/common";
import { Pedido, MetadadosPedido } from "./pedido.interface";

extrairMetadados(pedido: Pedido): MetadadosPedido {
    const metadados: MetadadosPedido = {
      clienteId: pedido.clienteId,
      idade: Math.floor(Math.random() * 50) + 18,
      sexo: Math.random() > 0.5 ? "M" : "F",
      regiao: ["Norte", "Sul", "Leste", "Oeste"][Math.floor(Math.random() * 4)],
      hora: pedido.dataHora.toISOString(),
      total: pedido.total,
      itens: pedido.itens.map((item) => ({
        nome: item.nome,
        quantidade: item.quantidade,
      })),
    };

    console.log("Metadados extraídos:", JSON.stringify(metadados, null, 2));
    return metadados;
  }