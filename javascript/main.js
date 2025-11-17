let distancias = [];

let listaDisplay = document.getElementById('lista');
let resultadoDisplay = document.getElementById('resultado');

document.getElementById('agregarBtn').addEventListener('click', function() {
    let input = document.getElementById('distanciaInput');
    let distancia = parseFloat(input.value);
    
    distancias.push(distancia);
    
    listaDisplay.textContent = distancias.join(', ');
    
    input.value = '';
    input.focus();
});

document.getElementById('calcularBtn').addEventListener('click', function() {
    
    let suma = 0;
    
    for (let i = 0; i < distancias.length; i++) {
        suma = suma + distancias[i];
    }

    let promedio = suma / distancias.length;
    
    resultadoDisplay.textContent = promedio + " millones de km";
    
    distancias = [];
    listaDisplay.textContent = '---';
});