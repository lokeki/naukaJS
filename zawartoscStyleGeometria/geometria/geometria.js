const container = document.querySelector('#container'),
    box = container.querySelector('.box');

console.log(box.offsetTop); // od div do box gora w px bo w geometriaStyle.css jest ustawione position: relative, jakby tego nie bylo dlugosc mierzona bylaby od body
console.log(box.offsetLeft);
console.log(box.offsetParent);

//odczytywanie pozycji wzg calego dokumentu
let pos = box.getBoundingClientRect(); // zwraca obiekt ktr ma kilka wlasciwosci

console.log(pos);

console.log(document.elementFromPoint(100, 200)); // zwraca nam jaki element znajduje sie na tym polozeniu
