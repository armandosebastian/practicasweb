// Valida pero no aparecen los datos 

var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var btnRegistrar=document.getElementById("btnRegistrar");

function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingresa el nombre</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese el apellido</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarDni(){
    if(txtDni.value=="" || txtDni.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese el Dni</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarCurso(){
    if(cboCurso.value==0 || cboCurso.value==""){
        error.style.display="block";
        error.innerHTML+="<li>Por favor selecciona la categoria</li>";
    }else{
        error.style.display="none";
    }
}

function Validar(){
    error.innerHTML="";
    ValidarNombre();
    ValidarApellido();
    ValidarDni();
    ValidarCurso();
}

function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

function Registrar(){
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu dni");
        LlamarClase("Por favor selecciona un curso");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu dni");
        LlamarClase("Por favor selecciona un curso");
        txtApe.focus();
    }else if(txtDni.value=="" || txtDni.value==null){
        LlamarClase("Por favor ingresa tu dni");
        LlamarClase("Por favor selecciona un curso");
        txtDni.focus();
    }else if(cboCurso.value=="" || cboCurso.value==0){
        LlamarClase("Por favor selecciona un curso");
        cboCurso.focus();
    }else{
        alert("Registro Correcto");
        error.innerHTML="";
    }
}

function MostrarProducto(){
    var listaproducto=Mostrar();
    var tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    for(var i=0;i<listaproducto.lenght;i++){
        var fila=tbody.insertRow(i);
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);

        titulonom.innerHTML=listaproducto[i].nombre;
        tituloape.innerHTML=listaproducto[i].apellido;
        titulodni.innerHTML=listaproducto[i].dni;
        titulocur.innerHTML=listaproducto[i].curso;
        tbody.appendChild(fila);
    }
}

function RegistrarProducto(){
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cur="";
    var indice=cboCurso.selectedIndex;
    switch(indice){
        case 1:
            cur="Diseño Web";
            break;
        case 2:
            cur="Base de Datos";
            break;
        case 3:
            cur="Programacion Java";
            break;
        default:
            cur="";
            break;
    }
    Registrar(nom,ape,dni,cur);
    MostrarProducto();
}

btnRegistrar.addEventListener("click", RegistrarProducto);


