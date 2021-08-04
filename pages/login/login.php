<!doctype html>
<html lang="en">
  <head>
    <title>
        Login
    </title>

    

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body class="bg-secondary">
    <div class="container" style="height: 88vh;">
    
        <?php

        function displayMessage($name, $color, $message, $description){
            if($description != ''){
                return "<div class='row justify-content-center m-3' id='$name'>
                            <div class='justify-content-center'>
                                <div class='row justify-content-center'>
                                    <h1 class='text-$color' fw-bolder'>$message</h1>
                                </div>
                                <div class='row justify-content-center'>
                                    <p class='text-info  align-self-center'> $description</p>
                                </div>
                            </div>
                        </div>
                        <script>
                            setTimeout(function() {
                                $('#$name').fadeOut();
                            }, 5000);
                        </script>";
            }
            return "<div class='row justify-content-center m-3' id='$name'>
                        <h2 class='text-$color fw-bolder'>$message</h2>
                    </div>
                    <script>
                        setTimeout(function() {
                            $('#$name').fadeOut();
                        }, 5000);
                    </script>";
        }
        

        if(isset($_POST['enviar']) && $_POST['enviar'] == "Cadastrar"){
            require_once('../../database/functions.php');
            $query = "INSERT INTO cliente(CPF, Nome, Email, Senha, CEP, Rua, Numero, Complemento, Bairro, Cidade, Pais, UF, nascimento) values('$_POST[cpf]', '$_POST[nome]', '$_POST[email]', '$_POST[senha]', '$_POST[cep]', '$_POST[rua]', '$_POST[num]', '$_POST[complemento]', '$_POST[bairro]', '$_POST[cidade]', '$_POST[pais]', '$_POST[uf]', '$_POST[nascimento]' )";

            $result = runSQL($query); 
            if($result == 1){
                if(isset($_POST['cel'])){
                    $query2 = "INSERT INTO telefone(CPF, Numero) value('$_POST[cpf]','$_POST[cel]')";
                    $result2 = runSQL($query2);
                }
                
                if(isset($_POST['tel'])){
                    $query2 = "INSERT INTO telefone(CPF, Numero) value('$_POST[cpf]','$_POST[tel]')";
                    $result2 = runSQL($query2);
                }
                $_SESSION["login"] = $_POST['cpf'];

            }
            if($result == 1){
                echo displayMessage("MensagemSucesso", "success", "Cadastrado com Sucesso!", "");
            }else echo displayMessage("MensagemErro", "warning", "Falha ao cadastrar", $result);
        }
        if(isset($_GET['erroLogin'])){
            if ($_GET['erroLogin'] == 0) {
                echo displayMessage("mensagemErroLogin", "warning", "Falha ao fazer login: E-mail/Senha Incorreto(s) :(", "");
            }else{
                echo displayMessage("mensagemErroLoginIndef", "warning", "Falha ao fazer login", "");
            }
        }

        ?>
        <div class="row mt-5 align-items-center justify-content-center">
            <div class="col-lg-6 col-md-8 col-sm-12 bg-dark border border-dark rounded" style="padding: 5%;">
                <h1 class="text-center text-light mb-5">Login</h1>
                <form method="POST" action="../../database/functions.php" >
                    <div class="form-group">
                        <label for="loginEmail" class="text-light">Email</label>
                        <input type="email" class="form-control" name="loginEmail" aria-describedby="emailHelp" placeholder="jorge@hotmail.com" required>
                    </div>
                    <div class="form-group">
                        <label for="loginPwd" class="text-light">Password</label>
                        <input type="password" class="form-control" name="loginPwd" required>
                    </div>
                    <div class="row justify-content-center mt-3">
                        <a href="../cadastro/cadastrar_cliente.php" style="color: white;">Cadastrar-se</a>
                    </div>
                    <div class="row justify-content-center mt-2">
                        <input type="submit" name="submit" value="Login" class="btn btn-primary" ></input>
                    </div>
                </form>
                
            </div>
        </div>
        
    </div>
    <div class="footer-copyright text-center align-self-end p-3 w-100 text-light bg-dark">Desenvolvido por João Vitor Couto e Rafael Correia</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>