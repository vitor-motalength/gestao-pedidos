//Atividade II: Retornar lista ordenada dos itens mais comuns
import itens from "./historico.js"; 

function listaItens(itens) {
     const contagemItens = {};
    itens.forEach(pedido => {
        pedido.itens.forEach(item => {
            if (contagemItens[item.nome]) {
                contagemItens[item.nome] += item.qtd;
            } else {
                contagemItens[item.nome] = item.qtd;
            }
        });
    });
    const itensOrdenados = Object.entries(contagemItens).map(([nome, qtd]) => ({ nome, qtd }));
    itensOrdenados.sort((a, b) => b.qtd - a.qtd); 
    return itensOrdenados;
}

const itensMaisComuns = listaItens(itens);
console.log(itensMaisComuns);