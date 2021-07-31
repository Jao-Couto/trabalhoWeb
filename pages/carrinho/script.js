console.log("ola");

let produtos = JSON.parse(sessionStorage.getItem("produtos"));
console.log(produtos);

let contador = 0;
let soma = 0;
let total = 0;

function credito() {
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
    comple: $("#comp").val(),
  };
  dadosCompra = {
    totProd: $("#totProd").text(),
    frete: $("#frete").text(),
    total: $("#total").text(),
    forma: $("input[name='formaPag']:checked").val(),
    numero: $("#numeroCart").val(),
    validade: $("#validade").val(),
    cvv: $("#cvv").val(),
  };
  let para_enviar = JSON.stringify(dadosUsu);
  sessionStorage.setItem("usuario", para_enviar);
  para_enviar = JSON.stringify(dadosCompra);
  sessionStorage.setItem("compra", para_enviar);
  window.location.href = "../confirmacao/confirmacao.php";
}

function outraForma() {
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
    comple: $("#comp").val(),
  };
  dadosCompra = {
    totProd: $("#totProd").text(),
    frete: $("#frete").text(),
    total: $("#total").text(),
    forma: $("input[name='formaPag']:checked").val(),
  };
  let para_enviar = JSON.stringify(dadosUsu);
  sessionStorage.setItem("usuario", para_enviar);
  para_enviar = JSON.stringify(dadosCompra);
  sessionStorage.setItem("compra", para_enviar);
  window.location.href = "../confirmacao/confirmacao.php";
}

$(document).ready(function () {
  let aux = {};

  let options = {
    translation: {
      "@": { pattern: /[a-zÀ-ÿA-Z ]/, recursive: true },
      E: { pattern: /[\w@\-.+]/, recursive: true },
      A: { pattern: /[\w@\-.+]/ },
      S: { pattern: /[\w@\-.+]/, optional: true },
    },
  };

  $("#nome").mask("@", options);
  $("#email").mask("E", options);
  $("#senha").mask("AAAAAAAASSSSSSSS", options);
  $("#cpf").mask("000.000.000-00");
  $("#rua").mask("@", options);
  $("#num").mask("#");
  $("#bairro").mask("@", options);
  $("#cidade").mask("@", options);
  $("#cep").mask("00000-000");
  $("#celular").mask("(00) 00000-0000");
  $("#telefone").mask("(00) 0000-0000");
  $("#cvv").mask("000");
  $("#numeroCart").mask("0000 0000 0000 0000");

  function addConteudo() {
    if (produtos != null) {
      document.getElementById(
        "conteudo"
      ).innerHTML += `<div class="card col-md-5 m-2" id="elemento${
        produtos[contador].codigo
      }">
			<img class="card-img-top" src="${produtos[contador].img}">
			<div class="card-body" id="text">
				<h4 class="card-title text-dark">${produtos[contador].nome} </h4>
				<h5 class="card-text "> ${produtos[contador].marca} </h5>
				<p class="card-text"> <b> R$ ${produtos[contador].preco}</b></p>
				<p class="card-text">  ${produtos[contador].descricao}</p>
				<div class="row">
					<div class="col-8 align-self-end">
						<div class="number float-left">
							<button class="minus">-</button>
							<input type="text" id="qtd-${produtos[contador].codigo}" value="${
        aux[produtos[contador].codigo]
      }" readonly />
							<button class="plus">+</button>
						</div>
					</div>
					<div class="col-4 align-self-end">
						<a onclick="remover('elemento${
              produtos[contador].codigo
            }')" id="remove" value="REMOVER"
							class="btn btn-danger btn-sm float-right">Remover</a>
					</div>
				</div>
			</div>
		</div>`;
    }
  }

  if (produtos) {
    for (; contador < produtos.length; contador++) {
      if (!aux[produtos[contador].codigo]) aux[produtos[contador].codigo] = 0;
      aux[produtos[contador].codigo]++;
      //console.log(aux)
      //console.log(produtos);
    }
  }

  for (let key in aux) {
    //console.log(key)
    if (produtos) {
      for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].codigo == key) {
          contador = i;
        }
      }
      addConteudo();
      soma += produtos[contador].preco * aux[key];
    }
  }

  document.getElementById("totProd").innerText = "R$ " + soma.toFixed(2);
  let frete = (Math.random() * (10 - 50) + 50).toFixed(2);
  document.getElementById("frete").innerText = "R$ " + frete;
  total = (parseFloat(soma) + parseFloat(frete)).toFixed(2);
  document.getElementById("total").innerText = "R$ " + (total*0.9).toFixed(2);

  $('input:radio[name="formaPag"]').change(function () {
    if ($("input[name='formaPag']:checked").val() == "Cartão de crédito") {
      console.log(total);
      document.getElementById("total").innerText = "R$ " + total;
      $("#dadosCart").css("display", "flex");
    } else if ($("input[name='formaPag']:checked").val() == "Boleto") {
      console.log(total);
      document.getElementById("total").innerText = "R$ " + (total*0.9).toFixed(2);
      $("#dadosCart").css("display", "none");
    } else if ($("input[name='formaPag']:checked").val() == "PIX") {
      console.log(total);
      document.getElementById("total").innerText = "R$ " + (total*0.85).toFixed(2);
      $("#dadosCart").css("display", "none");
    }
  });

  $("#comprar").click(function () {
    if (produtos) {
      if (produtos.length > 0) {
        if (
          $("#nome").val() != "" &&
          $("#cpf").val() != "" &&
          $("#cpf").val().length == 14 &&
          $("#rua").val() != "" &&
          $("#num").val() != "" &&
          $("#bairro").val() != "" &&
          $("#cidade").val() != "" &&
          $("#cep").val() != "" &&
          $("#cep").val().length == 9
        ) {
          if ($("input[name='formaPag']:checked").val() == "Cartão de crédito")
            if (
              $("#numeroCart").val() != "" &&
              $("#numeroCart").val().length == 19 &&
              $("#validade").val() != "" &&
              $("#cvv").val() != "" &&
              $("#cvv").val().length == 3
            ) {
              credito();
            } else
              window.alert("Preencha os campos obrigatórios corretamente!");
          else outraForma();
        } else window.alert("Preencha os campos obrigatórios corretamente!");
      } else window.alert("Carrinho vazio!");
    }
  });

  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    let id = $input.attr("id");
    id = id.split("-")[1];
    if (produtos) {
      for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].codigo == id) {
          id = i;
        }
      }
      if (count >= 1) {
        soma = parseFloat(soma) - produtos[id].preco;
        document.getElementById("totProd").innerText = "R$ " + soma.toFixed(2);
        total = (parseFloat(total) - parseFloat(produtos[id].preco)).toFixed(2);
        document.getElementById("total").innerText = "R$ " + (total*0.9).toFixed(2);
      }
    }
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    let id = $input.attr("id");
    id = id.split("-")[1];
    if (produtos) {
      for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].codigo == id) {
          id = i;
        }
      }

      soma = parseFloat(soma) + produtos[id].preco;
      document.getElementById("totProd").innerText = "R$ " + soma.toFixed(2);
      total = ((parseFloat(total) + parseFloat(produtos[id].preco))).toFixed(2);
      document.getElementById("total").innerText = "R$ " + (total*0.9).toFixed(2);
    }
    return false;
  });
});

function remover(id) {
  let remo = id.substring(8);
  let pos = remo;
  if (produtos) {
    for (var i = 0; i < produtos.length; i++) {
      if (produtos[i].codigo == pos) {
        pos = i;
      }
    }
    //console.log(pos)
    //console.log($("#qtd-" + remo).val());
    soma = parseFloat(soma) - produtos[pos].preco * $("#qtd-" + remo).val();
    document.getElementById("totProd").innerText = "R$ " + soma.toFixed(2);
    total = (
      parseFloat(total) -
      produtos[pos].preco * $("#qtd-" + remo).val
    ).toFixed(2);
    document.getElementById("total").innerText = "R$ " + (total*0.9).toFixed(2);

    produtos.splice(pos, 1);
    sessionStorage.setItem("produtos", JSON.stringify(produtos));

    $("#" + id).remove();
  }
}

function removerAll() {
  if (produtos) {
    for (var i = 0; i < produtos.length; ) {
      remover("elemento" + produtos[i].codigo);
    }
  }
}
