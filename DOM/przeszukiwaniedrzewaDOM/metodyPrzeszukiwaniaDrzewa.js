var container = document.getElementById('container');

//var firstName = document.getElementsByName('firstName'); // zwraca obiekt tablicopodobny

var firstName = document.getElementsByName('firstName')[0]; // zwraca pierwszy element z obiektu tablicopodobnego

var paragraphs = document.getElementsByTagName('p'); // zwraca obiekt tablicopodobny

var texts = document.getElementsByClassName('text'); // zwraca obiekt tablicopodobny


var h1 = document.querySelector('h1'); // zwraca tylko jeden element

var form = document.querySelector('#myForm');
var submit = form.querySelector("buttom[type='submit']"); // selektor css3

var links = document.querySelectorAll('a'); //  zwraca obiekt tablicopodobny
