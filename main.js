/* ------------------------------------variables-login--------------------------------------*/
const formlogin = document.getElementById("form-")
const login = document.getElementById("boton-login")
/* -----------------------------------login------------------------------------------------ */
const Users =[
    {name : "Malu",
    Contraseña : "2121",},
    {name : "Gere",
    Contraseña : "8717"
    },
    {name : "maui",
    Contraseña :"8172"   
    }
]
/* -----------------------------------------login-Center-------------------------------------------*/
login.addEventListener("click",(e) =>{
    e.preventDefault()
    const name = document.getElementById("name").value
    const Contraseña = document.getElementById("Contraseña").value  
    for( i = 0 ; i < 3 ; i++){
        console.log(Users[i].name)
        console.log(Users[i].Contraseña)
        if (Users[i].name === name && Users[i].Contraseña === Contraseña){
            location.href="Home.html";
        }else{
            console.log("Usuario Incorrecto , Porfavor Ingresar el Usuario Bien ")
        }} 
    })
/* ---------------------------------------------Variables-Home---------------------------------------*/
const consultar_buttom = document.getElementById("Butom_1")
const Ingresar_buttom = document.getElementById("Butom_2")
const retirar_butom = document.getElementById("Butom_3")
const exit_buttom = document.getElementById("Butom-4")
/* -----------------------------------------Cerrar-Sesion--------------------------------------------*/
function salir(){
    location.href ="Login.html"
}
/* ----------------------------------------Variables-Consultar-Saldo---------------------------------*/
const Box_saldo = document.getElementById("Box_saldo")
/* -------------------------------------------Consultar-Saldo----------------------------------------*/
const Saldo = 1200
function Const_saldo(){
    location.href ="Saldo.html"
}
Box_saldo.innerHTML =`<p>Su Saldo Disponible es de $ ${Saldo}</p>`

