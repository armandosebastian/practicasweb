var txtNom=document.getElementById("txtNom");
var cboCategoria=document.getElementById("cboCategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingresa el nombre</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarCategoria(){
    if(cboCategoria==0 || cboCategoria==""){
        error.style.display="block"
        error.innerHTML+="<li>Por favor selecciona la categoria</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarPrecio(){
    if(txtPre.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese el precio</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarCantidad(){
    if(txtCan.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese la cantidad</li>";
    }else{
        error.style.display="none";
    }
}

//creamos un procedimiento para validar
function Validar(){
    error.innerHTML="";

    ValidarNombre();
    ValidarCategoria();
    ValidarPrecio();
    ValidarCantidad();
}

function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

function Registrar(){
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa el nombre");
        LlamarClase("Por favor selecciona la categoria");
        LlamarClase("Por favor ingresa el precio");
        LlamarClase("Por favor ingresa la cantidad");
        txtNom.focus();
    }else if(cboCategoria.value==0 || cboCategoria.value==null){
        LlamarClase("Por favor selecciona la categoria");
        LlamarClase("Por favor ingresa el precio");
        LlamarClase("Por favor ingresa la cantidad");
        txtApe.focus();
    }else if(txtPre.value=="" || txtPre.value==null){
        LlamarClase("Por favor ingresa el precio");
        LlamarClase("Por favor ingresa la cantidad");
        txtCor.focus();
    }else if(txtCan.value=="" || txtCan.value==null){
        LlamarClase("Por favor ingresa la cantidad");
        chkEst.focus();
    }else{
        alert("Registro Correcto");
        error.innerHTML="";
    }

}