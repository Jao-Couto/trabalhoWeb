let opened = false

let dados_selecionados = [];

function openNav() {
    
    if(window.screen.width > 600){
        document.getElementById("sidenav").style.width = "25%";
        document.getElementById("main").animate([
            // keyframes
            { opacity: '100%' },
            { opacity: '50%', filter: 'blur(.1vh)'}
          ], {
            // timing options
            duration: 300,
            easing: "ease",
            fill: "forwards"
          })
    }else{
        console.log("Tela de dispositivo mobile!");
        document.getElementById("sidenav").style.width = "100%";
    }
    setTimeout(function(){
        opened = true
    }, 500)
}

function closeNav() {
    opened = false
    document.getElementById("sidenav").style.width = "0";
    if( document.getElementById("sidenav").style.width != "100%" )
        document.getElementById("main").animate([
            // keyframes
            { opacity: '50%', filter: 'blur(.1vh)' },
            { opacity: '100%', filter: 'blur(0)' }
        ], {
            // timing options
            duration: 300,
            fill: "forwards"
        })
} 

function addCategoria(){
    document.getElementById('listCategoria').innerHTML +=   '<a href="">'+
                                                                '<li>'+
                                                                    'Entre Aqui!'+
                                                                '</li>'+
                                                            '</a>'
}


function addCarrinho(prod){
    dados_selecionados.push(prod);
    let para_enviar = JSON.stringify(dados_selecionados);
    sessionStorage.setItem('meus_dados', para_enviar);
}

let contador = 0

$(document).ready(function(){
    function addConteudo(){
        document.getElementById('conteudo').innerHTML +='<div class="innerContent">'+
                                                            '<div class="image"><img src="images/test.png" alt="" srcset=""> </div>'   + 
                                                            '<div class="text" id="text">'+ produtos[contador].nome +' <br>' + 
                                                                '<p> '+ produtos[contador].marca +' </p> <p><b> R$ '+produtos[contador].preco.toFixed(2) +'</p></b> <br>' +
                                                                '<p style="font-size: 1.8vh"> '+ produtos[contador].desc+' </p> '+
                                                                '<div class="comprar">Comprar</div>'+
                                                            '</div>'+
                                                        '</div>'
        document.getElementById('qtd').innerHTML = ++contador + ' Produtos'
    }
    
    for (let i = 0; i < produtos.length; i++) {
        addConteudo();
    }

    $('.comprar').click(function (event) {
        let texto = event.target.parentElement.innerText
        produtos.forEach(produto => {
            if(texto.includes(produto.nome)){
                addCarrinho(produto)
            }

        });
    })

    document.body.addEventListener("click", function(e){
        
        if (opened && e.target.id != "sidenav" && e.target.parentElement.id != "sidenav")
            closeNav()
    })

})