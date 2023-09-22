/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 * 
 */
"use strict";

let tabnom = [];
tabnom.push ("Vincent","Paul","Arthur");

tabnom.forEach(tabnoms =>{ tabnoms +=" va a la peche";
console.log(tabnoms);
});// On ajoute juste dans le forEach le "va a la peche" mais il ne s'ajoute pas definitivement
