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
    <script> let produtos = [];</script>
    <?php 

        require_once('database/functions.php');

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
        $filPreco = "ORDER BY produto.codigo asc"; 
        $filCategoria = "";
        if(isset($_POST['submit']) && $_POST['submit'] == "Filtrar"){
            if(isset($_POST["filPreco"]) && $_POST['filPreco'] != ""){
                $filPreco = " ORDER BY produto.preco ". $_POST["filPreco"] . " ";
                $filtroPreco = $_POST["filPreco"];
            }
            if(isset($_POST["filCategoria"]) && $_POST['filCategoria'] != ""){
                $filCategoria = " where categoria.Codigo = " . $_POST["filCategoria"]. " ";
                $filtroCategoria = $_POST["filCategoria"];
            }
        }


        $queryProdutos = "SELECT produto.codigo, 
                                 produto.descricao, 
                                 produto.nome, 
                                 produto.preco, 
                                 produto.img, 
                                 marca.Nome as marca, 
                                 categoria.Nome as categoria 
                          FROM produto INNER JOIN marca ON marca.CNPJ = produto.CNPJ_Marca 
                                       INNER JOIN categoria on categoria.Codigo = produto.Cod_Categoria $filCategoria $filPreco ";
        $resultProdutos = runSQL($queryProdutos);
        $produtos;
        $i = 0;
        while($rowProdutos = mysqli_fetch_assoc($resultProdutos)){
            $produtos[$i] = $rowProdutos; $i++;
        }
        if(!empty($produtos)){
            $js_produtos = json_encode($produtos);
            if(isset($_GET["debug"]) && strcasecmp( " '". $_GET["debug"]. "' ", "true")){
                echo $queryProdutos;
            }
            echo "<script type='text/javascript'> produtos = Object.values($js_produtos); </script>";
        }
    ?>

    <link rel="stylesheet" href="css/styleN.css">
    <script src="scriptN.js"></script>
    <title>Início</title>
</head>
<body >
    <div class="jumbotron text-center" style="padding: 0; padding-top: 2%; margin-bottom:0">
        <h4 class="display-4">Site de Compras</h4>
        <p class="lead">Faça Suas Compras Aqui! Não Perca seu Tempo nem seu Dinheiro! :)</p>
        
        <div class="conainer p-3 bg-dark text-white" style="margin-top: 3%;">
            <div class="row align-items-center">
                <div class="col-10">
                    <div class="container mt-1">
                        <form action="index.php" method="POST">
                            <div class="row">
                                <div class="col-lg-5 col-sm-12 m-1">

                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="filCategoria">Filtragem por Categoria</label>
                                        </div>
                                        <select class="custom-select" name="filCategoria">
                                            
                                            <?php 
                                                $options = "";
                                                $result = runSQL("SELECT * FROM categoria");
                                                if(isset($filtroCategoria)){
                                                    while($row = mysqli_fetch_assoc($result)){
                                                        if($filtroCategoria == $row['Codigo']){
                                                            $options .=  "<option value='$row[Codigo]' selected>$row[Nome]</option>";
                                                            continue;
                                                        }
                                                        $options .=  "<option value='$row[Codigo]' >$row[Nome]</option>";
                                                    }
                                                    echo "<option value=''>Todos</option>";
                                                }else{
                                                    while($row = mysqli_fetch_assoc($result)){
                                                        $options .=  "<option value='$row[Codigo]'>$row[Nome]</option>";
                                                    }
                                                    echo "<option value='' selected>Todos</option>";
                                                }
                                                echo $options;
                                            ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-sm-10 m-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="filPreco">Ordenar por Preço</label>
                                        </div>
                                        <select class="custom-select" name="filPreco">
                                            <?php 
                                                if(isset($filtroPreco)){
                                                    if($filtroPreco === "asc"){
                                                        $options = '<option value="" >Padrão</option>
                                                        <option value="asc"    selected>Crescente</option>
                                                        <option value="desc"   >Decrescente</option>';
                                                    }else{
                                                        $options = '<option value="" >Padrão</option>
                                                        <option value="asc"    >Crescente</option>
                                                        <option value="desc"   selected>Decrescente</option>';
                                                    }
                                                }else{
                                                    $options = '<option value="" selected>Padrão</option>
                                                    <option value="asc"    >Crescente</option>
                                                    <option value="desc"   >Decrescente</option>';
                                                }
                                                echo $options;
                                                
                                            ?>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div class="col-1">
                                    <input type="submit" name="submit" value="Filtrar" class="btn btn-primary h-100" ></input>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-2" style="min-width: 50px;">
                    <div class="container">
                        <div class="row">
                            <div class="col-5 m-1 p-0">
                                <a style="min-width: 35px; min-height: 35px;" href="pages/carrinho/carrinho.php" class="btn btn-light p-2 w-100 align-content-center">
                                    <i class="fas fa-shopping-cart"></i>
                                </a>
                            </div>
                            <div class="col-5 m-1 p-0">
                                <?php if (isset($_SESSION["login"])){?>
                                    
                                    <a style="min-width: 35px; min-height: 35px;" href="pages/login/logout.php" class="btn btn-danger p-2 w-100 align-content-center">
                                        <i class="fas fa-sign-out-alt"></i>
                                    </a>
                                
                                <?php }else { ?>

                                    <a style="min-width: 35px; min-height: 35px;" href="pages/login/login.php" class="btn btn-light p-2 w-100 align-content-center">
                                        <i class="fas fa-user"></i>
                                    </a>

                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    <div class="container-fluid m-0 bg-secondary" style="min-height: 49vh;">

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
    </div>
</body>
</html>