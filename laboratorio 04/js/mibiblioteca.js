//declarando variables para controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");

//creamos un procedimiento para validar
//nombre
function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus nombres</li>";
    }else{
        error.style.display="none";
    }
}
//apellido
function ValidarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus apellidos</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarCorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su correo</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarSexo(){
    if(rbMas.checked==false || rbFem.checked==false || rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un sexo</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione el estado</li>";
    }else{
        error.style.display="none";
    }
}

//creamos un procedimiento para validar
function Validar(){
    ValidarNombre();
    ValidarApellido();
    ValidarCorreo();
    ValidarSexo();
    ValidarEstado();
}

function Registrar(){
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selleciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selleciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selleciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(rbMas.checked==false || rbFem.checked==false || rbOtr.checked==false){
        LlamarClase("Por favor selleciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }
}