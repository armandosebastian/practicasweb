var producto=[];

function Registrar(nomproducto, apeproducto, dniproducto, curproducto){
    var NuevoProducto={
        nombre:nomproducto,
        apellido:apeproducto,
        dni:dniproducto,
        curso:curproducto,
    };
    producto.push(NuevoProducto);
}

function Mostrar(){
    return producto;
}