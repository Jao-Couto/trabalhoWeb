

let produtos = JSON.parse(sessionStorage.getItem('produtos'));
let contador = 0
let soma = 0
let total= 0

console.log(produtos)


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
	let aux = [];

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
														'<div class="number">'+
															'<span class="minus">-</span>'+
															'<input type="text" id="qtd-'+produtos[contador].codigo+'" value="'+ aux[produtos[contador].codigo]+'" readonly/>'+
															'<span class="plus">+</span>'+
														'</div>'+
													'</div>'+
													'<input type="button" class="remove" value="REMOVER" id="remove" onclick="remover(`elemento'+produtos[contador].codigo+'`)" /> </div>'
	}

	for (; contador < produtos.length; contador++) {
		if(!aux[produtos[contador].codigo])
			aux[produtos[contador].codigo] = 0
        aux[produtos[contador].codigo]++
    }

	function logArrayElements(element, index) {
		contador = index-1;
		addConteudo();
		soma += produtos[contador].preco * element;
	}

	aux.forEach(logArrayElements);

	/*for (contador = 0; contador < produtos.length; contador++) {
        addConteudo();
		soma += produtos[contador].preco
    }*/

	document.getElementById('totProd').innerText = 'R$ '+soma.toFixed(2)
	let frete = (Math.random() * (10 - 50) + 50).toFixed(2)
	document.getElementById('frete').innerText = 'R$ '+ frete
	total = (parseFloat(soma) + parseFloat(frete)).toFixed(2)
	document.getElementById('total').innerText = 'R$ '+total

	$('input:radio[name="formaPag"]').change(function() {
		if ($("input[name='formaPag']:checked").val() == "Cartão de Crédito") {
			$(".dadosCart").css("display","flex");
		} else {
			$(".dadosCart").css("display","none");
		}
		
	  });
	  
$("#comprar").click(function(){
	if($("#nome").val() != "" && $("#cpf").val() != "" && $("#rua").val() != "" && $("#num").val() != "" && $("#bairro").val() != "" && $("#cidade").val() != "" && $("#cep").val() != "") {
		if($("input[name='formaPag']:checked").val() == "Cartão de Crédito")
			if($("#numeroCart").val() != "" && $("#validade").val() != "" && $("#cvv").val() != ""){
				credito()
			}else window.alert("Preencha os campos obrigatórios")
		else outraForma()
	}else window.alert("Preencha os campos obrigatórios")
});

$('.minus').click(function () {
	var $input = $(this).parent().find('input');
	let count = parseInt($input.val());
	let id = $input.attr('id');
	id = id.split("-")[1]
	for(let i=0; i<produtos.length; i++) {
		if(produtos[i].codigo == id) {
			id = i
			break
		}
	}
	if(count > 1){
		soma -= produtos[id].preco
		document.getElementById('totProd').innerText = 'R$ '+soma.toFixed(2)
		total = (parseFloat(total) - parseFloat(produtos[id].preco)).toFixed(2)
		document.getElementById('total').innerText = 'R$ '+total

		produtos.splice(id,1);
		sessionStorage.setItem('produtos', JSON.stringify(produtos))
	}

	count--;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});

$('.plus').click(function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	let id = $input.attr('id');
	id = id.split("-")[1]
	for(let i=0; i<produtos.length; i++) {
		if(produtos[i].codigo == id) {
			id = i
			break
		}
	}
	soma += produtos[id].preco 
	document.getElementById('totProd').innerText = 'R$ '+soma.toFixed(2)
	total = (parseFloat(total) + parseFloat(produtos[id].preco)).toFixed(2)
	document.getElementById('total').innerText = 'R$ '+total

	produtos.push(produtos[id]);
	sessionStorage.setItem('produtos', JSON.stringify(produtos))
	return false;
});
});

function remover(id){
	let remo = id.substring(8) 
	let pos = remo
	for(var i=0; i<produtos.length; i++) {
		if(produtos[i].codigo == pos) {
			pos = i
			break
		}
	}
	soma -= produtos[pos].preco * $("#qtd-"+remo).val();
	document.getElementById('totProd').innerText = 'R$ '+soma.toFixed(2)
	total = (parseFloat(total) - produtos[pos].preco*$("#qtd-"+remo).val()).toFixed(2)
	document.getElementById('total').innerText = 'R$ '+total
	produtos.splice(pos,1);
	sessionStorage.setItem('produtos', JSON.stringify(produtos))
	$("#"+id).remove();
}

function removerAll(){
	for(var i=0; i<produtos.length;) {
		remover("elemento"+produtos[i].codigo)
	}
}


