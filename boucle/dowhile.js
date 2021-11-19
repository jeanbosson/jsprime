 let prenom;

 do {
    prenom =  prompt("quel est votre prenom?");
 } while (prenom == "" || prenom == null) {
     alert("bonjour" + prenom);
 }