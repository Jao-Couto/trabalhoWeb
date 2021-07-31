<?php
require_once('../../database/functions.php');

if(!isset($_SESSION['login']))
    header("Location: http://localhost/trabalhoWeb/pages/login/login.php");
    
$nome = '';
    $cpf ='';
    $rua = '';
    $bairro = '';
    $num = '';
    $cep = '';
    $complemento = '';
    $cidade = '';
    $uf = '';
    $pais = '';
    $cel = '';
    $tel = '';

$query = "SELECT * FROM cliente WHERE cliente.CPF = '$_SESSION[login]' LIMIT 1";
$result = runSQL($query);
if($row = mysqli_fetch_array($result)){
    $nome = $row['Nome'];
    $cpf = $row['CPF'];
    $rua = $row['Rua'];
    $bairro = $row['Bairro'];
    $num = $row['Numero'];
    $cep = $row['CEP'];
    $complemento = $row['Complemento'];
    $cidade = $row['Cidade'];
    $uf = $row['UF'];
    $pais = $row['Pais'];

    $queryTel = "SELECT Numero FROM telefone WHERE CPF = '111.111.111-11' LIMIT 2";
    $resultTel = runSQL($queryTel);
    while($rowTel = mysqli_fetch_array($resultTel)){
        if(strlen($rowTel['Numero']) == 15)
            $cel = $rowTel['Numero'];
        else $tel = $rowTel['Numero'];
    }
}
?>
<html lang="pt">

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
    <script type="text/javascript" src="../../js/jquery.min.js"></script>
    <script type="text/javascript" src="../../js/jquery.mask.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <title>Carrinho</title>
</head>

<body>
    <main>
        <div class="container-fluid navbar pt-3 pb-3 p-0 navbar-light justify-content-between bg-secondary" id="header">
            <div class="row w-100">
                <div class="col-4 ml-3 align-self-center">
                    <a href="../../index.php" class="btn btn-primary">Continuar Comprando</a>
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
                                <label for="nome">Nome Completo:</label>
                                <input class="form-control" type="text" readonly value="<?php echo $nome;?>" id="nome" name="f_nome" autocomplete="off"
                                    required>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="cpf">CPF:</label>
                                <input class="form-control" type="text" readonly value="<?php echo $cpf;?>" name="f_cpf" id="cpf" autocomplete="off"
                                    minlength="14" required>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="celular">Celular:</label>
                                <input class="form-control" type="tel"  value="<?php echo $cel;?>" readonly name="f_cel" id="celular" autocomplete="off"
                                    minlength="15">
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="form-group">
                                <label for="telefone">Telefone:</label>
                                <input class="form-control w-10" value="<?php echo $tel;?>" readonly type="tel" name="f_tel" id="telefone" autocomplete="off" minlength="14">
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
                                    <label for="rua">Rua:</label>
                                    <input class="form-control" type="text" readonly value="<?php echo $rua;?>" name="f_rua" id="rua" autocomplete="off"
                                        required>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group mr-3">
                                    <label for="num">Número:</label>
                                    <input class="form-control" readonly value="<?php echo $num;?>" type="text" name="f_rua" id="num" autocomplete="off"
                                        required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="bairro">Bairro:</label>
                                    <input class="form-control" type="text" readonly value="<?php echo $bairro;?>" name="f_bairro" id="bairro"
                                        autocomplete="off" required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="cep">CEP:</label>
                                    <input class="form-control" type="text" readonly value="<?php echo $cep;?>" name="f_cep" id="cep" autocomplete="off"
                                        minlength="9" required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="comp">Complemento: </label>
                                    <input class="form-control" type="text" readonly value="<?php echo $complemento;?>" name="f_comp" id="comp" autocomplete="off">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="cidade">Cidade:</label>
                                    <input class="form-control" type="text" readonly value="<?php echo $cidade;?>" name="f_cidade" id="cidade"
                                        autocomplete="off" required>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="UF">Estado:</label>
                                    <input class="form-control" type="text" readonly value="<?php echo $uf;?>" name="UF" id="UF"
                                        autocomplete="off" required> 
                                    
                                </div>
                                
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="pais">País:</label>
                                    <input class="form-control" type="text" readonly value="<?php echo $pais;?>" name="pais" id="pais"
                                        autocomplete="off" required>
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
                                        <?php
                                            $queryPag = "SELECT * FROM forma_pagamento";
                                            $resultPag = runSQL($queryPag);
                                            while($rowPag = mysqli_fetch_array($resultPag)){
                                                echo '<div class="col-12 m-2">
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text">
                                                                    <input type="radio" value="'.$rowPag['Nome'].'" id="'.$rowPag['Codigo'].'"
                                                                        name="formaPag"';
                                                                        
                                                if($rowPag['Codigo'] == 'boleto')
                                                    echo ' checked ';
                                                
                                                echo  '>
                                                                </div>
                                                            </div>
                                                            <label for="'.$rowPag['Codigo'].'" class="form-control text-dark">'.$rowPag['Nome'].'<span class="text-success"> Desconto de '.$rowPag['Desconto'].'%</span> </label>
                                                        </div>
                                                    </div>';
                                            }
                                        ?>

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