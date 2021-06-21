Algoritmo Ejemplo2
	Definir n1, n2, n3, n4, prom Como Real;
	Definir men como texto;
	
	n1=0; n2=0; n3=0; n4=0; prom=0; men="";
	
	Escribir "Ingresa la nota 1:";
	Leer n1;
	Escribir "Ingresa la nota 2:";
	Leer n2;
	Escribir "Ingresa la nota 3:";
	Leer n3;
	Escribir "Ingresa la nota 4:";
	Leer n4;
	
	prom=(n1+(2*n2)+n3+(3*n4))/7;
	
	Si (prom>=13)Entonces
		men="Aprobado";
	SiNo
		men="Desaprobado";
	FinSi
	
	Escribir "El promedio es: ",prom;
	Escribir men;
	
	
FinAlgoritmo
