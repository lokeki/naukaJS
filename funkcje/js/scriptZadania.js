/*
Zadania - funkcje

Zadanie 1
Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.

Funkcja niech ZWRACA tekst `Liczba liter: ....` gdzie `....` to liczba liter tekstu. Wynik jej użycia wypisz w konsoli za pomocą `console.info()`
*/

function zadanie1(text) {
    console.info("Liczba liter: " + text.length);
}

zadanie1("To jest");

/*
Zadanie 2
Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę.
Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.
*/

function zadanie2Sum(tab) {

}

xs = [1,2,3];
const zSum = xs => xs.reduce((a, b) => a + b, 0);
console.log(zSum(xs));

/*
Zadanie 3
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
Zadanie 4
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
Zadanie 5
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
Zadanie 6
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

/*
Zadanie 7
Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.

```
input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
```
*/

/*
Zadanie 8
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

/*
Zadanie 9
Napisz funkcję `countWomanInTable(arr)`, do której przekażesz tablicę userów, którą masz poniżej.
Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet.
Wykorzystaj tutaj funkcję z poprzedniego zadania.
Jak pobrać imię z usera? Możesz to osiągnąć za pomocą metody [split()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/split).
Podziel string na 2 części - uzyskasz tablicę 2 elementów. Pierwszy to imię, drugi to nazwisko

```
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
```*/