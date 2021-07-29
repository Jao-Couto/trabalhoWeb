<?php
    session_start();
    if(!isset($_POST["submit"])){
        header("Location: http://localhost/trabalhoWeb/index.php");
    }
    
    require_once "functions.php"; 
    if(loginExists($_POST["loginEmail"], $_POST["loginPwd"])){
        $_SESSION["login"] = $_POST["loginEmail"];
    }
    header("Location: http://localhost/trabalhoWeb/pages/login/login.php");
