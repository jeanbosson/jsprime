 //fonction pour addition

function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

 //fonction pour multilication

 function multilication(nombreA, nombreB) {
  return nombreA * nombreB;
}

//fonction pour soustraction

function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

//fonction pour division

function division(nombreA, nombreB) {
  if(nombreB == 0){
    throw new Error("impossible de diviser par 0");
  }
  return nombreA / nombreB;
}


do {
  var choix = Number(prompt ("Que souhaitez vous faire ? \n\n 1- Addition \n 2- Multiplication \n 3- Soustration \n 4- Division\n"));
   
}

while (choix !=1 && choix !=2 && choix !=3 && choix !=4) {
   

}

do{
  premierNombre = Number(prompt("vueillez choisir votre premier Nombre :"));
  deuxiemeNombre = Number(prompt("vueillez choisir votre deuxieme Nombre:"));
}
while (isNaN(premierNombre) || isNaN(deuxiemeNombre))

try{

switch(choix) {
  case 1:
    var resultat = addition(premierNombre,deuxiemeNombre); 
    break;

  case 2:
    var resultat = multilication(premierNombre,deuxiemeNombre); 
    break;

  case 3:
    var resultat = soustraction(premierNombre,deuxiemeNombre); 
    break;

  case 4:
    var resultat = division(premierNombre,deuxiemeNombre); 
    break;

  default:
    throw new Error("une erreur est survenue.");

 
   }
   alert("voici le resultat :" + resultat);
}
catch(error) {
  alert(error);
}



