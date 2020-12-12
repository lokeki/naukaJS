const container = document.querySelector('#container'),
      box = container.querySelector('.box'),
      link = container.querySelector('a');

// zwracaja wartosci z border, padding

const containerDim = container.getBoundingClientRect();

console.log(container.offsetWidth); // odczytujemy szerokosc 
console.log(container.offsetHeight); //wysokosc


console.log(box.getBoundingClientRect().width); 
console.log(box.offsetWidth); // roznica jesli uzyjemy transform: scale(0.5); to offsetWidth nadal bedzie pokazywalo wczesniejsza wartosc, tutaj 200, a box.getBoundingClientRect().width bedzie pokazywalo ile ma teraz po scalowaniu, czyli 100


// zwracaja wartosci bez border
console.log(container.clientWidth);
console.log(container.clientHeight);

console.log( 'scroll ', box.scrollWidth);
console.log( box.scrollHeight);

console.log( link.offsetWidth);

console.log( window.innerWidth); // odczytujemy okno przegladarki, to co moze zobaczyc uzytkownik
console.log( window.innerHeight);