let dados_selecionados = [];

function addCarrinho(coordProd){
    dados_selecionados.push(produtos[parseInt(coordProd)]);
    sessionStorage.setItem('produtos', JSON.stringify(dados_selecionados));
}

function toggleDesc(obj) {
    $(obj).toggle()
}


$(document).ready(function(){
    let maxAmountPerPage = 18;
    let MAX = produtos.length
    let maxPages = MAX/maxAmountPerPage
    let elementos = createDiv();
    let presentPage = 1
    let active = 0
    let activeElm
    inicializaPag()

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

    
    function createDiv(){
        let respArr = []
        let nome, preco, desc, img, strResp, i=0
        produtos.forEach(elem =>{
            if(elem.preco != undefined){
                strResp = ""
                nome = elem.nome
                preco = elem.preco.toFixed(2)
                desc = elem.desc
                img = elem.img
                strResp +=   `<div class="col-sm-12 col-lg-3 col-md-4 m-2"><div class="card h-100">
                                    <img src="`+ img +`" class="card-img-top">
                                    <div class="card-body">
                                        <h4 class="card-title">`+ nome +`</h4>
                                        <p class="card-text text-muted"> R$ `+ preco +`</p>
                                        <p class="card-text" style="display: none;" id="desc`+i+`">`+ desc +`</p>
                                        <button type="button" class="btn align-self-end btn-outline-info"  onclick="toggleDesc('#desc`+i+`')">Info</button>
                                    </div>
                                    <div class="card-footer bg-dark" style="transform: rotate(0);">
                                        <a class="stretched-link btn text-white" id='compra`+i+`' onclick="addCarrinho(`+i+`)" name='botao' style="width: 100%;"><h6 class="small">Adicionar ao Carrinho</h6></a>
                                    </div>
                                </div>
                            </div>`
                i++
                respArr.push(strResp)
            }
        })
        return respArr
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
        
})
