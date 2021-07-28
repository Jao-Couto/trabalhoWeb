<!doctype html>
<html lang="en">
  <head>
    <title>Cadastro Atendente</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
    <div class="container-fluid" style="min-height: 100vh;">
        <div class="container-fluid" >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Hospital Regional</a>
                <button class="navbar-toggler   mr-2 ml-auto collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="../index_atendente.php">Atendimentos</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="adicionar_atendimento.php">Adicionar Atendimento</a>
                        </li>
                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Cadastrar
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="cadastra_medico.php">Médico</a>
                                <a class="dropdown-item" href="cadastra_paciente.php">Paciente</a>
                            </div>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="exibir_atendentes.php">Atendentes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="exibir_medicos.php">Médicos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="exibir_pacientes.php">Pacientes</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div class="container mt-2">
            <div class="row justify-content-center">
                <div class="col-8 p-4">
                    <h3 class="mb-5">
                        Cadastro Atendente
                    </h3>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputEmail4">E-mail</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="fulano@gmail.com">
                            </div>
                            <div class="form-group col-md-6">
                            <label for="inputPassword4">Senha</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="fulano123">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="inputName">Nome</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Fulano da Silva">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputCPF">CPF</label>
                                <input type="text" class="form-control" id="inputCPF" placeholder="111.111.111-11">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-10">
                                <label for="inputAddress">Rua</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Rua das Palmas">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputAddress">Número</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputCity">Bairro</label>
                                <input type="text" class="form-control" id="inputCity">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputCity">Cidade</label>
                                <input type="text" class="form-control" id="inputCity">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Estado</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Escolha...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row justify-content-center">
                            <div class="form-group col-md-4">
                                <label for="inputBirthDate">Data de Nascimento</label>
                                <input type="date" class="form-control" name="inputBirthDate"placeholder="dd/mm/yyyy"  min="1900-01-01">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
            
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>