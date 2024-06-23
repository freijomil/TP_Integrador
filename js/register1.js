let form = document.querySelector("form");
let Email = document.querySelector(".Emailclass");
let password = document.querySelector(".passworldclass");
let confirmarpassword = document.querySelector(".confirmpassworldclass");
let registrarme = document.querySelector("#registrarme");
let terminoscondiciones = document.querySelector(".terminos_condicionesclass");
let checkeoemail = document.querySelector(".checkemail");
let checkeocontrasena = document.querySelector(".checkpassword");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (Email.value === "") {
        checkeoemail.innerHTML = "Por favor complete el campo";
    } else if (password.value === "") {
        checkeocontrasena.innerHTML = "Por favor complete el campo";
    } else if (password.value.length < 6) {
        checkeocontrasena.innerHTML = "Debe ingresar al menos 6 caracteres";
    } else if (password.value !== confirmarpassword.value) {
        checkeocontrasena.innerHTML = "Las contraseñas no coinciden";
    } else if (!terminoscondiciones.checked) {
        alert("Debe aceptar los términos y condiciones");
    } else {
        alert("Felicitaciones, ya eres parte de la familia");
        location.href = "index.html";
    }
});