Algoritmo Ejemplo1
	Definir bas, alt, area Como Real;
	Definir men Como texto;
	
	bas=0; alt=0; area=0; men="";
	
	Escribir "Ingrese la base del rectangulo:";
	Leer bas;
	Escribir "Ingrese la altura del rectangulo:";
	Leer alt;
	
	area=bas*alt;
	
	Si (area>100)Entonces
		men="Es un rectangulo grande";
	SiNo
		men="Es un rectangulo peque�o";
	FinSi
	
	Escribir "El area del rectangulo es: ", area;
	Escribir men;
	
FinAlgoritmo
