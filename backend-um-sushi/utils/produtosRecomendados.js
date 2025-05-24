export function produtosRecomendados(historicoProdutos) {

    if (!Array.isArray(historicoProdutos)) {
        return []; 
      }

    const mapFrequencia = new Map();

    historicoProdutos.forEach(pedido => {
        if(!pedido.itens || !Array.isArray(pedido.itens)) {
          return;
        } 
        
        pedido.itens.forEach(item => {
            if(!item.id)
              { 
                return; 
              }
            
            const existe = mapFrequencia.get(item.id);
            if(existe){
                mapFrequencia.set(item.id, {
                    id: item.id,
                    nome: item.nome,
                    totalQtd: existe.totalQtd + item.qtd, 
                    valor: item.valor
                });
            }
            else{
                mapFrequencia.set(item.id, {
                    id: item.id,
                    nome: item.nome,
                    totalQtd: item.qtd,
                    valor: item.valor
                });
            }
        })
    });

    return Array.from(mapFrequencia.values()) 
    .sort((a, b) => b.totalQtd - a.totalQtd);
}

