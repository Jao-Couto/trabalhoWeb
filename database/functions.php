<?php


function runSQL($sql){
    require('conn.inc.php');
    $result = $conn->query($sql); 
    if ($result != true) 
        $result = $conn->error;
    $conn->close();
    
    return $result;
}

function getProduto($codigo){
    $sql = "SELECT * FROM produtos where Codigo = $codigo";
    $result = runSQL($conn, $sql);
    $check = mysqli_num_rows($result);
    if($check > 0){
        while($row = mysqli_fetch_assoc($result)){
            $prod = array(  
                codigo => $row['Codigo'],
                nome => $row['Nome'],       
                marca => $row['Marca'],
                categoria => $row['Categoria'],
                preco => $row['Preco'],
                desc => $row['Descri'],
                img => $row['Img']
            );
            return json_encode($prod);
        }
    }else{
        return [];
    }
}

function setMarca($nome, $cnpj){
    $sql = "INSERT INTO Marca (CNPJ, Nome)
    VALUES (' ".$cnpj."', '". $nome ."')";

    return runSQL($sql);
}

function setCategoria($nome){
    $sql = "INSERT INTO Categoria (Nome)
    VALUES ('". $nome ."')";

    return runSQL($sql);
}

function getAllCategorias(){
    return runSQL("SELECT * FROM Categoria");
}

function setProduto($prod){
    $prod = json_decode($prod);
    $sql = "INSERT INTO Produtos (Codigo, Nome, Marca, Categoria, Preco, Descri, Img)
    VALUES (". $prod['codigo']. ", ".$prod['nome'] . ", ".$prod['marca'] . ", ".$prod['categoria'] . 
    ", ".$prod['preco']. ", ".$prod['descri']. ", ".$prod['img']. ")";

    runSQL($sql);
}

function loginExists($login, $pwd){
    return true;
}


/*
// Exemplo
$resutlado = runSQL("SELECT * FROM produto");
while($row = mysqli_fetch_array($resutlado))
    echo $row['Nome'];
*/
#echo getAllCategorias();
