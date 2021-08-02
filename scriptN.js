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

let maxAmountPerPage = 13;
let presentPage = 1
let MAX
let maxPages
let elementos
let activeElm

function nextPage(event){
    if(presentPage < maxPages){
        presentPage++;
        activeElm.classList.toggle("active");
        activeElm = $("#pageSelect")[0].childNodes[presentPage]
        activeElm.classList.toggle("active");
        carregaPag()
        return
    }
    event.preventDefault();
}

function prevPage(event){
    if(presentPage > 1){
        presentPage--;
        activeElm.classList.toggle("active");
        activeElm = $("#pageSelect")[0].childNodes[presentPage]
        activeElm.classList.toggle("active");
        carregaPag()
        return
    }
    event.preventDefault();
}

function carregaPag() {
    
    $("#itens")[0].innerHTML = ""
    elementos.slice(((presentPage-1) * maxAmountPerPage) + 1, (presentPage * maxAmountPerPage)).forEach(elemento => {
        $("#itens")[0].innerHTML += elemento
    });    
}

$(document).ready(function(){
    
    
    elementos = createDiv(produtos);
    
    carregaPag()
    carregaSelPag()
    let arrCategoria = []
    inicializaPag()

    function carregaSelPag() {
        presentPage = 1
        MAX = elementos.length
        maxPages = Math.ceil(MAX/maxAmountPerPage)
        $("#pageSelect")[0].innerHTML = ""
        $("#pageSelect")[0].innerHTML += `<li class="page-item" onclick="prevPage(event)"><a class="h-100 page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>`
        for (let i = 1; i <= maxPages; i++) {
            $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" id="pag`+i+`">`+i+`</a></li>`
        }
        $("#pageSelect")[0].innerHTML += `<li class="page-item" onclick="nextPage(event)"><a class="h-100 page-link" href="#" ><i class="bi bi-chevron-right"></i></a></li>`
        activeElm = $("#pageSelect")[0].childNodes[1]
        activeElm.className += " active"
    }    
    
    function inicializaPag() {
        produtos.forEach(elem => {
            if(arrCategoria.indexOf(elem.categoria) == -1)
                arrCategoria.push(elem.categoria)
        })/*
        for (let i = 0; i < arrCategoria.length; i++) {
            let opt = document.createElement("option")
            opt.value = arrCategoria[i];
            opt.innerHTML = arrCategoria[i];
            $("#filCategoria")[0].appendChild(opt)   
        }*/
    }
    
    function createDiv(produtos){
        let respArr = [""]
        let  strResp
        produtos.forEach(elem =>{
            strResp =   `<div class="col-sm-12 col-lg-3 col-md-4 m-2  ">
                            <div class="card h-100 border-2 border-dark">
                                <img src="`+ elem.img +`" class="card-img-top">
                                <div class="card-body">
                                    <h4 class="card-title">`+ elem.nome +`</h4>
                                    <p class="card-text text-muted"> R$ `+ elem.preco +`</p>
                                    <p class="card-text" style="display: none;" id="desc`+elem.codigo+`">`+ elem.descricao +`</p>
                                    <button type="button" class="btn align-self-end btn-outline-primary"  onclick="toggleDesc('#desc`+elem.codigo+`')">Info</button>
                                </div>
                                <div class="card-footer bg-dark border border-light p-0" style="transform: rotate(0); ">
                                    <a class="stretched-link btn btn-dark text-white p-3 m-0" id='compra`+elem.codigo+`' onclick="addCarrinho(`+elem.codigo+`)" name='botao' style="width: 100%;"><h6 class="small">Adicionar ao Carrinho</h6></a>
                                </div>
                            </div>
                        </div>`
            respArr.push(strResp)
        })
        return respArr
    }
})
