let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.push('cinq'); //ppour ajouter au dernier
monTableau.unshift('zero'); //pour ajouter au premier

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[0].push("exo");
console.log(monTableau2D);


let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
