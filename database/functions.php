<?php
session_start();

function runSQL($sql){
    require('conn.inc.php');
    $result = $conn->query($sql); 
    if ($result != true) 
        $result = $conn->error;
    $conn->close();
    
    return $result;
}

if(isset($tipoLog)){
    if($tipoLog === "login"){
        if(!isset($_POST["submit"])){
            header("Location: http://localhost/trabalhoWeb/index.php");
        }
        
        if(loginExists($_POST["loginEmail"], $_POST["loginPwd"])){
            $_SESSION["login"] = $_POST["loginEmail"];
        }
        header("Location: http://localhost/trabalhoWeb/pages/login/login.php");
        
    }
    if($tipoLog === "cadastro"){
        if(isset($_SESSION["login"])){
            unset($_SESSION["login"]);
        }
        header("Location: http://localhost/trabalhoWeb/index.php");
    }
}



