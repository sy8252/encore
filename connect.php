<?php

$host="localhost";
$user="root";
$pass="";
$db="login";
$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>

<?php 
    $abella_conn = mysqli_connect("localhost", "root", "", "encore");

    if(!$abella_conn) {
        echo "Could not connect to the database!" . mysqli_connect_error();
    } 

 ?>