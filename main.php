<?php

    $destino = 'davidrma07@gmail.com';

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];

    $header = "Enviado desde Mi Portafolio";
    $mensajeCompleto = "Este Mensaje fue enviado por: " .$nombre " " .$apellido "Con el correo: " .$correo;

    mail($destino, $header, $mensajeCompleto);

    echo "<script>alert('Correo Enviado')</script>";
    echo "<script>setTime(\"location.href='index.html'\",1000)<script>;

?>