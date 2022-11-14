const retirar = document.getElementById("box_retirar")
let Saldo = parseInt(localStorage.getItem("saldo"))
retirar.addEventListener("click",(e) =>{
    if(Saldo > 10){
        const numer_2 =document.getElementById("number_2").value
    Saldo = parseInt(Saldo-numer_2)
    alert("se a Retirado $"+numer_2+" de su Cuenta , total de dinero Restante" + Saldo)
    localStorage.setItem("saldo",Saldo)
    }
    else{
        alert("no puede hacer Este retiro de dinero,Saldo deficiente")
    }
})