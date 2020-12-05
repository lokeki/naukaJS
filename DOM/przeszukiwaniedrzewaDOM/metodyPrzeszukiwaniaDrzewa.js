var container = document.getElementById('container');

//var firstName = document.getElementsByName('firstName'); // zwraca obiekt tablicopodobny

var firstName = document.getElementsByName('firstName')[0]; // zwraca pierwszy element z obiektu tablicopodobnego

var paragraphs = document.getElementsByTagName('p'); // zwraca obiekt tablicopodobny

var texts = document.getElementsByClassName('text'); // zwraca obiekt tablicopodobny


var h1 = document.querySelector('h1'); // zwraca tylko jeden element

var form = document.querySelector('#myForm');
var submit = form.querySelector("buttom[type='submit']"); // selektor css3

var links = document.querySelectorAll('div a'); //  zwraca obiekt tablicopodobny, wszytskie elementy a ktr sa w div ( tak jak w css)

/* 
Roznice miedzy getElement a querySelector:
getElement -> 
 - nie mozemy tu przekazywac selektorow jak np klasa, buttom[type='submit'] itd;
 - jest 'zywa' lista, zmieniaja sie wraz ze zmianami

querySelector -> 
 - zachowuje wszystkie elementy, ktore zostaly wpisane na poczastku, nie reaguje na zmiany, nie jest 'zywa'

*/

// wlasciwosci:
//obiekty tablicopodobne
document.all; // zwroci wszystkie elementy na stronie (wychodzi)
document.forms; // zwroci wszytskie form
document.images; // zwroci wszytskie img
document.links; // zwroci wszytskie a