//declarando variables para controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");

function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

function ValidarUsuario(){
    if (txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();

    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese su contraseña");
        txtCon.focus();

    }else{
        var cor=txtCor.value;
        var con=txtCon.value;

        auth.signInWithEmailAndPassword(cor, con)
  .then((UserCredential) => {
    alert("Bienvenidos al Sistema");
    window.location="pagina11.html";
  })
  .catch((error) => {
    alert("Usuario o contraseña no valida");
    Limpiar();
  });

    }
}

btnIngresar.addEventListener("click", ValidarUsuario);