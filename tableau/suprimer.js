let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.pop(); // supprime le dernier élément
monTableau.shift(); // supprime le premier élément
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[0].shift(); // supprime le premier élément, de mon premier élément (donc, Mark)
// console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
delete(monTableauAssociatif.poste);
// console.log(monTableauAssociatif);