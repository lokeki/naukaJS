const ul = document.getElementsByTagName('ul')[0];
console.log(ul);
ul.setAttribute('class', 'menu');

ul.firstElementChild.classList.add('first');

//druga metoda

const allElements = document.querySelectorAll('li');
allElements[allElements.length - 1].classList.add('last');

allElements[2].classList.add('active');
allElements[2].style.color = '#fff';

for(let element of allElements){

    console.log(element.firstChild);

    element.firstChild.setAttribute('title', `Przejdź na stronę ${element.innerText}`);

    element.firstChild.setAttribute('href', '#');

    element.firstChild.onclick = () => {
        
    }

    element.firstChild.onclick = showText;

}

function showText(event) {

    //const text = event.target.innerText;
    //window.alert(`kliknieto ${text}`)
    window.alert(`Kliknieto ${event.target.innerText}`)
}

