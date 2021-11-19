class Utilisateur {
    constructor(prenom, nom) {
    this.prenom  = prenom;
    this.nom  = nom;
    }
    
    sePresenter() {
      console.log(`je m'appel ${this.nom} ${this.prenom}`);
    }
  }
  
  let elown = new Utilisateur('alow', 'musk');
  let fresh = new Utilisateur('mark', 'zuck');
  
  elown.sePresenter();