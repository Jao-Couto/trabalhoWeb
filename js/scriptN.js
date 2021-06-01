let dados_selecionados = []
if(JSON.parse(sessionStorage.getItem('produtos')) != null){
    JSON.parse(sessionStorage.getItem('produtos')).forEach(produto =>{
        dados_selecionados.push(produto)
    });
}
    

function addCarrinho(coordProd){
    produtos.forEach(produto =>{
        if(produto.codigo == coordProd){
            dados_selecionados.push(produto);
            sessionStorage.setItem('produtos', JSON.stringify(dados_selecionados));
        }
    })
    
}

function toggleDesc(obj) {
    $(obj).toggle()
}


$(document).ready(function(){
    let maxAmountPerPage = 18;
    let MAX = produtos.length
    let maxPages = MAX/maxAmountPerPage
    let elementos = createDiv(produtos);
    let presentPage = 1
    let active = 0
    let activeElm
    let arrCategoria = []
    inicializaPag()


    function carregaPag() {
        $("#itens")[0].innerHTML = ""
        elementos.slice(0, maxAmountPerPage).forEach(elemento => {
            $("#itens")[0].innerHTML += elemento   
        });    
    }
    
    function inicializaPag() {
        carregaPag()
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" href="#" id="prevBtn">Previous</a></li>`
        for (let i = 0; i < maxPages; i++) {
            $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" id="pag`+(i+1)+`">`+(i+1)+`</a></li>`
        }
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" href="#" id="nextBtn">Next</a></li>`
        activeElm = $("#pageSelect")[0].childNodes[(2+active)]
        activeElm.className += " active"

        
        produtos.forEach(elem => {
            if(arrCategoria.indexOf(elem.categoria) == -1)
                arrCategoria.push(elem.categoria)
        })
        for (let i = 0; i < arrCategoria.length; i++) {
            let opt = document.createElement("option")
            opt.value = arrCategoria[i];
            opt.innerHTML = arrCategoria[i];
            $("#dropSelect")[0].appendChild(opt)   
        }
    }
    
    function createDiv(produtos){
        let respArr = []
        let  strResp, i=0
        produtos.forEach(elem =>{
            if(elem.preco != undefined){
                strResp =   `<div class="col-sm-12 col-lg-3 col-md-4 m-2"><div class="card h-100">
                                    <img src="`+ elem.img +`" class="card-img-top">
                                    <div class="card-body">
                                        <h4 class="card-title">`+ elem.nome +`</h4>
                                        <p class="card-text text-muted"> R$ `+ elem.preco.toFixed(2) +`</p>
                                        <p class="card-text" style="display: none;" id="desc`+i+`">`+ elem.desc +`</p>
                                        <button type="button" class="btn align-self-end btn-outline-primary"  onclick="toggleDesc('#desc`+i+`')">Info</button>
                                    </div>
                                    <div class="card-footer bg-dark p-0" style="transform: rotate(0);">
                                        <a class="stretched-link btn btn-dark text-white p-3 m-0" id='compra`+i+`' onclick="addCarrinho(`+elem.codigo+`)" name='botao' style="width: 100%;"><h6 class="small">Adicionar ao Carrinho</h6></a>
                                    </div>
                                </div>
                            </div>`
                i++
                respArr.push(strResp)
            }
        })
        return respArr
    }

    $("#btnDropSelect").click(function(){
        let sel = $("#dropSelect")[0].value
        if(arrCategoria.indexOf(sel) != -1){
            let filCategoria = []
            produtos.forEach(prod =>{
                if(prod.categoria == sel)
                    filCategoria.push(prod)
            })
            elementos = createDiv(filCategoria)
            carregaPag()
        }
    })

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
            activeElm = $("#pageSelect")[0].childNodes[presentPage+2]
            activeElm.classList.toggle("active");
            return true
        }
        return false
    }

    function prevPage(){
        if(presentPage > 1){
            presentPage--;
            activeElm.classList.toggle("active");
            activeElm = $("#pageSelect")[0].childNodes[presentPage+2]
            activeElm.classList.toggle("active");
            return true
        }
        return false
    }
        
})
