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
arr2.push("Marta");
console.log(arr2);
console.log(arr2.length);

//dodawanie na poczatek tablicy, wszytskie inne przesuwając w prawo
arr2.unshift("Ania");
console.log(arr2);
console.log(arr2.length);

//Usuwanie elementow z tablicy

// length w zazwyczaj jest tylko do odczytu (read-only), ale wlasciwosc ta w tablicach jest mozliwa do zmian
arr2.length = 2;
console.log(arr2);