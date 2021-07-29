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
    
    <?php 
        session_start();
    ?>

    <link rel="stylesheet" href="css/styleN.css">
    <script src="data-json.js"></script>
    <script src="js/scriptN.js"></script>
    <title>Início</title>
    <link rel="sortcut icon" href="/images/carrinho.png" type="image/gif" />
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
                <a href="pages/carrinho/carrinho.html" class="btn btn-light align-content-center">
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