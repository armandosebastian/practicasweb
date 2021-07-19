// Valida, aparece en tabla pero datos indefinidos

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
    if(cboCategoria.value=="" || cboCategoria.value==0){
        error.style.display="block";
        error.innerHTML+="<li>Por favor selecciona la categoria</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarPrecio(){
    if(txtPre.value=="" || txtPre.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese el precio</li>";
    }else{
        error.style.display="none";
    }
}

function ValidarCantidad(){
    if(txtCan.value=="" || txtCan.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese la cantidad</li>";
    }else{
        error.style.display="none";
    }
}

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

function RegistrarZ(){
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa el nombre");
        LlamarClase("Por favor selecciona la categoria");
        LlamarClase("Por favor ingresa el precio");
        LlamarClase("Por favor ingresa la cantidad");
        txtNom.focus();
    }else if(cboCategoria.value=="" || cboCategoria.value==0){
        LlamarClase("Por favor selecciona la categoria");
        LlamarClase("Por favor ingresa el precio");
        LlamarClase("Por favor ingresa la cantidad");
        cboCategoria.focus();
    }else if(txtPre.value=="" || txtPre.value==null){
        LlamarClase("Por favor ingresa el precio");
        LlamarClase("Por favor ingresa la cantidad");
        txtPre.focus();
    }else if(txtCan.value=="" || txtCan.value==null){
        LlamarClase("Por favor ingresa la cantidad");
        txtCan.focus();
    }else{
        alert("Registro correcto");
        error.innerHTML="";
    }
}

function MostrarProducto(){
    var listaproducto=Mostrar();

    var tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";

    for(var i=0;i<listaproducto.length;i++){
        var fila=tbody.insertRow(i);
        var titulonom=fila.insertCell(0);
        var titulocat=fila.insertCell(1);
        var titulopre=fila.insertCell(2);
        var titulocan=fila.insertCell(3);

        titulonom.innerHTML=listaproducto[i].nombre;
        titulocat.innerHTML=listaproducto[i].categoria;
        titulopre.innerHTML=listaproducto[i].precio;
        titulocan.innerHTML=listaproducto[i].cantidad;
        tbody.appendChild(fila);
    }
}

function RegistrarProducto(){
    var nom=txtNom.value;
    var cat="";
    var indice=cboCategoria.selectedIndex;
    switch(indice){
        case 1:
            cat="Entretenimiento";
            break;
        case 2:
            cat="Tecnologia";
            break;
        case 3:
            cat="Linea Blanca";
            break;
        default:
            cat="";
            break;
    }
    var pre=txtPre.value;
    var can=txtCan.value;

    RegistrarZ(nom,cat,pre,can);
    MostrarProducto();
}

btnRegistrar.addEventListener("click", RegistrarProducto);



