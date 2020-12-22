const qwertDiv = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const startGameBtn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
const header = document.querySelector('.header');
const keyrow1 = document.querySelector('.keyrow1');
const keyrow2 = document.querySelector('.keyrow2');
const keyrow3 = document.querySelector('.keyrow3');

const scoreboard = document.getElementById('scoreboard');
const overlay = document.getElementById('overlay');

const listItem = document.createElement('li');

let missed = 0;
keyrow1.style.display = 'none';
keyrow2.style.display = 'none';
keyrow3.style.display = 'none';
phraseDiv.style.display = 'none';
header.style.display = 'none';
scoreboard.style.display = 'none';

const phrases = ['may be', 'timeline', 'i see', 'bye', 'k'];

startGameBtn.addEventListener('click', () => {
    //dodawanie elementow
    setTimeout(function(){
        //scoreboard
        $('#scoreboard').fadeIn(500);
    }, 500);

    setTimeout(function(){
        //header
        $('.header').fadeIn(500);
    }, 500);

    setTimeout(function(){
        //phrase
        $('#phrase').fadeIn(500);
    }, 500);

    setTimeout(function(){
        //keyrow1
        $('.keyrow1').fadeIn(500);
    }, 500);

    setTimeout(function(){
        //keyrow2
        $('.keyrow2').fadeIn(1000);
    }, 500);

    setTimeout(function(){
        //keyrow3
        $('.keyrow3').fadeIn(1500);
    }, 500);
});

startGameBtn.addEventListener('click', () => {
    // ukrywanie elementow
    overlay.style.display = 'none';
});

const getRandomPhraseAsArray = (arr) => {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum].split('');
}

const addPhraseToDisplay = (arr) => {
    for(let i = 0; i < arr.length; i++){
        const listItem = document.createElement('li');
        listItem.innerText = arr[i];
        ul.appendChild(listItem);

        if(listItem.textContent == ' '){
            listItem.className = 'space';
        }else{
            listItem.className = 'letter';
        }
    }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

const checkLetter = (button) => {
    const checkLetter = document.querySelectorAll('li');
    let found = null;
    for(let i = 0; i < checkLetter.length; i++){
        if(button.textContent === checkLetter[i].textContent){
            checkLetter[i].classList.add('show');
            found = button;
        }
    }
    return found;
};

qwertDiv.addEventListener('click', (e) => {

    if(e.target.tagName == 'BUTTON'){
        const buttonPressed = e.target;
        buttonPressed.className = 'chosen';
        if(buttonPressed.className === 'chosen'){
            buttonPressed.disabled = true;
        }

        const letterFound = checkLetter(buttonPressed);

        const tries = document.querySelectorAll('.tries img');
        if(letterFound === null){
            tries[missed].src = "https://i.postimg.cc/Bbb9cLdz/lost-Heart.png";
            missed++;
        }
    }

    chcekWin();
});

const chcekWin = () => {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const result = document.querySelector('.result');
    const phraseDiv = document.getElementById('phrase');

    if(show.length === letter.length){
        overlay.className = 'win';
        result.textContent = 'You won, nice one!'
        startGameBtn.textContent = 'one more now';
        overlay.style.display = 'flex';
        phraseDiv.style.display = 'none;'
    }

    if(missed >= 5){
        overlay.className = 'lose';
        result.textContent = 'lol, looser!';
        startGameBtn.textContent = 'no, i got this';
        overlay.style.display = 'flex';
        phraseDiv.style.display = 'none;'
    }

    startGameBtn.addEventListener('click', reset)
};

const reset = () => {
    location.reload(true)
};