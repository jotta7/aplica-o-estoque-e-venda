let produto = document.getElementById('recebe-produto').value          //são variaveis dos inputs que receberam valor do usuario
let lista = document.getElementById('product-venda')      //são variaveis dos select que vai receber e mostrar o valor
let resitens = document.getElementById('reslist')   // vai mostrar a analize dos itens 
let valores = []                                    // recebe os valores dos inputs


//var dataAtual = new Date()
//var diaDoVencimeto = dataAtual.getDate()

function incluir(){
    let post =  ` <tr class="card-body">
                <td>${valores.nome}</td>
                <td>${valores.quantidade}</td>  
                <td>R$${valores.precoVenda}</td> 
                <td><button onclick="maisQt()">+</button><button onclick="menosQt()">-</button></td> 
                <td><img src="https://cdn-icons-png.flaticon.com/128/4891/4891626.png" <a href="#" class="btn btn-danger" name="delete"></a></td>
            </tr>`;
    let enviar = document.querySelector('#product-venda')
    let newPost = document.createElement('tr')             
    newPost.innerHTML = post
    enviar.prepend(newPost)
    document.getElementById('textoTwitter').value = ""

}

//--------------
function finalizar(){
    if (valores.length == 0) {
        window.alert('Add valores antes de finalizar')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        
        resitens.innerHTML = ''
        resitens.innerHTML += `somado todos os valores, temos ${soma}.</p>`
      
    }  
}
/*---------------------VENDAS----------------------------------
let estoque = [product]
let produto = document.getElementById('recebe-produto').value          //são variaveis dos inputs que receberam valor do usuario
let lista = document.getElementById('product-venda')      //são variaveis dos select que vai receber e mostrar o valor
let valortotal = document.getElementById('reslist')   // vai mostrar a analize dos itens 
                                    // recebe os valores dos inputs


//var dataAtual = new Date()
//var diaDoVencimeto = dataAtual.getDate()

function incluir(){
    let post =  ` <tr class="card-body">
                <td>${product.nome}</td>
                <td>${product.quantidade}</td>  
                <td>R$${product.precoVenda}</td> 
                <td><button onclick="adicionarQt()">+</button><button onclick="retirarQt()">-</button></td> 
                <td><img src="https://cdn-icons-png.flaticon.com/128/4891/4891626.png" <a href="#" class="btn btn-danger" name="delete"></a></td>
            </tr>`;
    let enviar = document.querySelector('#product-venda')
    let newPost = document.createElement('tr')             
    newPost.innerHTML = post
    enviar.prepend(newPost)
    document.getElementById('textoTwitter').value = ""

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Produto deletado com sucesso', 'success');
        }
    }
    
}
   
//--------------
function finalizar(){
    if (estoque.length == 0) {
        window.alert('Add valores antes de finalizar')
    } else {
       //envia para movimentação e debita do estoque       
    }  
}
//--------------------------------------------------

  function calcularTotal(product) {
    if(){
        var Qtadd = product.quantidade + 1
        return Qtadd;
    }else{    
        var Qtret = product.quantidade - 1
        return Qtret;
    }    
  }
  estoque.addQt = calcularTotal(precoVenda);

  function adicionarQt(i) {
    var produto = produtos[i];
    produto.vitorias++;
    produto.total = calcularTotal(jogador); //função
  }
  
  function retirarQT(i) {
    var produto = produtos[i];
    jogador.derrotas--;
    jogador.total = calcularTotal(jogador); //função
  }
*/