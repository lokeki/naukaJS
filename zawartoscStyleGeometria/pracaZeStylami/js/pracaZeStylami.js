let h1 = document.querySelector('h1'),
    container = document.querySelector('#container'),
    p = container.querySelectorAll('p'),
    link = container.querySelector('a');

h1.style.color = '#ff0000';
h1.style['font-size'] = '20px'; // mozna sie odwolywac na dwa sposoby

container.style.cssText = 'width: 600px; margin: 0 auto;';

for(let i = 0; i < p.length; i++){
    p[i].style.lineHeight = '30px';
}

link.style.display = 'block';
link.style.display = ''; // wraca do wyswiatlania jaki byc powinien

console.log(parseInt(container.style.width));
console.log(h1.style.display); // pusty ciagb znakow, nie mozemy sie tak odwolac do wartosci, ktorych nie przypisalismy


console.log(window.getComputedStyle(h1).display); //window zwraca nam obiekt, tak mozemy sprawdzic jakie wartosci stylow ma element odgornie