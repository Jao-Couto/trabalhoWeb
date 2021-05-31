let produtos = JSON.parse(sessionStorage.getItem('produtos'));
let usuario = JSON.parse(sessionStorage.getItem('usuario'));
let compra = JSON.parse(sessionStorage.getItem('compra'));

console.log(sessionStorage)
console.log(produtos);
let contador = 0
let soma = 0

function geraBoleto(){
	num = '0123456789';
	bol = '';
	for(let i =0; i<46; i++){
		if(i == 5)
			bol+= '.';
		if(i == 10)
			bol+= ' ';
		if(i == 15)
			bol+= '.';
		if(i == 21)
			bol+= ' ';
		if(i == 26)
			bol+= '.';
		if(i == 31)
			bol+= ' ';
		if(i == 32)
			bol+= ' ';
		bol += num[Math.floor(Math.random()*10)]; 
		
	}
	return bol;
}

function inicio(){
	window.location.href = "/index.html";
}

$(document).ready(function(){

	let aux = {};

function addConteudo(){
	document.getElementById('conteudo').innerHTML +='<div class="elemento" id="elemento'+produtos[contador].codigo+'"><div class="image">'+
													'<img src="/'+produtos[contador].img+'" alt="" srcset="">'+
													'</div>'+
													'<div class="text" id="text">'+ produtos[contador].nome +' <br>' + 
														'<p> '+ produtos[contador].marca +' </p> <br><p><b> R$ '+produtos[contador].preco.toFixed(2) +'</p></b> <br>' +
														'<p style="font-size: 1.8vh"> '+ produtos[contador].desc+' </p> '+
														'<div class="number">'+
															'Quantidade: '+ aux[produtos[contador].codigo]+''+
														'</div>'+
													'</div>'
													
	}

	for (; contador < produtos.length; contador++) {
		if(!aux[produtos[contador].codigo])
			aux[produtos[contador].codigo] = 0
        aux[produtos[contador].codigo]++
    }

	for(let key in aux){
		console.log(key)
		for(var i=0; i<produtos.length; i++) {
			if(produtos[i].codigo == key) {
				contador = i
			}
		}
		addConteudo();
		soma += produtos[contador].preco * aux[key];
	}

	
	$("#nome").val(usuario.nome)
	$("#cpf").val(usuario.cpf)
	$("#celular").val(usuario.celular)
	$("#telefone").val(usuario.telefone)
	$("#rua").val(usuario.rua)
	$("#num").val(usuario.num)
	$("#bairro").val(usuario.bairro)
	$("#cidade").val(usuario.cidade)
	$("#UF").val(usuario.uf)
	$("#cep").val(usuario.cep)
	$("#comp").val(usuario.comple)

	$("#totProd").text(compra.totProd)
	let tempoFrete = Math.floor(Math.random() *6) + 3;
	$("#frete").html(compra.frete+'<br>Entrga em '+tempoFrete+' dias úteis')
	$("#total").text(compra.total)
	$("#formaPag").val(compra.forma)

	
	if(compra.forma == "PIX")
		$('#detalhes').text('CPF: 986.565.670-12')
	else if(compra.forma == "Boleto")
		$('#detalhes').text(geraBoleto())
	else{
		validadeA = compra.validade.split("-")
		validade = validadeA[2]+"/"+validadeA[1]+"/"+validadeA[0]
		$('#detalhes').html('Número: '+compra.numero+
		'<br>Validade: '+validade+
		'<br>CVV: '+compra.cvv)
	}
})

