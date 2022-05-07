"use strict"
var cancel = false
var pristatymas = 3
var kaina = prompt("Iveskite prekes kaina")
kaina = Number(kaina)
var sum = pristatymas + kaina

while(isNaN(kaina) && cancel == false ){
    var kaina = prompt("Dar kartą įveskite prekės kainą")
    kaina = Number(kaina)
    cancel = true
}
while(kaina >= 1 && cancel == false) {
 var answer = confirm("Ar reikalingas pristatymas į namus? (taip/ne)")
 cancel = true
 
}
if(answer == false){
    console.log ("Prekes kaina:" + kaina.toFixed(2) + "€")
    console.log ("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}

if(answer == true) {
    var adresas = prompt("Į kurį miestą reiks pristatyti?")

console.log ("Prekės kaina: " + kaina.toFixed(2) +  "€")
console.log (" Pristatymas: " + pristatymas.toFixed(2)  + "€")
console.log ("Iš viso: " + sum.toFixed(2) + "€")
console.log (`Preke pristatysime i ${adresas} per 1-3 dienas.`)}











