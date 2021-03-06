<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../carrinho/css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

    <script type="text/javascript" src="../../js/jquery.mask.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <title>Detalhes</title>
    <link rel="sortcut icon" href="../../images/carrinho.png" type="image/gif" />
</head>

<body>
    <main>
        <div class="container-fluid navbar p-5  mb-3 navbar-light justify-content-between bg-dark" id="header">
            <div class="row w-100 align-items-center justify-content-between">
                <div class="ml-3">
                    
                </div>
                <div class="display-4">
                    <strong class="text-light">Detalhes da Compra</strong> 
                </div>
                <div></div>
            </div>
            
        </div>
        <div class="container p-3">
            <div class="alert border border-secondary rounded alert-light" role="alert">
                <div class="d-flex align-content-center justify-content-between">

                    <label class="text-dark h5" for="removeAll"><strong>Produtos comprados</strong></label>
                </div>
                <div class="container">
                    <div class="row justify-content-around" id="conteudo">

                    </div>
                </div>
            </div>

            <div class="container">

                <h4 style="align-self: center;" class="mb-2">Dados do cliente</h4>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="nome">Nome Completo:</label>
                                <input class="form-control text-success" type="text" id="nome" name="f_nome"
                                    autocomplete="off" readonly>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="cpf">CPF:</label>
                                <input class="form-control text-success" type="text" name="f_cpf" id="cpf"
                                    autocomplete="off" minlength="14" readonly>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="celular">Celular:</label>
                                <input class="form-control text-success" type="tel" name="f_cel" id="celular"
                                    autocomplete="off" minlength="15" readonly>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="telefone">Telefone:</label>
                                <input class="form-control w-10 text-success" type="tel" name="f_tel" id="telefone"
                                    autocomplete="off" minlength="14" readonly>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h4 style="align-self: center;" class="mb-2">Endere??o</h4>
                    <div class="form-group p-3">

                        <div class="row">
                            <div class="col-md-10">
                                <div class="form-group">
                                    <label for="rua">Rua:</label>
                                    <input class="form-control text-success" type="text" name="f_rua" id="rua"
                                        autocomplete="off" readonly>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group mr-3">
                                    <label for="num">N??mero:</label>
                                    <input class="form-control text-success" type="text" name="f_rua" id="num"
                                        autocomplete="off" readonly>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="bairro">Bairro:</label>
                                    <input class="form-control text-success" type="text" name="f_bairro" id="bairro"
                                        autocomplete="off" readonly>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="cep">CEP:</label>
                                    <input class="form-control text-success" type="text" name="f_cep" id="cep"
                                        autocomplete="off" minlength="9" readonly>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="comp">Complemento: </label>
                                    <input class="form-control text-success" type="text" name="f_comp" id="comp"
                                        autocomplete="off" readonly>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-10">
                                <div class="form-group">
                                    <label for="cidade">Cidade:</label>
                                    <input class="form-control text-success" type="text" name="f_cidade" id="cidade"
                                        autocomplete="off" readonly>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="UF">Estado:</label>
                                    <input class="form-control text-success" type="text" name="f_estado" id="UF"
                                        autocomplete="off" readonly>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <div class="border border-success rounded mb-5">
                    <div class="container p-4">
                        <div class="row">
                            <div class="col h-100">
                                <div class="card p-2 mb-2">
                                    <h5 class="card-title"> Valor total</h5>
                                    <div class="card-body p-2">
                                        <div class="d-inline-flex w-100 justify-content-between">
                                            <p>Total de produtos:</p>
                                            <p id="totProd"></p>
                                        </div>
                                        <div class="d-inline-flex w-100 justify-content-between">
                                            <p>Frete:</p>
                                            <p id="frete" class="text-right"></p>
                                        </div>
                                        <div class="d-inline-flex w-100 justify-content-between">
                                            <strong>
                                                <p>TOTAL:</p>
                                            </strong>
                                            <strong>
                                                <p id="total"></p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col h-100">
                                <div class="card p-2 mb-3">
                                    <h5 class="card-title">Forma de pagamento</h5>
                                    <div class="card-body p-2">
                                        <div class="row">
                                            <div class="col ">
                                                <input class="form-control text-info mb-2" type="text" id="formaPag"
                                                    readonly>
                                                <p id="detalhes"></p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="../../index.php" class="btn btn-success w-100"> P??gina Inicial<a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright text-center p-3 w-100 text-light bg-dark">Desenvolvido por Jo??o Vitor Couto e Rafael Correia</div>

    </main>

</body>

</html>