let produtos = JSON.parse(sessionStorage.getItem('produtos'));
let usuario = JSON.parse(sessionStorage.getItem('usuario'));
let compra = JSON.parse(sessionStorage.getItem('compra'));

//console.log(sessionStorage)
//console.log(produtos);
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

function remover(id) {
	let remo = id.substring(8)
	let pos = remo
	for (var i = 0; i < produtos.length; i++) {
		if (produtos[i].codigo == pos) {
			pos = i
		}
	}
	//console.log(pos)
	//console.log($("#qtd-" + remo).val());
	soma -= produtos[pos].preco * $("#qtd-" + remo).val();
	document.getElementById('totProd').innerText = 'R$ ' + soma.toFixed(2)
	total = (parseFloat(total) - produtos[pos].preco * $("#qtd-" + remo).val()).toFixed(2)
	document.getElementById('total').innerText = 'R$ ' + total

	produtos.splice(pos, 1);
	sessionStorage.setItem('produtos', JSON.stringify(produtos))
	$("#" + id).remove();
}

function removerAll() {
	for (var i = 0; i < produtos.length;) {
		remover("elemento" + produtos[i].codigo)
	}
}

function inicio(){
	removerAll();
	window.location.href = "/index.html";
}

$(document).ready(function(){

	let aux = {};

	function addConteudo() {
		if (produtos != null) {
			document.getElementById('conteudo').innerHTML += `<div class="card col-md-5 m-2" id="elemento${produtos[contador].codigo}">
			<img class="card-img-top" src="/${produtos[contador].img}">
			<div class="card-body" id="text">
				<h4 class="card-title text-dark">${produtos[contador].nome} </h4>
				<h5 class="card-text "> ${produtos[contador].marca} </h5>
				<p class="card-text"> <b> R$ ${produtos[contador].preco.toFixed(2)}</b></p>
				<p class="card-text">  ${produtos[contador].desc}</p>
				<div class="row align-self-end">
					<div class="col-8">
						<div class="number float-left">
							<input type="text" id="qtd-${produtos[contador].codigo}" value="${aux[produtos[contador].codigo]}" readonly />
						</div>
				</div>
				</div>
			</div>
		</div>`
		}
	}

	for (; contador < produtos.length; contador++) {
		if(!aux[produtos[contador].codigo])
			aux[produtos[contador].codigo] = 0
        aux[produtos[contador].codigo]++
    }

	for(let key in aux){
		//console.log(key)
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
		$('#detalhes').html('CPF: <span class="text-success">986.565.670-12</span>')
	else if(compra.forma == "Boleto")
		$('#detalhes').html('<span class="text-success">'+geraBoleto()+'</span>')
	else{
		validadeA = compra.validade.split("-")
		validade = validadeA[2]+"/"+validadeA[1]+"/"+validadeA[0]
		$('#detalhes').html('Número: <span class="text-success">'+compra.numero+'</span>'+
		'<br>Validade: <span class="text-success">'+validade+'</span>'+
		'<br>CVV: <span class="text-success">'+compra.cvv+'</span>')
	}
})

