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
    let maxAmountPerPage = 13;
    let MAX = produtos.length
    let maxPages = MAX/maxAmountPerPage
    let elementos = createDiv(produtos);
    let presentPage = 1
    let activeElm
    let arrCategoria = []
    inicializaPag()

    function carregaSelPag() {
        MAX = produtos.length
        maxPages = MAX/maxAmountPerPage
        $("#pageSelect")[0].innerHTML = ""
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" href="#" id="prevBtn">Previous</a></li>`
        for (let i = 1; i <= maxPages; i++) {
            $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" id="pag`+i+`">`+i+`</a></li>`
        }
        $("#pageSelect")[0].innerHTML += `<li class="page-item"><a class="page-link" href="#" id="nextBtn">Next</a></li>`
        activeElm = $("#pageSelect")[0].childNodes[(presentPage)]
        activeElm.className += " active"
    }

    function carregaPag() {
        
        $("#itens")[0].innerHTML = ""
        elementos.slice(((presentPage-1) * maxAmountPerPage) + 1, (presentPage * maxAmountPerPage)).forEach(elemento => {
            $("#itens")[0].innerHTML += elemento   
        });    
    }
    
    function inicializaPag() {
        carregaPag()
        carregaSelPag()
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
        let respArr = [""]
        let  strResp, i=0
        produtos.forEach(elem =>{
            if(elem.preco != undefined){
                strResp =   `<div class="col-sm-12 col-lg-3 col-md-4 m-2">
                                <div class="card h-100">
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

    $("#dropSelect").change(function(){
        let sel = $("#dropSelect")[0].value
        if(sel == "all"){
            elementos = createDiv(produtos);
            presentPage = 1
            carregaSelPag()
            carregaPag()
            return
        }
        if(arrCategoria.indexOf(sel) != -1){
            presentPage = 1
            let filCategoria = []
            produtos.forEach(prod =>{
                if(prod.categoria == sel)
                    filCategoria.push(prod)
            })
            elementos = createDiv(filCategoria)
            carregaSelPag()
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
            activeElm = $("#pageSelect")[0].childNodes[presentPage]
            activeElm.classList.toggle("active");
            carregaPag()
            return true
        }
        return false
    }

    function prevPage(){
        if(presentPage > 1){
            presentPage--;
            activeElm.classList.toggle("active");
            activeElm = $("#pageSelect")[0].childNodes[presentPage]
            activeElm.classList.toggle("active");
            carregaPag()
            return true
        }
        return false
    }
        
})
