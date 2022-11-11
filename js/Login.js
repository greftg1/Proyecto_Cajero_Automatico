
/* ------------------------------------variables-login--------------------------------------*/
const formlogin = document.getElementById("form-")
const login = document.getElementById("boton-login")
/* -----------------------------------login------------------------------------------------ */
const Users =[
    {name : "Malu",
    Contraseña : "2121",
    saldo : "120"},
    {name : "Gere",
    Contraseña : "8717",
    saldo : "200"
    },
    {name : "maui",
    Contraseña :"8172",
    saldo : "100"   
    }
]
/* -----------------------------------------login-Center-------------------------------------------*/
login.addEventListener("click",(e) =>{
    e.preventDefault()
    const name = document.getElementById("name").value
    const Contraseña = document.getElementById("Contraseña").value  
    let User_log = false
    for( i = 0 ; i < 3 ; i++){
        console.log(Users[i].name)
        console.log(Users[i].Contraseña)
        if (Users[i].name === name && Users[i].Contraseña === Contraseña){
            if(Users[i].name === "Malu"){
                localStorage.setItem("saldo",120)
            }
            if(Users[i].name === "Gere"){
                localStorage.setItem("saldo",200)
            }
            if(Users[i].name === "maui"){
                localStorage.setItem("saldo",100)
            }
            location.href="Home.html";
            User_log = true
        }else{
           
        }}
if(User_log === false){
    alert("Usuario Incorrecto , Porfavor Ingresar el Usuario Bien ")
}     
    })
