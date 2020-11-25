//tablica -> array
//Odwołowania 
var arr = [1, "tom", 25, {}, 48];
console.log(arr[3]);

//tablice to obiekty, czyli posiadają właściwości i metody

//tworzenie tablic 
//jednowymiarowe
var numbers = [1, 3, 4, 5];

console.log(numbers[2]);

//wielowymiarowe
var arrays = [[1, 22, 3, 4], [4, 2, 1, ["Jan"]]];

console.log(arrays[0][1]) // odwolanie do 22

console.log(arrays[1][3][0]) //odwolanie do "Jan"


//wlasciwosci
//dlugosc
console.log(numbers.length);

//rozne typy w tablicy
var things = [{firstName : "Anna"}, 2, 2 + 8]; 

//dodawanie elementow
var arr2 = [];
arr2[0] = "Kasia";
arr2[1] = "Tom";
console.log(arr2[0]);

//arr2[10] = 33; // dodaje puste brakujace indeksy 

//na koniec
arr2[arr2.length] = "Piotr";//raczej sie nie stosuje
console.log(arr2);
console.log(arr2.length);

//metoda dodawania na koniec tablicy
arr2.push("Marta", "Jacek", "Frania", "Zosia");
console.log(arr2);
console.log(arr2.length);

//dodawanie na poczatek tablicy, wszytskie inne przesuwając w prawo
arr2.unshift("Ania");
console.log(arr2);
console.log(arr2.length);

//Usuwanie elementow z tablicy

//za pomocą length
// length w zazwyczaj jest tylko do odczytu (read-only), ale wlasciwosc ta w tablicach jest mozliwa do zmian
/*
arr2.length = 2;
console.log(arr2);
*/

//metoda delete
/*
delete arr2[2];// zamienia wartosc pod tym indeksem na undefined
console.log(arr2);
console.log(arr2.length);
*/

//metoda pop()
var last = arr2.pop(); //usuwa i zwraca ostatni element
console.log(`last = ${last}`);
console.log(arr2);
console.log(arr2.length);

//metoda shift()
var first = arr2.shift(); //usuwa i zwraca pierwszy element
console.log(`first = ${first}`);
console.log(arr2);
console.log(arr2.length);

//metoda splice()

arr2.splice(1, 1);
/* nazwaTablicy.splice(numberIndexOdKtoregoZaczynamy, numberIleMiejscChcemyUsunac, toCoChcemyDodac) 
jesli nic nie podamy w numberIleMiejscChcemyUsunac to usunie nam wszytsko od numberIndexOdKtoregoZaczynamy, nie musimy tez podawac toCoChcemyDodac

zwraca te elementy
*/
console.log(arr2);
console.log(arr2.length);

var lastTwo = arr2.splice(-2, 2); // mozemy tez usuwac od konca, ta sama zasada co wyzej, jak zdejmujemy kilka to tworzy sie tablica

console.log(`lastTwo = ${lastTwo}`);
console.log(arr2);
console.log(arr2.length);

//Sortowanie 
var arrNumbers = [5, 8, 1, 2, 1, 33, 23, 18, 4, 10],
    arrString = ["anita", "Tomek", "Ania", "Andrzej", "Mateusz", "Kasia"];


// metoda sort()

arrNumbers.sort(); // sortuje "alfabetycznie" najpierw 1 potem 2 itd, np: [1, 18, 2, 23, 33, 4, 5, 8], jakby byly to stringi
console.log(arrNumbers);

//metoda sort() dla number
arrNumbers.sort(function(a, b) {
    return a - b;
}); //uzywamy funkcji aby posortowac numery

console.log(arrNumbers);

console.log(arrString);

arrString.sort();

console.log(arrString); // posortowana tablica, jenak wazne sa wielkosci liter, wieksze maja pierwszenstwo

//Iterowanie po elementach tablicy
var text = "Wytosowane liczby to: ";

// przy duzych tablicach przypisujemy dl tablicy do zmiennej i podstawiamy w for

//to da sie prosciej
for(let i = 0; i < arrNumbers.length; i++){
    text += arrNumbers[i] + ' ';
}
console.log(text);

var arr3 = [["Tomasz", "Kowalski", 23], ["Maria", "Nowak", 30], ["Jacek", "Zieliński", 38]];

for(let i = 0; i < arr3.length; i++){

    console.log("Dane:")

    for(let j = 0; j < arr3[i].length; j++){
        console.log(arr3[i][j]);
    }

    console.log("-----------------------------------");

}

//przydatne metody tablic

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//metoda slice()
var half = arrNumbers.slice(0, 5)// nazwaTablicy.splice(numberIndexOdKtrZaczynamy, numberIndexNaKtrKonczymy) kopiuje bez ostatniego 

console.log(half);

// metoda join() laczenie wszystkich elementow tablicy i zapis do Stringa
console.log(arrNumbers.join(", "));

//metoda indexOf() sprawdza czy w tablicy jest podany element i zwraca jego index, tylko do pierwszego znalezionego, jesli nie ma zwroci -1

console.log(arrNumbers.indexOf(10));

//metoda concat() laczenie i zwrocenie dwoch tablic, bez ich modyfikacji
console.log(arrNumbers.concat(half));

//metoda forEach() dla kazdego elementu takiej tablicy wykonaj funkcje, ktr przekazemy
//nazwaTablicy.forEach(wartosc, index, tablica)
arrNumbers.forEach(function(value, index, array){
    console.log(value);
});

//test zliczile jest elementow tablicy mniejszych od 10

var result = 0
arrNumbers.forEach((value, index, array) => {

    if(value < 10){
        result ++;
    }
});

document.write("Mamy: " + result);

//test result2 bedzie zwracal tablice
var result2 = [];
arrNumbers.forEach((value, index, array) => {

    if(value < 10){
        result2.push(value);
    }
});

document.write("<br/>Mamy tablice: " + result2);


//metoda filter() 
//np zwracamy elementy ktr sa wieksze od podanej liczby
var gt10 = arrNumbers.filter(function(value){
    return value > 10;
});
//jesli przekazany zostalby obiekt to mozemy sie odwolac do jego srodka

console.log(gt10);

// metoda map()
//zwraca tablice, gdzie np wartosci zostaly zmienione na ujemne
var negative = arrNumbers.map(function(value){
    return value * -1;
});

console.log(negative);

// test map()

var arrayMulti = [
    [12, 14, 7, 2], 
    [123, 564, 3, 2], 
    [645, 2, 7, 78]
];

// test za pomoac map() zwrocic najmniejsza i najwieksza [[14,2], [564,2], [645, 2]]
var resultArrayMulti = arrayMulti.map((currentValue, index, array)=>{

    /*moje
    tab = [];
    let i = 1;
    if(currentValue[i - 1] >= currentValue[i] && i < currentValue.length){
        

    }*/

    var min_ = (Math.min(currentValue[0], currentValue[1], currentValue[2]), currentValue[3]);

    var max_ = (Math.max(currentValue[0], currentValue[1], currentValue[2]), currentValue[3]);

    return min_, max_;

});

//albo

var [a, b, c, d] = arrayMulti[1];

var resultArrayMulti2 =  arrayMulti.map((currentValue, index, array)=>{
    return Math.min(...currentValue);
});

var resultNumber = arrNumbers.filter((myNumber) => {
    return myNumber > 5;
})

// po stringach test filter()

document.write("<br/> Fil: " + resultNumber + "<br/>");

var words = ["keyboard", "mouse", "speaker", "microphone"];

var resultStr = words.filter((word) => {
    return word.includes("a");
});

//metoda reduce()
//testy

const arrReduce = [1, 2, 3, 4, 5];
const sumReduce = arrReduce.reduce(function(acc, number, index) { 
    console.log("index: " + index);
    console.log("acc: " + acc);
    console.log("number: " + number);

    return acc + number;
},10);
console.log("wynik reduce: " + sumReduce);

const arrReduce2 = [1, 2, 3, 4, 5];
const sumReduce2 = arrReduce.reduce(function(acc, number, index) { 
    console.log("index: " + index);
    console.log("acc: " + acc);
    console.log("number: " + number);
    
    acc[index] = number + 10;
    return acc;
},[]);
console.log("wynik reduce2: " + sumReduce2);



const witchE = words.reduce(function(acc, element, index, array){
    if(element.includes("b")){
        acc.push(element);
    };

    array[0] = null;

    element = null;
    
    return acc;
},[]);

console.log("wynik witchE: " + witchE);
console.log("Tablica words: " + words);

//metoda flat() (splaszczenie) splaszcza tez orginalna tablice

var flatMultiArray = arrayMulti.flat();

console.log("Multi array: " + arrayMulti);


//metoda fill()
//uzupelnienie danej tablicy elementami, (wartosc, od ktr, do ktr) do konca tab, jesli podamy koniec poza tablica to nie doda ona nam nowych elementow do tablicy (dlugosc zostanie ta sama) zmienia takze podstawowa tablice

const array1 = [1, 2, 3, 4];

var flatArray = array1.fill(10, 1, 10);
console.log("FlatArray: " + flatArray);

//kopiowanie tablic

var toCopy = [1, 45, 25, 0];
var newCopy = toCopy;
//przypisujemy referencje, czyli zmieniajac jedna, zmieniamy tez druga

console.log("toCopy: " + toCopy);
console.log("newCopy: " + newCopy);

toCopy[2] = 1000;

console.log("toCopy: " + toCopy);
console.log("newCopy: " + newCopy);

console.log(newCopy == toCopy);
console.log(newCopy === toCopy);

console.log(newCopy == array1);
console.log(newCopy === array1);

//kolejkowanie funkcji

var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArray = array2.map((element) => {
    return element + 2;
})
.filter((element) => {
    return element % 2 === 0;
})
.reduce((acc, element, index) => {
    if(index % 2 === 0){
        acc[index] = element + 2;
    }
    else acc[index] = element;

    return acc;
}, [])

console.log("Kolejowanie: " + newArray);


// Zadania z tablicami

// Zadania 1
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];

// 1.1 Dodaj element 'Red Sea' na końcu talbicy 

seas.push('Red Sea');
document.write(`Zadanie 1.1: tablica seas: ${seas} <br/>`);

// 1.2 Dodaj element 'Mediterranean Sea' na początku talbicy

seas.unshift('Mediterranean Sea');
document.write(`Zadanie 1.2: tablica seas: ${seas} <br/>`);

// 1.3 Znajdź indeks 'Caribbean Sea'

seas.indexOf('Caribbean Sea');
document.write(`Zadanie 1.3: index 'Caribbean Sea': ${seas.indexOf('Caribbean Sea')} <br/>`);

// 1.4 Usuń 'Caribbean Sea' z tablicy

seas.splice(seas.indexOf('Caribbean Sea'), 1);
document.write(`Zadanie 1.4: tablica seas: ${seas} <br/>`);

// 1.5 Wyświetl długość tablicy

document.write(`Zadanie 1.5: dlugosc tablicy seas: ${seas.length} <br/>`);

// 1.6 Wyświetl wszystkie elementy w pętli for

document.write(`Zadanie 1.6: elementy tablicy:<br/>`);
seas.forEach((value) => {
    document.write(`- ${value} <br/>`);
})

//albo
document.write(`Zadanie 1.6: inna wersja kodu, elementy tablicy: <br/>`);
for(let i = 0; i < seas.length; i++){
    document.write(`- ${seas[i]} <br/>`);
}

// 1.7 Posortuj alfabetycznie

seas.sort();
document.write(`Zadanie 1.7: posortowana tablica seas: ${seas} <br/>`);

// 1.8 Usuń ostatni element

seas.pop();
document.write(`Zadanie 1.8: tablica seas: ${seas} <br/>`);

// 1.8 Usuń pierwszy element

seas.shift();
document.write(`Zadanie 1.9: tablica seas: ${seas} <br/>`);

// Zadania 2

// Poniżej jest tablica z tablicami z owocami (nazwa, cena, kolor).
// przykład "banana" - nazwa, 5, - cena, "yellow" - kolor
var fruits = [["banana", 5, "yellow"], ["apple", 3, "red"], ["mango", 7, "orange"], ["pear", 4, "green"], ["cherry", 10, "red"], ["orange", 5, "orange"]];

// 2.1  
// Wypisz w konsoli po kolei wszystkie owoce wraz z informacją o cenie.
// Wynik powinien wygladać następująco:
// "banana costs 5 pln"
// "apple costs 3 pln"
// "mango costs 7 pln"
// "pear costs 4 pln"
// "cherry costs 10 pln"
// "orange costs 5 pln"

document.write(`<br/> Zadanie 2.1: w konsoli <br/>`);
console.log("Zadanie 2.1:");
fruits.forEach(([name, price, color]) => {
    console.log(`${name} costs ${price} pln`);
});


// 2.2 
// Za pomocą funkji map stwórz nową tablicę (result22) składającą się wyłącznie z nazw owoców. Wynik wyświetl w konsoli
// Wynik powinien wygladać następująco:
// ["banana", "apple", "mango", "pear", "cherry", "orange"]

var result22 = fruits.map(([name, price, color]) => {
    return name;
});//tu zapisz wynik 

document.write("Zadanie 2.2: Tablica result22" + result22 + "<br>"); 



// 2.3 
// Za pomocą funkcji filter przefiltruj tablice tak by nowo powstała tablica zawierała tylko pomarańczowe owoce. Wynik zapisz do tablicy result23.
// Wynik powinien wygladać następująco:
// [["mango", 7, "orange"], ["orange", 5, "orange"]]

var result23 

// 2.4  
// Za pomocą funkcji filter przefiltruj tablice tak by nowo powstała tablica zawierała tylko nazwy pomarańczowowych owoców. Wynik zapisz do tablicy result24.
// Wynik powinien wygladać następująco:
// ["mango","orange"]

var result24 

// 2.5  
// Posortuj tablicę od najtańczych do najdroższych owoców. Wynik zapisz do tablicy result25.

var result25;

// 2.6 
// Używając funkcji reduce stwórz nową tablicę z czerwonymi owocami (tylko nazwy). Wynik zapisz do result26 
// Wynik powinien wygladać następująco:
// ["apple", "cherry"]

var result26;


document.write("Zadanie 2.3: " + result23 + "<br>"); 
document.write("Zadanie 2.4: " + result24+ "<br>"); 
document.write("Zadanie 2.5: " + result25+ "<br>"); 
document.write("Zadanie 2.6: " + result26+ "<br>"); 

// Zadania 3

var salary = [
    ["Jan", 24, 1800], //[imię, wiek, zarobki]
    ["Kasia", 30, 3000],
    ["Adam", 28, 4100],
    ["Klaudia", 31, 2900],
    ["Michalina", 20, 2000],
    ["Marek", 45, 4500],
    ["Jakoub", 50, 8000],
    ["Karol", 41, 2800],
];
 
// Nie zmieniając pierwotnej tablicy wykonaj poniższe polecenia.
 
// 3.1 Posortuj tablicę wg wieku, od najmłodszych do najstarszych.
 
var result31;
 
 
// 3.2 Wypisz imiona 3 ludzi którzy zarabiają najmniej.
 
var result32;
 
 
// 3.3 Stwórz nową tablicę ze zmienioną kolejnością wewnętrznych tablic (wiek, imie, zarobki)
 
var result33;
 
document.write("Wynik 3.1: " + result31 + "<br>"); 
document.write("Wynik 3.2: " + result32 + "<br>"); 
document.write("Wynik 3.3: " + result33 + "<br>"); 
 

// Zadania 4

var array = [23, 56, 6, 2, 678, 2, 5, 3, 9, 12, 7, 354, 3];

// Usuń z tablicy array1 powtarzające się elementy 

// 4.1 Korzytając z funkcji reduce() - nie modyfikując array

// 4.2 Korzytając z pętli for - usunąć bezpośrednio z tablicy array