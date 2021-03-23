//ciclo while

var contador = 5;
var n2 = 17;

while(contador>0){

console.log("Probando while :) "+contador);
 
 contador--;
};

while(n2<=25){

    console.log("EJEMPLO 2 " + n2);
    n2++;

};

var n = 10;
var n22 = 25;

while(n > 5 && n22<30){

console.log( "n > 5 = "+n 
             +"   n22 < 30 = "+n22);

n--;
n22++;
};


//do-while 

var condicion = "hola";
var cont = 0; 

do{ 
 console.log("estas en el ciclo do-while");
 cont++;
   if (cont == 2){
       condicion = "adios"
   };
   
} while(condicion == "hola" );


var condicon2 = 25;
do{
    console.log("valor: "+condicon2);
    condicon2 -=5;
}while(condicon2 >= 5);

// ejercicios de tabla de multiplicar :)
var condicon3 = 8;
var condicon4 = 1;
do{
    console.log( "8 * "+condicon4 +" = "+condicon3 );
    condicon3 +=8;
    condicon4 +=1;
}while(condicon3 < 88 && condicon4 < 11  );
 

// Crear un programa que lea tantos numeros 
// como quiera, hasta que se ingrese un cero
// luego se mostrara el resultado de la suma total de 
// todos los numeros ingresados Aplicar la funcion while :)


const prompt = require('prompt-sync')();
var recibeNumero;
var suma = 0;
do{
    //Recibimos un texto, que serán los números a sumar
    recibeNumero = prompt("Dame un número: ");
    //Convertimos a enteros los números recibidos
    suma = suma + parseInt(recibeNumero);
//Si el valor es igual a 0, se dentendrá el ciclo
}while( recibeNumero != 0 );
//Imprimimos en pantalla el resultado final
console.log( "La suma total es: " + suma);



//ejercicio 
