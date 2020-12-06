var link = document.querySelector('.link'),
    href = link.getAttribute('href'); // pobiera wartosc podanego atrybutu

    link.setAttribute('href', 'http://eduweb.pl'); // ustawiamy atrybut: setAttribute('nazwaAtrybutu', 'wartoscAtrybutu') jesli taki atrybut juz istnieje to zamienimy jego wartosc, jesli nie to zostanie dodany


link.removeAttribute('class'); // usuwanie atrybutu

var button = document.querySelector('button');

// wylaczenie przycisku
button.setAttribute('disabled', true);
button.removeAttribute('disabled');


var img = document.createElement('img');
img.src = 'https://kstatic.googleusercontent.com/files/f4b4fbcc6119576da7ab3f68270196009fc1b16f1927910842d793c385115593b6dd5fbe9a1e21fe64f3cbbc509c3a02c95ebc9635f76c355282482986f1fe7d'; // skrot na ustawienie atrybutu src

document.body.appendChild(img);

var attrs = img.attributes; // pobieranie wszystkich atrybutow elementu

link.hasAttribute('href'); // sprawdza czy podany atrybut istnieje w elemencie (zwraca true/false)