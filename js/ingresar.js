
/* -----------------ingresar------------------*/
const enviar = document.getElementById("box_enviar")
let Saldo = parseInt(localStorage.getItem("saldo"))
enviar.addEventListener("click",(e) =>{
    if(Saldo<990){
        const numer = parseInt(document.getElementById("number").value)
        Saldo = parseInt(Saldo+numer)
        console.log(Saldo)
        localStorage.setItem("saldo",Saldo)
        alert("se a ingresado $"+numer+" de su Cuenta , total de dinero Restante $"+Saldo)
        }
    else{
        alert("Usted ecxedio el saldo maximo que puede tener")
    }

    
})
