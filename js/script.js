
let opened = false

import 

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
    console.log(prod);
}

$(document).ready(function(){
    function addConteudo(){
        document.getElementById('conteudo').innerHTML += ' <div class="innerContent"> <div class="image"><img src="images/test.png" alt="" srcset=""> </div> <div class="text" id="text">'+ produtos[contador].nome +' <br> <p> '+ produtos[contador].marca +' </p> <br> <p style="font-size: 1.8vh"> '+ produtos[contador].desc+' </p> <div class="comprar"> </div> </div></div>'
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
        $elem = event.target
        $elem.animate({ width: '1vh' }, 300).then(function(){
            $elem.animate({width: '10vh' },500).then(function(){
                $elem.animate({ width: '10vh' },500).then(function(){
                    $elem.animate({ width: '1vh' },300 ) 
                })
            })
        });
        
        
        
    })
})




document.body.addEventListener("click", function(e){
    
    if (opened && e.target.id != "sidenav" && e.target.parentElement.id != "sidenav")
        closeNav()
})
