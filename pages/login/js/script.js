
let options = {
    translation: {
        'E' : {pattern: /[\w@\-.+]/, recursive: true},
        'A' : {pattern: /[\w@\-.+]/},
        'S' : {pattern: /[\w@\-.+]/, optional:true}
    }
};


$('#email').mask("E", options);
$('#senha').mask("AAAAAAAASSSSSSSS", options);


document.querySelector('#mostra').addEventListener("click", function(e){
    document.querySelector('#senha').type = "text";
    document.querySelector('#mostra').type = "hidden"
    document.querySelector('#oculta').type = "button"
})

document.querySelector('#oculta').addEventListener("click", function(e){
    document.querySelector('#senha').type = "password";
    document.querySelector('#oculta').type = "hidden"
    document.querySelector('#mostra').type = "button"
    
})

document.querySelector('#logar').addEventListener("click", function(e){
    for(let i =0; i< user.length; i++){
        if($("#email").val() == user[i].email && $("#senha").val() == user[i].senha){

            return;
        }
    }
    alert("Senha e/ou email incorreto")
})

function verificaLogin(){
    console.log(document.querySelector('#senha').val)
    console.log($("#senha").val());
    console.log($("#email").val());
}


$(document).ready(function(){
    $('#form_login').on("submit", function(event){
        event.preventDefault();

        var dados= $("#form_login").serialize();
                /*
        $.post("../cadastro/data-json.js", dados, function(retorno){
            console.log(retorno);
        });*/
    })
});


