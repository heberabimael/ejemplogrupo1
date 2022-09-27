function validar(){
    var usuarioIngresado=document.getElementById("textUsuario").value;
    var passwordIngresado=document.getElementById("textPass").value;
    
    if (usuarioIngresado=="ined" && passwordIngresado=="123456"){
    alert("Bienvenido, sus datos son correctos");
    window.open("https://www.youtube.com/");
    }
    
    else
    {
    alert("Ingrese su usuario y contraseña correctamente");
    }
    }
