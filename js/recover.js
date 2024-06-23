let form = document.querySelector("form");
let email_log = document.querySelector(".recuemail");
let recuemail = document.querySelector(".recuperarcontrasena");
let checkbox_ = document.querySelector("#accept");
let recubox = document.querySelector(".recuperbox");
let Recuperar = document.querySelector(".RECUPERAR");
let recuperarderecuperar = document.querySelector(".recuperar_");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    recuemail.innerHTML = "";
    recubox.innerHTML = "";
    recuperarderecuperar.innerHTML = "";

    if (email_log.value === "") {
        recuemail.innerHTML = "Por favor escriba su email.";
    } else if (!checkbox_.checked) {
        recubox.innerHTML = "Por favor acepte el campo Quiero recuperar mi contraseña";
    } else {
        recuperarderecuperar.innerHTML = "Recibirás un email con las instrucciones para recuperar tu contraseña";
    }
});