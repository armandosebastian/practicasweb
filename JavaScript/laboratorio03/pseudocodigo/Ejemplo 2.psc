Algoritmo Ejemplo2
	Definir lad, area Como Entero;
	Definir men Como texto;
	
	lad=0; area=0; men="";
	
	Escribir "Ingresa el lado del cuadrado";
	Leer lad;
	
	area=lad*lad;
	
	Si (area>100)Entonces
		men="Es un cuadrado grande";
	FinSi
	
	Escribir "El area del cuadrado es: ",area;
	Escribir men;
	
FinAlgoritmo
