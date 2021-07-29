<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

    <script type="text/javascript" src="/js/jquery.mask.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <title>Carrinho</title>
    <link rel="sortcut icon" href="/images/cadastro.png" type="image/gif" />
</head>

<body>
    <main>
        <div class="container-fluid navbar pt-3 pb-3 p-0 navbar-light justify-content-between bg-secondary" id="header">
            <div class="row w-100">
                <div class="col-4 ml-3 align-self-center">
                    <a href="../../index.html" class="btn btn-primary">Continuar Comprando</a>
                </div>
                <div class="display-4 col-4">
                   <strong>Carrinho</strong> 
                </div>
                <div class="col-4"></div>
            </div>
            
        </div>
        <div class="container p-3">
            <div class="alert border border-secondary rounded alert-light" role="alert">
                <div class="d-flex align-content-center justify-content-between">

                    <label class="text-dark h5" for="removeAll"><strong>Produtos adicionados ao
                            carrinho</strong></label>

                    <input type="button" value="Remover Tudo" id="removeAll" class="btn btn-warning justify-self-end"
                        onclick="removerAll()" />
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
                                <label for="nome">Nome Completo: <span style="color: red;">*</span></label>
                                <input class="form-control" type="text" id="nome" name="f_nome" autocomplete="off"
                                    required>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="cpf">CPF: <span style="color: red;">*</span></label>
                                <input class="form-control" type="text" name="f_cpf" id="cpf" autocomplete="off"
                                    minlength="14" required>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="celular">Celular:</label>
                                <input class="form-control" type="tel" name="f_cel" id="celular" autocomplete="off"
                                    minlength="15">
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="telefone">Telefone:</label>
                                <input class="form-control w-10" type="tel" name="f_tel" id="telefone"
                                    autocomplete="off" minlength="14">
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h4 style="align-self: center;" class="mb-2">Endereço</h4>
                    <div class="form-group p-3">

                        <div class="row">
                            <div class="col-md-10">
                                <div class="form-group">
                                    <label for="rua">Rua: <span style="color: red;">*</span></label>
                                    <input class="form-control" type="text" name="f_rua" id="rua" autocomplete="off"
                                        required>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group mr-3">
                                    <label for="num">Número: <span style="color: red;">*</span></label>
                                    <input class="form-control" type="text" name="f_rua" id="num" autocomplete="off"
                                        required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="bairro">Bairro: <span style="color: red;">*</span></label>
                                    <input class="form-control" type="text" name="f_bairro" id="bairro"
                                        autocomplete="off" required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="cep">CEP: <span style="color: red;">*</span></label>
                                    <input class="form-control" type="text" id="cep" autocomplete="off"
                                        minlength="9" required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="comp">Complemento: </label>
                                    <input class="form-control" type="text" name="f_comp" id="comp" autocomplete="off">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-10">
                                <div class="form-group">
                                    <label for="cidade">Cidade: <span style="color: red;">*</span></label>
                                    <input class="form-control" type="text" name="f_cidade" id="cidade"
                                        autocomplete="off" required>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="UF">Estado: <span style="color: red;">*</span></label>
                                    <select class="form-control" name="f_estado" id="UF">
                                        <option value="AC">AC</option>
                                        <option value="AL">AL</option>
                                        <option value="AP">AP</option>
                                        <option value="AM">AM</option>
                                        <option value="BA">BA</option>
                                        <option value="CE">CE</option>
                                        <option value="DF">DF</option>
                                        <option value="ES">ES</option>
                                        <option value="GO">GO</option>
                                        <option value="MA">MA</option>
                                        <option value="MT">MT</option>
                                        <option value="MS">MS</option>
                                        <option value="MG">MG</option>
                                        <option value="PA">PA</option>
                                        <option value="PB">PB</option>
                                        <option value="PR">PR</option>
                                        <option value="PE">PE</option>
                                        <option value="PI">PI</option>
                                        <option value="RJ">RJ</option>
                                        <option value="RN">RN</option>
                                        <option value="RS">RS</option>
                                        <option value="RO">RO</option>
                                        <option value="RR">RR</option>
                                        <option value="SC">SC</option>
                                        <option value="SP">SP</option>
                                        <option value="SE">SE</option>
                                        <option value="TO">TO</option>
                                    </select>
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
                                            <p id="frete"></p>
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
                                    <div class="card-body ">
                                        <div class="row">
                                            <div class="col-12 m-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <input type="radio" value="Boleto" id="boleto"
                                                                name="formaPag" checked>
                                                        </div>
                                                    </div>
                                                    <label for="boleto" class="form-control text-dark">Boleto</label>
                                                </div>
                                            </div>
                                            <div class="col-12 m-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <input type="radio" value="Cartão de Crédito" id="credito"
                                                                name="formaPag">
                                                        </div>
                                                    </div>
                                                    <label for="credito" class="form-control text-dark">Cartão de
                                                        Crédito</label>
                                                </div>
                                            </div>
                                            <div class="col-12 m-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <input type="radio" value="PIX" id="pix" name="formaPag">
                                                        </div>
                                                    </div>
                                                    <label for="pix" class="form-control text-dark">PIX</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row border border-info rounded w-70 p-3 m-3" id="dadosCart" style="display: none;">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="numeroCart">Número do cartão</label>
                                    <input class="form-control" type="text" id="numeroCart">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="cvv">CVV</label>
                                    <input class="form-control" type="text" id="cvv" style="width: 50px;">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="validade">Data de validade</label>
                                    <input class="form-control" type="date" id="validade">
                                </div>
                            </div>
                        </div>
                        <input class="form-control" type="button" value="Comprar" id="comprar" class="comprar">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright w-100 text-center bg-secondary pt-3">
            Desenvolvido por João Vitor Couto e Rafael Correia
        </div>

    </main>

</body>

</html>