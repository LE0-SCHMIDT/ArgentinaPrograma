document.getElementById('boton_secundaria').addEventListener('click', function(){
    let ventana = ir_a(1)
});

document.getElementById('boton_facultad').addEventListener('click', function(){
    let ventana = ir_a(3)
});

document.getElementById('boton_primaria').addEventListener('click', function(){
    let ventana = ir_a(0)
});

function ir_a(valor){
    if(valor == 1){
        return window.open("https://institutocomercialcrespo.com.ar/","_blank");
    }
    if(valor == 3){
        return window.open("http://ingenieria.uner.edu.ar/index.php/carreras-de-grado/bioinformatica","_blank");
    }
    else{
        return window.open("https://dribbble.com/errorpage","_blank")
    }
}