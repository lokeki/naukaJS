let container = document.querySelector('#container'),
    para = document.querySelector('#container p');

console.log(container.innerHTML); // pobiera zawartosc HTML w stringu

console.log(para.textContent);// pobiera tylko tekst bez znacznikow

console.log(para.innerText); // pobiera tekst

para.innerHTML = '<b>Nowa tresc</b>'; // np dodanie ze znacznikami na strone

para.textContent = 'Nowa tresc';
para.innerText = 'Nowa inna tresc'; // dodaja tylko tersc

console.log(container.outerHTML); // pobiera caly element tez ten na ktr wykonujemy dzialanie

container.outerHTML = "<div id='container'><p>Tresc</p><div/>"; // nadpisalismy poprzedniego diva, jednak nadalismy mu to samo id co mial poprzednik. Rezultat, poprzez to id odwolujemy sie do poprzedniego, bo on nadal jest w pamieci