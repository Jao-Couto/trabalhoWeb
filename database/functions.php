<?php
if (session_status() != 1) {
    session_start();
}

function runSQL($sql){
    require('conn.inc.php');
    $result = $conn->query($sql); 
    if ($result != true) 
        $result = $conn->error;
    $conn->close();
    
    return $result;
}

if(isset($_POST["submit"]) && $_POST["submit"] == "Login"){
    if(isset($_POST["loginEmail"]) && isset($_POST["loginPwd"])){
        $query = "SELECT CPF FROM cliente WHERE Email = '$_POST[loginEmail]' AND Senha = '$_POST[loginPwd]' LIMIT 1";
        $result = runSQL($query);
        if($row = mysqli_fetch_assoc($result)){
            $_SESSION["login"] = $row['CPF'];
            header("Location: http://localhost/trabalhoWeb/index.php");
        }else header("Location: http://localhost/trabalhoWeb/pages/login/login.php");
        
    }
    
}


