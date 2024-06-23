
let recuperoData = localStorage.getItem("dataLogin")

if (recuperoData) {
    let savedData = JSON.parse(recuperoData);
    let nombre = savedData.mail;

    
    let saludo = document.querySelector(".saludo");
    saludo.innerText += `Bienvenido ${nombre}!`
    let login = document.querySelector(".log")
    let register = document.querySelector(".register")
    register.style.display = "none"
    login.style.display = "none"
} else {
    let saludo =  document.querySelector(".saludo");
    saludo.innerText = 'Inicia sesion para guardar tus datos!';
}
