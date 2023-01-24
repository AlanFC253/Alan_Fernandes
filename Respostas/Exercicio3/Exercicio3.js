"use strict"

let xhr;

function criaObjetoXHR(){
    if (window.XMLHttpRequest) { 
        xhr = new XMLHttpRequest();
     }
     else {
        alert('Erro');     
     }	
}

function carregaJSON(url){	
  criaObjetoXHR();      
  xhr.open('GET', url, true); 
  xhr.responseType = 'json';
  xhr.withCredentials = true;
  xhr.send(null);
  xhr.onload = function() {
      exibir(xhr.response);
  };   
}

function exibir(json){

        let diaMenor=0;
        let menor=0;

        let diaMaior=0;
        let maior = 0;

        let diasContaveis=0;
        let somaTotal=0;

        let diasMedia=0;

        let div = document.querySelector("#res")
        
        for(let g of json){
          menor=g.valor;
        }

        for(let i of json){
          if (i.valor != 0) {
              diasContaveis++;
              somaTotal+=i.valor;
             if(i.valor>maior){
                diaMaior=i.dia
                maior=i.valor
            }
            if(i.valor<menor){
              menor=i.valor;
              diaMenor= i.dia
            }
          }
        }

        let media = somaTotal/diasContaveis;

        for(let j of json){
            if (j.valor >= media) {
              diasMedia++;
            }
        }

        div.innerHTML=`O dia com menor valor foi dia: ${diaMenor} , com o valor de ${menor}<br>O dia com maior valor foi dia ${diaMaior}, com o valor de ${maior}<br>O  Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi ${diasMedia}`
}

carregaJSON("dados.json");