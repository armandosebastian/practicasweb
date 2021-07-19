var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");

function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

function RegistrarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;

    auth.createUserWithEmailAndPassword(cor,con).then((userCredential) => {
    alert("Se registro el usuario en Firebase");
    Limpiar();
    })
    .catch((error) => {
    alert("No se pudo registrar el usuario en Firebase");
    Limpiar();
    });
     }
}

btnRegistrar.addEventListener("click", RegistrarUsuario);