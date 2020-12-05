/*
Zadania - funkcje

Zadanie 1.1
Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.

Funkcja niech ZWRACA tekst `Liczba liter: ....` gdzie `....` to liczba liter tekstu. Wynik jej użycia wypisz w konsoli za pomocą `console.info()`
*/

function zadanie1(text) {
    console.info("Liczba liter: " + text.length);
}

zadanie1("To jest");

/*
Zadanie 1.2
Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę.
Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.
*/

xs = [1,2,3];
const zSum = xs => xs.reduce((a, b) => a + b, 0);
console.log(zSum(xs));

/*
Zadanie 1.3
Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:

```
input -> Ala ma kota
output -> AlA Ma kOtA
```

Dla ułatwienia spacje liczmy jako literę.
*/

function mixSize(text){
    let words = text.split("");
    const mixLetters = words.map((letter, index) => {
        return index % 2 ? letter.toUpperCase() : letter.toLowerCase();
        /*if(index % 2){
            return letter.toUpperCase();
        }else{
            return letter.toLowerCase();
        }*/
    }).join("");
return mixLetters;
}

console.log(mixSize("Ala ma kota"));

/*
Zadanie 1.4
Napisz funkcje, która będzie wymagać 2 atrybutów.
Funkcja niech sprawdza, czy oba atrybuty są liczbami.
Funkcja ma zwracać iloczyn (*) obu liczb.
Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.
*/

function zad4(num1, num2) {
    if(typeof(num1) === 'number' && typeof(num2) === 'number'){
        return num1 * num2;
    }else{
        return false;
    }
}

console.log(zad4(1, 2));
console.log(zad4("1", 2));

function multiply(num1, num2) {
    if(!isNaN(parseInt(num1)) && !isNaN(parseInt(num2))){
        return num1 * num2;
    }else{
        return false;
    }
}

console.log(multiply(1, 2));
console.log(multiply("1", 2));

/*
Zadanie 1.5
Napisz funkcje, która przyjmuje 2 parametry:
1) imię - np: Ala
2) miesiac - np: styczen

Funkcja ma zwracac:
* jezeli miesiac to grudzien, styczen, luty: `"Ala jezdzi na sankach"`
* jezeli miesiac to marzec, kwiecien, maj: `"Ala chodzi po kaluzach"`
* jezeli miesiac to czerwiec, lipiec, sierpien: `"Ala sie opala"`
* jezeli miesiac to wrzesien, pazdziernik, listopad: `"Ala zbiera liscie"`

Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.

Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami. Jeżeli miesiac jest "innym słowem", funkcja niech zwraca `"Ala uczy się JS"`
*/

const zad5 = ({name, month}) => {
    const lowerCaseMonth = month.toLowerCase().trim(); // trim usuwamy puste zanki z poczatku i konca

    if(lowerCaseMonth === 'grudzien' || lowerCaseMonth === 'styczen' || lowerCaseMonth === 'luty'){
        return `${name} jezdzi na sankach`;
    }else if(['marzec', 'kwiecien', 'maj'].includes(month)){
        return `${name} chodzi po kaluzach`;
    } else if(['czerwiec', 'lipiec', 'sierpien'].indexOf(month) !== -1){
        return `${name} sie opala`;
    }else if(['wrzesien', 'pazdziernik', 'listopad'].indexOf(month) !== -1){
        return `${name} zbiera liscie`;
    }else{
        return `${name} uczy sie JS`
    }

};

console.log(zad5({name:"Ania", month:"StyczeN"}));

const zad52 = ({name, month}) => {
    const lowerCaseMonth = month.toLowerCase().trim(); // trim usuwamy puste zanki z poczatku i konca

    switch (lowerCaseMonth){
        case 'grudzien':
        case 'styczen':
        case 'luty':
            return `${name} jezdzi na sankach`;
        case 'marzec':
        case 'kwiecien':
        case 'maj':
            return `${name} chodzi po kaluzach`;
        case 'czerwiec':
        case 'lipiec': 
        case 'sierpien':
            return `${name} sie opala`;
        case 'wrzesien':
        case 'pazdziernik': 
        case 'listopad':
            return `${name} zbiera liscie`;
        default:
            return `${name} uczy sie JS`;    
    }

};

console.log(zad52({name:"Ania", month:"StyczeN"}));


/*
Zadanie 1.6
Mamy przykładowy tekst:

```
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
```

Napisz funkcję, która przyjmie 2 atrybuty:
- tekst
- znak rozdziału (np. `|`)

Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

`input -> "Ania|Marcin|Bartek"`
`output -> "Ania|Bartek|Marcin"`

Wywołaj tę funkcję przekazując do niej str z początku zadania
*/

function stringSort(text, sign) {
    let arrayString = text.split(String(sign));
    arrayString.sort();
    return arrayString.join(String(sign));
}

console.log("stringSort: " + stringSort("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka", "|"));

/*
Zadanie 1.7
Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.

```
input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
```
*/

function upperSize(arrayWithName) {
    let arrayUpperName = arrayWithName.map((value) => {
        return value.toUpperCase();
    });
    return arrayUpperName;
}

function mixSize2(arrayWithName){
    let arrayMixSizeName = arrayWithName.map((value)=>{
        let words = value.split('');
        return words.map((value, index) => {
            return index % 2 ? value.toLowerCase() : value.toUpperCase();
        }).join('')
    });
    console.log(arrayMixSizeName)
    return arrayMixSizeName;
}

let arrayName = ["Ania" , "Marcin" , "Bartek" , "Piotr"];

console.log("ArrayName: " + arrayName);
let arrayWithUpperName = upperSize(arrayName);
console.log("funkcja upperSize: " + arrayWithUpperName);
console.log("ArrayName: " + arrayName);
console.log("funkcja mixSize2: " + mixSize2(arrayName));


/*
Zadanie 1.8
Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.
Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a"
to jest to żeńskie imię, w przeciwnym wypadku męskie.
Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie.
Przykładowo:

```
checkFemale("Ania") === true
checkFemale("Marcin") === false
```
*/

function checkFemale(name){
    return name[name.length - 1] === 'a' ? true : false;
}

console.log("Funkcja checkFemale: " + checkFemale("Ania"));
console.log("Funkcja checkFemale: " + checkFemale("Marcin"));

/*
Zadanie 1.9
Napisz funkcję `countWomanInTable(arr)`, do której przekażesz tablicę userów, którą masz poniżej.
Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet.
Wykorzystaj tutaj funkcję z poprzedniego zadania.
Jak pobrać imię z usera? Możesz to osiągnąć za pomocą metody [split()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/split).
Podziel string na 2 części - uzyskasz tablicę 2 elementów. Pierwszy to imię, drugi to nazwisko
*/

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]

function countWomanInTable(arr){
    let famle = 0;
    arr.forEach(element => {
        let name = element.slice(0, element.indexOf(" "));
        checkFemale(name) ? famle++ : false;
    });
    return famle;
}

console.log("Ilosc kobiet w tabeli users: " + countWomanInTable(users));

/* 
Zadanie 2
Zamień na funkcje strzałkową poniższe funkcje:
*/
//2.1
const sum = function(a, b) {
    const result = a + b;
    console.log(result);
}
sum(1, 3);

const sum2 = (a, b) => console.log(a + b); 
sum(1, 3);

//2.2
const myPow = function(a, b) {
    return Math.pow(a, b);
}
console.log(myPow(4, 2));

const myPow2 = (a, b) => Math.pow(a, b);
console.log(myPow2(4, 2));

//2.3
const hr = function() {
    console.log("-------");
}
hr();

const hr2 = () => console.log("-------");
hr2();

//2.4
const bigWords = function(tab) {
    const result = [];
    for (let i=0; i<tab.length; i++) {
        result.push(tab[i].toUpperCase());
    }
    return result;
}
console.log(bigWords(arrayName));

const bigWords2 = tab => tab.reduce((acc, value)=>{
        acc.push(value.toUpperCase());
        return acc;
    },[]);
console.log(bigWords2(arrayName));


//2.5
const tabNumber3 = [10, 2, 1];
const sumTab = function(tab)  {
    let sum = 0;
    for (let i=0; i<tab.length; i++) {
        sum += tab[i];
    }
    return sum;
}
console.log(sumTab(tabNumber3));

const sumTab2 = tab => tab.reduce((acc, number) => acc + number, 0);
console.log(sumTab2(tabNumber3));


//2.6
function test() {
    return "abecadło z pieca spadło";
}

(() => "abecadło z pieca spadło")(); 

//2.7
(function() {
    console.log("Prawie koniec");
});

(() => console.log("Prawie koniec"))();


//2.8
function findFirst(arr, name) {
    let math = undefined;
    for (var i=0; i<arr.length; i++) {
        if (arr[i].name === name) {
            math = arr[i];
            break;
        }
    }
    return math;
}

(arr, name)=>{
    arr.forEach((name)=>{arr.name === name ? arr : math})
};

//zadania

//1.1
//wyswietlanie parzystej i nieparzystej
function logNumber(num){
    for( let i = 0; i <= num; i++){
        i % 2 ? console.log("nieparzysta: " + i) : console.log("parzysta: " + i)
    }
}

logNumber(20);


/* 1.2 w konsoli tabliczka mnozenia
  
  1 2 3 4 5
  2 4 6 8 10
  3
  4
  5
*/

function Mn(num1, num2){
    for(let i = 0; i < num1; i ++){
        for(let j = 1; j < num2; j++){

        }
    }
}

for(let i = 1; i <= 5; i ++){
    let row = '';

    for(let j = 1; j <= 5; j++){
        row += (i * j).toString().padStart(4, ' ')
    }
    console.log(row);
}
