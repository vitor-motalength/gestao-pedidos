const {calcularDescontos} = require('./calcularDescontos')


function runTests() {
    let aprovado = 0;
    let falhou = 0;

    function assertEqual(valorAtual, valorEsperado, testName) {
    if (JSON.stringify(valorAtual) == JSON.stringify(valorEsperado)) {
        console.log(`✅ ${testName}`);
        aprovado++;
    }else{
        console.log(`❌ ${testName} - Esperado: ${JSON.stringify(valorEsperado)}, Obtido: ${JSON.stringify(valorAtual)}`);
        falhou++;
    }

    // Teste 1: deve aplicar 10% de desconto se subtotal > 100
    let pedido1 = [
        {nome: 'Item1', valor:60, qtd:1},
        {nome: 'Item2', valor:50, qtd:1},
    ];
    let resultado1 = calcularDescontos(pedido1);
    assertEqual(resultado1, { valorDesconto: 11, motivos: ['Desconto de 10% por valor acima de R$100'] }, 'Teste 1: Desconto de 10% aplicado corretamente');


    // Teste 2: deve aplicar R$5 de desconto para 2 ou mais do mesmo item
    let pedido2 = [
        { nome: 'Item 1', valor: 30, qtd: 2 },
        { nome: 'Item 2', valor: 30, qtd: 1 },
    ];
    let resultado2 = calcularDescontos(pedido2);
    assertEqual(resultado2, { valorDesconto: 5, motivos: ['Desconto de R$5 por quantidade em "Item 1"'] }, 'Teste 2: Desconto de R$5 aplicado corretamente');

    // Teste 3: deve aplicar ambos os descontos corretamente
    let pedido3 = [
        { nome: 'Item 1', valor: 60, qtd: 2 },
        { nome: 'Item 2', valor: 30, qtd: 1 },
    ];
    let resultado3 = calcularDescontos(pedido3);
    assertEqual(resultado3, { valorDesconto: 17, motivos: ['Desconto de 10% por valor acima de R$100', 'Desconto de R$5 por quantidade em "Item 1"'] }, 'Teste 3: Ambos os descontos aplicados corretamente');
    
    // Teste 4: não deve aplicar desconto se subtotal <= 100 e não houver itens suficientes
    let pedido4 = [
        { nome: 'Item 1', valor: 30, qtd: 1 },
        { nome: 'Item 2', valor: 30, qtd: 1 },
    ];
    let resultado4 = calcularDescontos(pedido4);
    assertEqual(resultado4, { valorDesconto: 0, motivos: [] }, 'Teste 4: Sem desconto aplicado');
    
    
    // Teste 5: deve aplicar desconto de R$5 para múltiplos itens do mesmo tipo
    let pedido5 = [
        { nome: 'Item 1', valor: 50, qtd: 3 },
    ];
    let resultado5 = calcularDescontos(pedido5);
    assertEqual(resultado5, { valorDesconto: 5, motivos: ['Desconto de R$5 por quantidade em "Item 1"'] }, 'Teste 5: Desconto de R$5 aplicado para múltiplos itens');
    console.log(`\nTotal de testes: ${aprovado + falhou}, Passaram: ${aprovado}, Falharam: ${falhou}`);

    }
}

runTests();


