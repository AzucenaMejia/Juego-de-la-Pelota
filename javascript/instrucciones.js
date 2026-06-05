const inputSaltos = document.getElementById("saltos");
const botonIniciar = document.querySelector(".boton-iniciar");
const pelota = document.querySelector(".pelota");
const contador = document.getElementById("contador");

botonIniciar.addEventListener("click", () => {
    const saltos = parseInt(inputSaltos.value);

    if (isNaN(saltos) || saltos <= 0) {
        alert("Por favor ingresa un número válido");
        return;
    }
    for (let i = 1; i <= saltos; i++) {
        setTimeout(() => {
            pelota.classList.add("saltar");

            pelota.addEventListener("animationend", () => {
                pelota.classList.remove("saltar");
            }, { once: true }); 
            contador.textContent = `Salto número ${i}`;
        }, i * 600);
    }

});