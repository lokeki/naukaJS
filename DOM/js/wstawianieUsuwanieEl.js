// Wstawianie i usuwanie elementow ze strony

//pobieramy indetyfikatory z list
var list1 = document.querySelector('#list1'),
    list2 = document.querySelector('#list2');

var li = document.createElement('li'),
    text = document.createTextNode('Terść');

li.appendChild(text); //dadajemy dziecko

//list1.appendChild(li); //dadajemy dziecko (zawsze na sam koniec)

//list1.insertBefore(li, list1.querySelector('li:nth-child(2'));// wstawiamy jakis el, przed jakis inny el

//wstawiamy element ktr znajduje sie juz na stronie
list1.appendChild(list1.querySelector('li:first-child')); // jesli tak zrobimy to element nie zostanie zduplikowany tylko przeniesiony na koniec

// usuwanie poprzez odwolanie do rodzica

list2.removeChild(list2.querySelector(':last-child'));

// zamiana dziecka

list1.replaceChild(li, list1.querySelector(':last-child'));