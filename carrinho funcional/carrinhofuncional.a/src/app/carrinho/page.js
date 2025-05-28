'use client';
import React, { useState } from 'react';

import CardProduto from '../components/CardProduto';
import { useCarrinho } from '@/context/CarrinhoContext';



const produtos = [
  { id: 1, nome: 'Sushi de Salmão', imagem: 'https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2Fb2219ddee0a17ecdbfde2a16cd92661a01b8c064.png&w=1080&q=70', valor: 29.90 },
  { id: 2, nome: 'Mini Temaki', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/7200bb4d619f2df68f18951b4708abb9.jpeg', valor: 17.99 },
  { id: 3, nome: 'rolinho - queijo', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/5942705f06a3216cd06570badaae3a96.png', valor: 12.99 },
  { id: 4, nome: 'camarão croc', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/d8c5636aa79bad3e5a825c41f768525c.png', valor: 23.99 },
  { id: 5, nome: 'rolinho - camarão e cream cheese', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/4f1e8041d9300bcea5b8688b51732f79.png', valor: 15.99 },
  { id: 6, nome: 'combinado 00 - 24 peças', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/c54c33507b82efc2b8e430e51040c8f3.png', valor: 39.99 },
  { id: 7, nome: 'hot balls - queijo', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/5942705f06a3216cd06570badaae3a96.png', valor: 22.99 },
  { id: 8, nome: 'hot balls - camarão', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/9ebd7754465a784a220a908d3f91bb15.png', valor: 26.99 },
  { id: 9, nome: 'rolinho - salmão e cream cheese', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/bc67fb0c707d18dd4d0f74bbc14732ad.png', valor: 10.99 },
  { id: 10, nome: 'heineken 330ml', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/cdf3bc59f1c8db4a22ed60adf522855e.png', valor: 11.99 },
  { id: 11, nome: 'pepsi 1 litro', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/fa6c97e2a86253ec5af0e27a35c32e20.png', valor: 8.99 },
  { id: 12, nome: 'guaraná antárctica 1 litro', imagem: 'https://static.saipos.com/saipos-estatico/img-items/49909/store_item/0e92220f6912de676af196e04bbb5679.png', valor: 8.99 },
];

export default function CarrinhoPage() {
  const { carrinho, handleAdd, handleRemove, handleClear } = useCarrinho();
  const [status, setStatus] = useState('idle'); 
  const [contador, setContador] = useState(0);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(null);

   const finalizarPedido = () => {
    console.log('Iniciando finalização do pedido...');
    setStatus('loading');
    let tentativas = 0;

    const polling = setInterval(() => {
      tentativas++;
      console.log(`Processando pedido... tentativa ${tentativas}`);
      setContador(tentativas);

      if (tentativas >= 5) {  
        clearInterval(polling);
        setStatus('confirmed');
        setPedidoConfirmado({ ...carrinho });  
        console.log('Pedido confirmado!');
        console.log('Dados do pedido:', carrinho);
      }
    }, 1000);
  };


     return (
       <div style={{ padding: '20px' }}>
         <h1>Carrinho</h1>
         {Object.keys(carrinho).length === 0 && <p>Carrinho vazio.</p>}
   
         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
           {produtos.map(produto =>
             carrinho[produto.id] ? (
               <CardProduto
                 key={produto.id}
                 produto={produto}
                 quantidade={carrinho[produto.id]}
                 onAdd={handleAdd}
                 onRemove={handleRemove}
                 onClear={handleClear}
               />
             ) : null
           )}
         </div>
   
         {Object.keys(carrinho).length > 0 && status !== 'confirmed' && (
           <button
             onClick={finalizarPedido}
             style={{
               marginTop: '20px',
               padding: '10px 20px',
               backgroundColor: status === 'loading' ? '#f0ad4e' : '#28a745',
               color: 'white',
               border: 'none',
               borderRadius: '5px',
               cursor: 'pointer'
             }}
             disabled={status === 'loading'}
           >
             {status === 'loading'
               ? `Finalizando... (${contador})`
               : 'Finalizar Pedido'}
           </button>
         )}
   
         {status === 'confirmed' && pedidoConfirmado && (
           <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
             <h2>✅ Pedido Confirmado!</h2>
             <h3>Resumo do pedido:</h3>
             <ul>
               {Object.entries(pedidoConfirmado).map(([produtoId, quantidade]) => {
                 const produto = produtos.find(p => p.id === parseInt(produtoId));
                 return (
                   <li key={produtoId}>
                     {produto.nome} - Quantidade: {quantidade}
                   </li>
                 );
               })}
             </ul>
           </div>
         )}
       </div>
     );
   }