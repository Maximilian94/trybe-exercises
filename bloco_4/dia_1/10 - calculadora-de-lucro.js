//valores para serem alterados
let custoProduto = 0;
let precoVendaProduto = 20;
let imposto = 20;
let numeroDeVendas = 1000;

//Valores constantes
const valorImposto = (custoProduto/100)*imposto;

function calculadoraDeLucro (){
  if(custoProduto == 0 || precoVendaProduto == 0 || numeroDeVendas == 0){
    console.log(`Custo, preço de venda e numero de vendas; precisam ser diferente de zero`)
    return
  }
  let lucroPorVenda = precoVendaProduto - (custoProduto + valorImposto)
  let lucroTotal = lucroPorVenda * numeroDeVendas
  console.log(`Foram vendidos ${numeroDeVendas} produtos, e o lucro total foi de ${lucroTotal}`)
}

calculadoraDeLucro()