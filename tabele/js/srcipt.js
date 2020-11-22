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