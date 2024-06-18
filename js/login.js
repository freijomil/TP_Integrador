let login = document.querySelector(".login")

let password = document.querySelector("#password")

let mail = document.querySelector("#email")

mensajeContra = "Por favor complete el campo contraseña"
mensajeMail = "Por favor complete el campo mail"
mensajeLong ="La contraseña debe tener al menos 6 caracteres"
login.addEventListener("submit", function(e){
    e.preventDefault()
    
    let todoOk = true

    if (password.value = "" ){
        todoOk = false
        alert(mensajeContra)
    }  else if(password.length< 6){
       alert(mensajeLong)
    }
  
    
    if (mail.value = "" ){
        todoOk = false
        alert(mensajeMail)
    }
    
        
    
    if (todoOK){
        this.submit()
    }
})

localStorage.setItem("mail", mail)

localStorage.setItem("password", password)