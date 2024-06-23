let login = document.querySelector(".login")



let mensajeContra = "Por favor complete el campo contraseña"
let mensajeMail = "Por favor complete el campo mail"
let mensajeLong ="La contraseña debe tener al menos 6 caracteres"
let todoOk = true
login.addEventListener("submit", function(e){
    e.preventDefault()
    let password = document.querySelector("#password").value
    let mail = document.querySelector("#email").value
    
    
    if (email === '' || password === '') {
        todoOk = false
        alert('El correo electrónico y la contraseña son obligatorios.');
        return;
    }

    if (password.length < 6) {
        todoOk = false
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }
       
    if (todoOk){
        this.submit()
    }
    let dataLogin = {
        mail: mail,
        contra: password
    }
    localStorage.setItem('dataLogin', JSON.stringify(dataLogin));

    window.location.href = "index.html"
})

let dataGuardada= localStorage.getItem('dataLogin');
if (dataGuardada) {
    let savedData = JSON.parse(dataGuardada);
    document.querySelector('#email').value = savedData.email;
    document.querySelector('#password').value = savedData.password;
}
