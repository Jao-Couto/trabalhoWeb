
$(document).ready(function(){
    let maxAmountPerPage = 18;
    let MAX = 180
    let maxPages = MAX/maxAmountPerPage
    let j = 0
    let elementos = []
    let paginas = []
    let presentPage = 1
    let active = 0
    let activeElm
    let numAmount
    inicializaPag()

    for (; j < MAX; j++) {
        elementos[j] = createDiv("Teste", 300, "Lorem Ipsilum", "carangaru.png",j);
    }
    $("#itens")[0].innerHTML = ""
    elementos.slice(0, maxAmountPerPage).forEach(elemento => {
        $("#itens")[0].innerHTML += elemento   
    }); 
    
    function inicializaPag() {
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" href="#" id="prevBtn">Previous</a></li>`
        for (let i = 0; i < maxPages; i++) {
            paginas[i] = `<li class="page-item"><a class="page-link" id="pag`+(i+1)+`" href="#">`+(i+1)+`</a></li>`
        }
        paginas.slice(0, 2).forEach(elemento => {
            $("#pageSelect")[0].innerHTML += elemento   
        });
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link">...</a></li>`
        paginas.slice(paginas.length -2, paginas.length).forEach(elemento => {
            $("#pageSelect")[0].innerHTML += elemento   
        });
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" href="#" id="nextBtn">Next</a></li>`
        activeElm = $("#pageSelect")[0].childNodes[(2+active)]
        activeElm.className += " active"
        console.log($("#pageSelect")[0].childNodes[(2+active)]);  
    }

    function createDiv(nome, preco, desc, img,i){
        return `<div class="card ">
        <img src="`+ img +`" alt="Denim Jeans" class="card-img-top">
        <div class="card-body p-0">
            <div class="m-2">
                <h4 class="card-title">`+ nome +`</h4>
                <p class="card-text text-muted"> R$ `+ preco.toFixed(2) +`</p>
                <p class="card-text">`+ desc +`</p>
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
        
        activeElm.className = activeElm.className.slice(0, activeElm.className.length-7)
        active++
        activeElm = $("#pageSelect")[0].childNodes[(2+active)]
        activeElm.className += " active"
    })

    $("#prevBtn").click(function(event){
        if(!prevPage())
            event.preventDefault();    
    })

    function nextPage(){
        if(presentPage < maxPages){
            numAmount = presentPage * maxAmountPerPage;
            $("#itens")[0].innerHTML = ""
            elementos.slice(numAmount, numAmount + maxAmountPerPage).forEach(elemento => {
               $("#itens")[0].innerHTML += elemento   
            });
            presentPage++;
            return true
        }
        return false
    }

    function prevPage(){
        if(presentPage > 1){
            presentPage--;
            numAmount = presentPage * maxAmountPerPage;
            $("#itens")[0].innerHTML = ""
            elementos.slice(numAmount, numAmount + maxAmountPerPage).forEach(elemento => {
               $("#itens")[0].innerHTML += elemento   
            });
            return true
        }
        return false
    }

    function selectPage(num){
        if(num > 1 && num < maxPages){
            presentPage = num;
            numAmount = presentPage * maxAmountPerPage;
            $("#itens")[0].innerHTML = ""
            elementos.slice(numAmount, numAmount + maxAmountPerPage).forEach(elemento => {
               $("#itens")[0].innerHTML += elemento   
            });
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
