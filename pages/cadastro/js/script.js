console.log("Hello");

let options = {
    translation: {
        '@' : {pattern: /[a-zÀ-ÿA-Z ]/, recursive: true},
        'E' : {pattern: /[\w@\-.+]/, recursive: true},
        'A' : {pattern: /[\w@\-.+]/},
        'S' : {pattern: /[\w@\-.+]/, optional:true}
    }
};


$('#nome').mask("@", options);
$('#email').mask("E", options);
$('#senha').mask("AAAAAAAASSSSSSSS", options);
$('#cpf').mask("000.000.000-00");
$('#rua').mask("@", options);
$('#num').mask("#");
$('#bairro').mask("@", options);
$('#cidade').mask("@", options);
$('#cep').mask("00000-000");
$('#celular').mask("(00) 00000-0000");
$('#telefone').mask("(00) 0000-0000");


function mostraSenha(){
    document.querySelector('#senha').type = "text";
    document.querySelector('#mostra').type = "hidden"
    document.querySelector('#oculta').type = "button"
}

function ocultaSenha(){
    document.querySelector('#senha').type = "password";
    document.querySelector('#oculta').type = "hidden"
    document.querySelector('#mostra').type = "button"
    
}


