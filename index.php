<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/styleN.css">
    
    <title>Início</title>
    <!--<link rel="sortcut icon" href="/images/carrinho" type="image/gif" />-->
    
    <?php 

        require_once('database/functions.php');
        session_start();

        if(isset($_POST['enviar']) && $_POST['enviar'] == "Cadastrar"){
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
        }

<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
        $queryProdutos = "SELECT produto.Codigo, 
                                 produto.Descricao, 
                                 produto.Nome, 
                                 produto.Preco, 
                                 produto.URL_img, 
                                 marca.Nome as marca, 
                                 categoria.Nome as categoria 
                          FROM produto INNER JOIN marca ON marca.CNPJ = produto.CNPJ_Marca
                                       INNER JOIN categoria on categoria.Codigo = produto.Cod_Categoria";
        $resultProdutos = runSQL($queryProdutos);
        $produtos;
        while($rowProdutos = mysqli_fetch_assoc($resultProdutos)){
            $produtos[$rowProdutos['Codigo']] = $rowProdutos;
        }
        $js_produtos = json_encode($produtos);
        echo "<script type='text/javascript'>
            let produtos = Object.values($js_produtos);
<<<<<<< Updated upstream
            console.log(produtos);
            </script>";
    ?>

    
=======
            
            </script>";
    ?>

    <link rel="stylesheet" href="css/styleN.css">
    <script src="js/scriptN.js"></script>
    <title>Início</title>
    <link rel="sortcut icon" href="/images/carrinho.png" type="image/gif" />
>>>>>>> Stashed changes
</head>
<body>
    <div class="jumbotron text-center" style="padding: 0; padding-top: 2%; margin-bottom:0">
        <h4 class="display-4">Site de Compras</h4>
        <p class="lead">Faça Suas Compras Aqui! Não Perca seu Tempo nem seu Dinheiro! :)</p>
        
        <div class="d-flex w-7 justify-content-end p-3 bg-secondary text-white" style="margin-top: 3%;">
            <div class="container mt-1">
                <div class="row">
                    <div class="col-6">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="dropSelect">Filtragem por Categoria</label>
                            </div>
                            <select class="custom-select" id="dropSelect">
                              <option value="all" selected>Todos</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="p-2">
                <a href="pages/carrinho/carrinho.php" class="btn btn-light align-content-center">
                    <i class="fas fa-shopping-cart"></i>
                </a>

                <?php if (isset($_SESSION["login"])){?>
                    
                    <a href="database/logout.php" class="btn btn-danger align-content-center">
                        <i class="fas fa-sign-out-alt"></i>
                    </a>
                
                <?php }else { ?>

                    <a href="pages/login/login.php" class="btn btn-light align-content-center">
                        <i class="fas fa-user"></i>
                    </a>

                <?php } ?>
            </div>
            
        </div>
    </div>
    <?php
                if(isset($_POST['enviar']) && $_POST['enviar'] == "Cadastrar"){
                    if($result == 1){
                        echo '
                            <div class="row justify-content-center" id="cadastroSucesso">
                                <div class="display-4 text-success fw-bolder">Cadastrado com sucesso!</div>
                            </div>
                            <script>
                                setTimeout(function() {
                                    $("#cadastroSucesso").fadeOut();
                                }, 8000);
                            </script>';
                    }
                    else echo '
                        <div class="row justify-content-center" id="cadastroErro">
                            <div class="display-4 text-success fw-bolder">Falha ao cadastrar</div>
                        </div>
                        <script>
                            setTimeout(function() {
                                $("#cadastroErro").fadeOut();
                            }, 8000);
                        </script>';
                }


            
            ?>
    <div class="container-fluid mt-5">
        <div class="row p-3 justify-content-center"  id="itens">
        </div>
    </div>
    </div>
        <ul class="pagination justify-content-center m-5 align-self-end" id="pageSelect">
        </ul>
    </div>
    
    <div class="footer-copyright text-center bg-secondary pt-3">Desenvolvido por João Vitor Couto e Rafael Correia
    </div>
</body>
</html>
<script src="scriptN.js"></script>