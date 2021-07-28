<!doctype html>
<html lang="en">
  <head>
    <title>Cadastro Atendente</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/jquery.mask.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
  </head>
  <body>
    <div class="container-fluid b-0 p-0" style="min-height: 100vh;">
    <div class="container-fluid navbar pt-3 pb-3 p-0 navbar-light justify-content-between bg-secondary" id="header">
            <div class="row w-100">
                <div class="col-4 ml-3 align-self-center">
                    <a href="../../index.html" class="btn btn-primary">Continuar Comprando</a>
                </div>
                <div class="display-4 col-4">
                   <strong>Cadastro</strong> 
                </div>
                <div class="col-4"></div>
            </div>
            
        </div>
        <div class="container mt-2">
            <div class="row justify-content-center">
                <div class="col-8 p-4">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="email">E-mail</label>
                            <input type="email" class="form-control" id="email" placeholder="fulano@gmail.com" required>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="senha">Senha</label>
                            <input type="password" class="form-control" id="senha" placeholder="fulano123" required minlength="8" maxlength="16">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="nome">Nome</label>
                                <input type="text" class="form-control" id="nome" placeholder="Fulano da Silva" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="cpf">CPF</label>
                                <input type="text" class="form-control" id="cpf" placeholder="111.111.111-11" minlength="14" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-10">
                                <label for="rua">Rua</label>
                                <input type="text" class="form-control" id="rua" placeholder="Rua das Palmas" required>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="num">Número</label>
                                <input type="text" class="form-control" id="num" placeholder="1234" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="bairro">Bairro</label>
                                <input type="text" class="form-control" id="bairro" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="cidade">Cidade</label>
                                <input type="text" class="form-control" id="cidade" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Estado</label>
                                <select id="inputState" class="form-control">
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
                        
                        <div class="form-row justify-content-center">
                            <div class="form-group col-md-4">
                                <label for="nascimento">Data de Nascimento</label>
                                <input type="date" class="form-control" name="nascimento"placeholder="dd/mm/yyyy"  min="1900-01-01" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="celular">Celular:</label>
                                <input class="form-control" type="tel" name="f_cel" id="celular" autocomplete="off"
                                    minlength="15">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="telefone">Telefone:</label>
                                <input class="form-control w-10" type="tel" name="f_tel" id="telefone"
                                    autocomplete="off" minlength="14">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
            
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>