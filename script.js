function ValidarNroTel (inputtxt){
    var nrotel = /^\d{10}$/;
   
    if(inputtat.value.match(nrotel)){
        alert("telefno validado");
        return true;
    }
    else{
        alert("teléfono inválido");
        return false;
    }
}

function enviarDatos(){
    alert("¡Perfecto! Pedido cargado. ¡Muchas gracias!")
}




