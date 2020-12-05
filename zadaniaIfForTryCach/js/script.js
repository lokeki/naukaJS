/*
 Zadanie 1
Za pomocą pętli wypisz w konsoli tekst `12345678910`
*/

let stringWithNumber = ''
for(let i = 1; i <= 10; i++){
    stringWithNumber += `${i}`;
}
console.log(stringWithNumber);

/* Zadanie 2
Stwórz zmienną `n`, pod którą postawisz jakąś liczbę całkowitą z przedziału 1-10 oraz dodatkową zmienną `txt`, która będzie zawierać jakiś tekst np. `kot`.

Sprawdź czy liczba `n` jest dodatnia. Jeżeli jest wypisz w konsoli tekst, który będzie powtórzeniem `n` razy tekstu ze zmiennej `txt`. Przykładowo:

```
input -> "kot";
n -> 3
wynik -> "kotkotkot";
```

Powtórzenie tekstu wygeneruj za pomocą pętli. Po uzyskaniu efektu, powtórzenie wygeneruj za pomocą metody [repeat()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/repeat) dla stringów.
*/

let valueN = parseInt(prompt('Wpisz liczbę całkowitą z przedziału 1-10: '));
let txt = prompt('Wpisz tekst: ');

if( valueN >= 0){
    let repeatText = ''
    for(i = valueN; i > 0; i--){
        repeatText += txt;
    }
    console.log(repeatText);
}

if( valueN >= 0){
    console.log(txt.repeat(valueN));
}



/* Zadanie 3
Wygeneruj i wypisz w konsoli tekst:

```
╔═══════════════════════╗
║  To jest jakiś tekst  ║
╚═══════════════════════╝
```

Tekst w ramce powinien być postawiony pod zmienną, tak by łatwo można było go zmienić. Narożniki wygeneruj po prostu kopiując odpowiedni znaki z powyższego przykładu.

Rozbuduj to zadanie tak, by tekst był podawany przez użytkownika za pomocą [Prompt()](https://developer.mozilla.org/pl/docs/Web/API/Window/prompt). Jeżeli tekst jest dłuższy od 20 znaków, wyświetl tylko 20 i pokaż `...`. Przycięcie możesz dokonać za pomocą [Slice()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/slice)
*/

const borderWithText = (text) => {
    let lengthTextWithSpace = text.length + 6;
    let textWithBorder = '';
    for(let j = 0; j < 3; j++){
        for(let i = 0; i < lengthTextWithSpace; i++){ 
            if(j == 0 && i == 0){
                textWithBorder += '╔';
            }else if(j === 0 && i === lengthTextWithSpace-1){
                textWithBorder += '╗ \n'
                continue;
            }else if(j === 2 && i === 0){
                textWithBorder += '╚';
            }else if(j === 2 && i === lengthTextWithSpace-1){
                textWithBorder += '╝';
            }else if(j !== 1){
                textWithBorder += '═';
            }
        }
        if(j === 1 && text.length < 20){
            textWithBorder += `║  ${text}  ║\n`;
        }else if(j === 1 && text.length >= 20) {
            textWithBorder += `║  ${text.slice(0, 20)}...  ║\n`;
        }
    }
    
    console.log(textWithBorder);
}
borderWithText(prompt("Wpisz tekst: ")); //TODO prompt() and slice()

/* Zadanie 4
Zrób losowanie 10 liczb z przedziału 1-10. Wypisz je w konsoli. Jeżeli przynajmniej połowa z nich jest większa niż 5, wtedy w konsoli wypisz tekst `udało się`, w przeciwnym razie wypisz w konsoli tekst `niestety nie tym razem`.
*/

let roundNumbers = () => {
    let tabWithNum = [];
    for(let i = 0; i < 10; i++){
        tabWithNum.push(Math.ceil(Math.random() * 10));
        console.log(tabWithNum);
    }
    if((tabWithNum.length)/2 < (tabWithNum.filter((el) => el > 5).length)){
        console.log("Udało się");
    }else {
        console.log('Niestety nie tym razem');
    }
}
roundNumbers();

/* Zadanie 5
Za pomocą pętli wygeneruj poniższy tekst:

`01-2--3---4----5-----6------7-------`

Zadanie wykonaj dla zmiennej równej `n=7`
*/

let stringText = '';

for(let i = 0; i <= 7; i++){
    stringText += i.toString();
    for(let j = 0; j <= i; j++){
        stringText += '-';
    }
}
console.log(stringText);

/* Zadanie 6
Mamy dwie zmienne:
```
const min = 1;
const max = 1000;
```
Za pomocą `prompt()` pobierz od użytkownika liczbę z przedziału min-max. Pamiętaj, że prompt() zwraca zawsze tekst, więc skonwertuj ją na liczbę.

Robiąc pętlę while generuj losową liczbę z przedziału min-max.
Wypisz w konsoli ile wykonało się iteracji, aż wylosowana liczba była równa tej, którą podał użytkownik.
*/

const min = 1;
const max = 1000;

const numUser = parseInt(prompt(`Podaj liczbe z przedzialu ${min} - ${max}`));
console.log(typeof numUser)

if(numUser <= 1000 && numUser >= 1){
    let temp = 0;
    let counter = 0;
    while(numUser !== temp){
        temp = Math.round(Math.random() * (max - min + 1));
        counter++;
    }
    console.log(temp + " " + counter);
}