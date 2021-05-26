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
    sessionStorage.setItem('meus_dados', JSON.stringify(dados_selecionados));
}

let contador = 0
/*
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

})*/

function toggleDesc(obj) {
    $(obj).toggle()
}


$(document).ready(function(){
    let maxAmountPerPage = 18;
    let MAX = produtos.length
    let maxPages = MAX/maxAmountPerPage
    let j = 0
    let elementos = produtos
    let presentPage = 1
    let active = 0
    let activeElm
    let numAmount
    inicializaPag()

    for (; j < MAX; j++) {
        elementos[j] = createDiv(elementos[j].nome, elementos[j].preco, elementos[j].desc, "carangaru.png",j);
    }
    $("#itens")[0].innerHTML = ""
    elementos.slice(0, maxAmountPerPage).forEach(elemento => {
        $("#itens")[0].innerHTML += elemento   
    }); 
    
    function inicializaPag() {
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" href="#" id="prevBtn">Previous</a></li>`
        for (let i = 0; i < maxPages; i++) {
            $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" id="pag`+(i+1)+`">`+(i+1)+`</a></li>`
        }
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" href="#" id="nextBtn">Next</a></li>`
        activeElm = $("#pageSelect")[0].childNodes[(2+active)]
        activeElm.className += " active"
        console.log($("#pageSelect")[0].childNodes[(2+active)]);  
    }

    
    function createDiv(nome, preco, desc, img,i){
        return `<div class="card" >
        <img src="`+ img +`" alt="Denim Jeans" class="card-img-top">
        <div class="card-body p-0">
            <div class="m-2" style='min-height: 25vh'>
                <h4 class="card-title">`+ nome +`</h4>
                <p class="card-text text-muted"> R$ `+ preco.toFixed(2) +`</p>
                <p class="card-text" style="display: none;" id="desc`+i+`">`+ desc +`</p>
                <button class="btn btn-secondary" onclick="toggleDesc('#desc`+i+`')"> </button>
            </div>
            <a class="btn btn-block" id='compra`+i+`' name='botao' style="width: 100%;"><h6 class="small">Adicionar ao Carrinho`+i+`</h6></a>
        </div>
    </div>`
    }

    

    $("#nextBtn").click(function(event){
        if(!nextPage()){
            event.preventDefault();
            return
        }
    })

    $("#prevBtn").click(function(event){
        if(!prevPage())
            event.preventDefault();    
    })

    function nextPage(){
        if(presentPage < maxPages){
            presentPage++;
            activeElm.classList.toggle("active");
            active++
            activeElm = $("#pageSelect")[0].childNodes[active+2]
            activeElm.classList.toggle("active");
            return true
        }
        return false
    }

    function prevPage(){
        if(presentPage > 1){
            presentPage--;
            activeElm.classList.toggle("active");
            active--
            activeElm = $("#pageSelect")[0].childNodes[active+2]
            activeElm.classList.toggle("active");
            return true
        }
        return false
    }

    $("a[name='botao']").click(function(e) {
        $target = $('#'+e.target.closest("div").childNodes[3].id);
        var salvaTXT = $target[0].innerHTML
        $target[0].style.minHeight = $target[0].offsetHeight;
        
        $target.animate({
            backgroundColor: "#218838",
            color: "#218838"
        }, 600, 'linear', function(){$target[0].innerHTML = ""})
        .animate({ color: "white" }, 500, 'linear', function(){
            $target[0].innerHTML = "<h6 class='small'>Item Comprado com Sucesso!</h6>"
        })
        setTimeout(function(){
            $target.animate({
                backgroundColor: "black",
                color: "black"
            }, 600, 'linear', function(){$target[0].innerHTML = ""}).animate({ color: "white" }, 500, 'linear', function(){
                    $target[0].innerHTML = salvaTXT
                })
        }, 3500)
    })
        
})
