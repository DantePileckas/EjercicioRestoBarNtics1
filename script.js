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

function validarDatos(){
    let valor1 = document.getElementById('quantity').value;
    let valor2 = document.getElementById('quantity2').value;
    let valor3 = document.getElementById('quantity3').value;

     if(valor1 == "" && valor2 == "" && valor3=="")   {
        alert("⚠️Cargar un valor como mínimo para poder registrar su pedido");
        return false;
    } else{
        return true;
    }

}

function enviarDatos(){
    if(validarDatos()){
    alert("✔️¡Perfecto! Pedido cargado. ¡Muchas gracias!✔️");
    } 
}




