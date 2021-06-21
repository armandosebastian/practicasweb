Algoritmo Ejemplo3
	Definir pre, sbt, igv, tot Como Real;
	Definir can Como Entero;
	pre=0; sbt=0; igv=0; tot=0;
	
	Escribir "Ingrese el precio del producto:";
	Leer pre;
	Escribir "Ingrese la cantidad a comprar del producto:";
	Leer can;
	
	sbt=pre*can;
	igv=sbt*0.18;
	tot=sbt+igv;
	
	Escribir "El subtotal es: ",sbt;
	Escribir "El igv es: ",igv;
	Escribir "El total es: ",tot;
	
	
	
FinAlgoritmo
