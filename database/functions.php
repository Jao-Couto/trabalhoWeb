<?php


function runSQL($sql){
    require('conn.inc.php');
    $result = $conn->query($sql); 
    if ($result != true) 
        $result = $conn->error;
    $conn->close();
    return $result;
}

/*

function getProduto($codigo){
    $sql = "SELECT * FROM produtos where Codigo = $codigo";
    $result = mysqli_query($conn, $sql);
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

function setProduto($prod){
    $prod = json_decode($prod);
    $sql = "INSERT INTO Produtos (Codigo, Nome, Marca, Categoria, Preco, Descri, Img)
    VALUES (". $prod['codigo']. ", ".$prod['nome'] . ", ".$prod['marca'] . ", ".$prod['categoria'] . 
    ", ".$prod['preco']. ", ".$prod['descri']. ", ".$prod['img']. ")";

    runSQL($sql);
}
*/

/* Exemplo
$resutlado = runSQL("SELECT * FROM produto");
while($row = mysqli_fetch_array($resutlado))
    echo $row['Nome'];
*/