Algoritmo Ejemplo4
	Definir can Como Entero;
	Definir pre, sbt, des, igv, tot Como Real;
	Definir cat, com Como texto;
	
	can=0; pre=0; sbt=0; des=0; igv=0; tot=0; cat=""; com="";
	
	Escribir "Ingresa la cantidad a comprar:";
	Leer can;
	Escribir "Ingresa el precio del producto:";
	Leer pre;
	Escribir "Ingresa la categoria:";
	Leer cat;
	Escribir "Ingresa el tipo de comprobante [f]Factura o [b]Boleta:";
	Leer com;
	
	sbt=can*pre;
	
	si (cat="d")Entonces
		des=sbt*0.07;
	Sino 
		des=sbt*0.03;
	FinSi
	
	si (com="f")Entonces
		igv=sbt*0.18;
	SiNo
		igv=0;
	FinSi
	
	tot=sbt-des+igv;
	
	Escribir "El subtotal es: ",sbt;
	Escribir "El descuento es: ",des;
	Escribir "El IGV es: ",igv;
	Escribir "El total es: ",tot;
	
	
	
	
FinAlgoritmo
