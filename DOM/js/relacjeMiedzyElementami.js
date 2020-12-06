var list = document.querySelector('#list1');

var children = list.childNodes; //przechowuje dzieci, kazdy element znajdujacy sie w list, nawet tabulator

var elementChildren = list.children; // wszystkie dzieci

//pierwsze dziecko
var first = list.firstChild; // pierwszy element (w tym tabulatory)

var firstElement = list.firstElementChild; // pierwsze dziecko (bez tabulatora)

var last = list.lastChild;

var lastElement = list.lastElementChild; //dziala jak przy first


// zaleznosci rodzenstwo
var second = firstElement.nextSibling; // nastepny element (w tym tabulatory)

var secondElement = firstElement.nextElementSibling; // nastepny element po firstElement (rodzenstwo)

var lastButOne = lastElement.previousSibling;

var lastButOneElement = lastElement.previousElementSibling; // analogicznie jak wyzej przy nastepnym tylko poprzedni element

// odwolanie do rodzica
var parent = second.parentNode;

secondElement.parentNode.removeChild(secondElement); // poprzez referencje do obiektu(dziecko) mozemy sie odwolac do jego rodzica i np je usunac