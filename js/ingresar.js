
/* -----------------ingresar------------------*/
const enviar = document.getElementById("box_enviar")
let Saldo = parseInt(localStorage.getItem("saldo"))
enviar.addEventListener("click",(e) =>{
    const numer = parseInt(document.getElementById("number").value)
    Saldo = parseInt(Saldo+numer)
    console.log(Saldo)
    localStorage.setItem("saldo",Saldo)
    alert("se a ingresado $"+numer+" de su Cuenta , total de dinero Restante $"+Saldo)
    
})
