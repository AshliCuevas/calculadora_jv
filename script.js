// Selecciona los elementos del DOM por su ID
const numero1 = document.getElementById("numero1"); 
const numero2 = document.getElementById("numero2"); 
const sumarBtn = document.getElementById("sumar"); 
const restarBtn = document.getElementById("restar"); 
const multiplicarBtn = document.getElementById("multiplicar"); 
const dividirBtn = document.getElementById("dividir"); 
const resultado = document.getElementById("resultado"); 

// Crea una caja de error para mostrar mensajes de validación
const errorBox = document.createElement("div"); // Crea un nuevo div para errores
errorBox.classList.add("error-box"); 
document.body.appendChild(errorBox); 

// Función para mostrar errores y ocultarlos después de 3 segundos
function mostrarError(mensaje) {
    errorBox.textContent = mensaje; 
    errorBox.style.display = "block"; 
    setTimeout(() => {
        errorBox.style.display = "none"; 
    }, 3000);
}

// Función para validar que los campos no estén vacíos y sean números válidos
function validarInputs() {
    if (numero1.value === "" || numero2.value === "") { 
        mostrarError("Error: Ambos campos deben estar llenos.");
        return false;
    }
    if (isNaN(numero1.value) || isNaN(numero2.value)) { 
        mostrarError("Error: Ingresa solo números válidos.");
        return false;
    }
    return true; 
}

// Función para sumar dos números
function sumar() {
    if (!validarInputs()) return; 
    const suma = parseFloat(numero1.value) + parseFloat(numero2.value); 
    resultado.textContent = `${suma}`; 
}

// Función para restar dos números
function restar() {
    if (!validarInputs()) return; 
    const resta = parseFloat(numero1.value) - parseFloat(numero2.value); 
    resultado.textContent = `${resta}`; 
}

// Función para multiplicar dos números
function multiplicar() {
    if (!validarInputs()) return; 
    const producto = parseFloat(numero1.value) * parseFloat(numero2.value); 
    resultado.textContent = `${producto}`; 
}

// Función para dividir dos números
function dividir() {
    if (!validarInputs()) return; 
    if (parseFloat(numero2.value) === 0) { 
        mostrarError("Error: No se puede dividir por cero.");
        return;
    }
    const division = parseFloat(numero1.value) / parseFloat(numero2.value); 
    resultado.textContent = `${division}`; 
}

// Agrega los eventos de clic a los botones para ejecutar las operaciones
sumarBtn.addEventListener("click", sumar);
restarBtn.addEventListener("click", restar);
multiplicarBtn.addEventListener("click", multiplicar);
dividirBtn.addEventListener("click", dividir);
