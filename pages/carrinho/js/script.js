let dados = JSON.parse(sessionStorage.getItem('meus_dados'));

let contador = 0
let soma = 0
let dados_selecionados = [];

$(document).ready(function(){

function addConteudo(){
	document.getElementById('conteudo').innerHTML +='<div class="elemento" id="elemento'+dados[contador].codigo+'"><div class="image">'+
														'<img src="/images/test.png" alt="" srcset="">'+
													'</div>'+
													'<div class="text" id="text">'+ dados[contador].nome +' <br>' + 
														'<p> '+ dados[contador].marca +' </p> <br><p><b> R$ '+dados[contador].preco.toFixed(2) +'</p></b> <br>' +
														'<p style="font-size: 1.8vh"> '+ dados[contador].desc+' </p> '+
													'</div>'+
													'<input type="button" class="remove" value="REMOVER" id="remove" onclick="remover(`elemento'+dados[contador].codigo+'`)" /> </div>'
													//document.getElementById('qtd').innerHTML = ++contador + ' Produtos'
	}

	
	for (; contador < dados.length; contador++) {
        addConteudo();
		soma += dados[contador].preco
    }

	document.getElementById('totProd').innerText = 'R$ '+soma.toFixed(2)
	let frete = (Math.random() * (10 - 50) + 50).toFixed(2)
	document.getElementById('frete').innerText = 'R$ '+ frete
	let total = (parseFloat(soma) + parseFloat(frete)).toFixed(2)
	document.getElementById('total').innerText = 'R$ '+total


})

function remover(id){
	console.log(id)
	$("#"+id).remove();
	let pos = id.substring(8);
	for(var i=0; i<dados.length; i++) {
		if(dados[i].codigo == pos) {
			pos = i
		}
	}
	dados.splice(pos,1);
	console.log(dados)
	sessionStorage.setItem('meus_dados', JSON.stringify(dados))
}

function removerAll(){
	for(var i=0; i<dados.length;) {
		remover("elemento"+dados[i].codigo)
	}
}

function confirmar(prod){
	console.log("ola")
	dadosUsu = {
		nome: $("#nome").val(),
		cpf: $("#cpf").val(),
		celular: $("#celular").val(),
		telefone: $("#telefone").val(),
		rua: $("#rua").val(),
		num: $("#num").val(),
		bairro: $("#bairro").val(),
		cidade: $("#cidade").val(),
		uf: $("#UF").val(),
		cep: $("#cep").val(),
		comple: $("#comp").val()
	}

	dadosCompra={
		totProd: $("#totProd").text(),
		frete: $("#frete").text(),
		total: $("#total").text(),
		forma: $("input[name='formaPag']:checked").val()
	}
	console.log(dadosCompra)
	/*
    dados_selecionados.push(prod);
    console.log(dados_selecionados);
    let para_enviar = JSON.stringify(dados_selecionados);
    sessionStorage.setItem('meus_dados', para_enviar);*/
}