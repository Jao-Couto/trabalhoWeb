console.log("Hello");

function mascaraDeTelefone(telefone){
    const textoAtual = telefone.value;
    let textoAjustado;
    if(textoAtual.length == 2){
        textoAjustado = textoAtual.replace(/(\d{2})/,
                            function( regex, arg0) {
                            return "("+arg0+")";
                            }); 
                            telefone.value = textoAjustado;
    }else if(textoAtual.length == 9){
    textoAjustado = textoAtual.replace(/(\d{5})/,
                        function( regex,  arg1) {
                        return arg1 + '-';
                        });
                        telefone.value = textoAjustado;
    }else if(textoAtual.length == 10){
        textoAjustado = textoAtual.replace(/(\d{1})/,
                            function( regex,  arg1) {
                            return arg1;
                            });
                            telefone.value = textoAjustado;
        }
    else if(textoAtual.length>=14){
        textoAjustado = textoAtual.substring(0, 14);
        telefone.value = textoAjustado;
    }
    
}

function mascaraDeCep(cep){
    const cepAtual = cep.value;
    let cepAjustado;
    console.log(cepAtual.length);
    if(cepAtual.length == 9){
        console.log("entroe");
        cepAjustado = cepAtual.replace(/(\d{8})(\d{1})/,
                            function( regex,  arg1) {
                            return arg1;
                            });
                            cep.value = cepAjustado;
    }
}