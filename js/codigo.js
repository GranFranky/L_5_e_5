// solicita al usuario que introduzca miNombre

let miNombre = prompt("Introduce un nombre (Pepito Grillo): "); 

/* con while comprobamos si la cadena introducida es "Pepito Grillo", en caso afirmativo
mostramos con alert un saludo.
En el caso de que el usuario pulse la tecla cancelar, se finaliza el programa
*/

while (!(miNombre == "Pepito Grillo")){
  if(reply==undefined) {
    break;
  }
  alert ("Vuelve a intentarlo");
  let miNombre = prompt("Introduce un nombre: ");
}

alert("Hola Pepito Grillo");
