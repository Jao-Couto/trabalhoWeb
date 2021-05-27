

let produtos = JSON.parse(sessionStorage.getItem('produtos'));
let contador = 0
let soma = 0



function credito(){
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
		forma: $("input[name='formaPag']:checked").val(),
		numero: $("#numeroCart").val(),
		validade: $("#validade").val(),
		cvv: $("#cvv").val()

	}
    let para_enviar = JSON.stringify(dadosUsu);
    sessionStorage.setItem('usuario', para_enviar);
	para_enviar = JSON.stringify(dadosCompra);
    sessionStorage.setItem('compra', para_enviar);
	window.location.href='/pages/confirmacao/confirmacao.html'
}

function outraForma(){
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
    let para_enviar = JSON.stringify(dadosUsu);
    sessionStorage.setItem('usuario', para_enviar);
	para_enviar = JSON.stringify(dadosCompra);
    sessionStorage.setItem('compra', para_enviar);
	window.location.href='/pages/confirmacao/confirmacao.html'
}

$(document).ready(function(){
	

	let options = {
		translation: {
			'@' : {pattern: /[a-zÀ-ÿA-Z ]/, recursive: true},
			'E' : {pattern: /[\w@\-.+]/, recursive: true},
			'A' : {pattern: /[\w@\-.+]/},
			'S' : {pattern: /[\w@\-.+]/, optional:true}
		}
	};
	
	
	$('#nome').mask("@", options);
	$('#email').mask("E", options);
	$('#senha').mask("AAAAAAAASSSSSSSS", options);
	$('#cpf').mask("000.000.000-00");
	$('#rua').mask("@", options);
	$('#num').mask("#");
	$('#bairro').mask("@", options);
	$('#cidade').mask("@", options);
	$('#cep').mask("00000-000");
	$('#celular').mask("(00) 00000-0000");
	$('#telefone').mask("(00) 0000-0000");
	$('#cvv').mask("000");
	$('#numeroCart').mask("0000 0000 0000 0000");

function addConteudo(){
	document.getElementById('conteudo').innerHTML +='<div class="elemento" id="elemento'+produtos[contador].codigo+'"><div class="image">'+
														'<img src="/images/test.png" alt="" srcset="">'+
													'</div>'+
													'<div class="text" id="text">'+ produtos[contador].nome +' <br>' + 
														'<p> '+ produtos[contador].marca +' </p> <br><p><b> R$ '+produtos[contador].preco.toFixed(2) +'</p></b> <br>' +
														'<p style="font-size: 1.8vh"> '+ produtos[contador].desc+' </p> '+
													'</div>'+
													'<input type="button" class="remove" value="REMOVER" id="remove" onclick="remover(`elemento'+produtos[contador].codigo+'`)" /> </div>'
													//document.getElementById('qtd').innerHTML = ++contador + ' Produtos'
	}

	
	for (; contador < produtos.length; contador++) {
        addConteudo();
		soma += produtos[contador].preco
    }

	document.getElementById('totProd').innerText = 'R$ '+soma.toFixed(2)
	let frete = (Math.random() * (10 - 50) + 50).toFixed(2)
	document.getElementById('frete').innerText = 'R$ '+ frete
	let total = (parseFloat(soma) + parseFloat(frete)).toFixed(2)
	document.getElementById('total').innerText = 'R$ '+total

	$('input:radio[name="formaPag"]').change(function() {
		if ($("input[name='formaPag']:checked").val() == "Cartão de Crédito") {
			$(".dadosCart").css("display","flex");
		} else {
			$(".dadosCart").css("display","none");
		}
		
	  });
	 /* 
$("#comprar").click(function(){
	console.log($("#numeroCart").val())
	console.log($("#cvv").val())
	console.log($("#validade").val())
	if($("#nome").val() != "" && $("#cpf").val() != "" && $("#rua").val() != "" && $("#num").val() != "" && $("#bairro").val() != "" && $("#cidade").val() != "" && $("#cep").val() != "") {
		if($("input[name='formaPag']:checked").val() == "Cartão de Crédito")
			if($("#numeroCart").val() != "" && $("#validade").val() != "" && $("#cvv").val() != ""){
				credito()
			}else window.alert("Preencha os campos obrigatórios")
		else outraForma()
	}else window.alert("Preencha os campos obrigatórios")
});*/

})

function remover(id){
	console.log(id)
	$("#"+id).remove();
	let pos = id.substring(8);
	for(var i=0; i<produtos.length; i++) {
		if(produtos[i].codigo == pos) {
			pos = i
		}
	}
	produtos.splice(pos,1);
	console.log(produtos)
	sessionStorage.setItem('produtos', JSON.stringify(produtos))
}

function removerAll(){
	for(var i=0; i<produtos.length;) {
		remover("elemento"+produtos[i].codigo)
	}
}


