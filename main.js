'use scrict'

let somaMussarela = 0
let somaMista = 0
let somaCalabresa = 0

let vendaMussarela = 0.00
let vendaMista = 0.00
let vendaCalabresa = 0.00

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export')

//eventos
btnVendas.addEventListener('click', venda ,false)
btnEstorno.addEventListener('click',estorno,false)
btnEstorno.addEventListener('click',planilha,false)

//funcões 
function venda(e){
  if(document.getElementById('mussarela').checked){
    somaMussarela++
    vendaMussarela += 25.00
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela
    document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2) 
  }else if(document.getElementById('mista').checked){
    somaMista++
    vendaMista += 25.00
    document.getElementById('resultadoMista').innerHTML = somaMista
    document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2) 
  }else if(document.getElementById('calabresa').checked){
    somaCalabresa++
    vendaCalabresa += 25.000
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa
    document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2) 
  }
}

function estorno(e){
  if (somaMussarela > 0 || somaCalabresa > 0 || somaMista >0){
    if(document.getElementById('mussarela').checked){
      somaMussarela--
      vendaMussarela -= 25.00
      document.getElementById('resultadoMussarela').innerHTML = somaMussarela
      document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2) 
    }else if(document.getElementById('mista').checked){
      somaMista--
      vendaMista -= 25.00
      document.getElementById('resultadoMista').innerHTML = somaMista
      document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2) 
    }else if(document.getElementById('calabresa').checked){
      somaCalabresa--
      vendaCalabresa -= 25.000
      document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa
      document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2) 
    }
  }
}

function planilha(e){
  TableToExcel.convert(document.getElementById('table'))
}