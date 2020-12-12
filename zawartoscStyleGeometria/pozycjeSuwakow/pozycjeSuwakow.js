const container = document.querySelector('#container'),
      box = container.querySelector('.box');

      
console.log(box.scrollTop);
console.log(box.scrollLeft); // scrollowanie suwakiem

console.log(document.body.scrollTop); // nie dziala ! :D
console.log(document.documentElement.scrollTop); // pozycja, przewijanie body

window.scrollTo(0, 200) // scrolujemy do tej pozycji
window.scrollBy(0, -100) // scrolujemy od naszej pozycji 0 100 do gory
window.scrollBy(0, 100) // scrolujemy od naszej pozycji 0 100 w dol