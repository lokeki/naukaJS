var $zmienna = 5;
console.log($zmienna);

//Tworzenie zmiennych
/* kom. blokowy */

var imie = "Jan", 
    nazwisko = "Kowalski";

// zmienna bez typu, odnosi się globalnie
// wiek = "23";

// typeof sprawdza typ i zwraca typ w string

//"String"
var firstName = "Ania";
var lastName = "Kowalska";

var bookTitle = "\"Władca pierścieni\""; // \ wekslesz ucieczka

var multiLine = "Linijka pierwsza\nlinikja druga\n\ttrzecia linijka"; /* znaki ucieczki:
 \n - nowa linia 
 \t - tabulator
 */

//Number
var number = 20;
var prace = 20.5;

//Infinity - nieskonczonosc
//-Infinity
//NaN - not a number 

//boolean
var isLoggedIn = false;

if(isLoggedIn){
    console.log("Zalogowano");
} else {
    console.log("Nie zalogowano");
}

/* Wartości fałszywe:
    - false
    - 0
    - ""
    - null
    - undefined
    - NaN
*/

// null & undefined
var yourName = null; // wartosc pusta typeof zwraca object

//object
var person = {
    name: null // null przypisujemy, kiedy chcemy powiedziec że coś istnieje (ale nie ma nic przypisane) bo zwraca object a nie undefined
};

/* różnica między null a undefined
    null - wartość jst ustawiona ale jest pusta
    undefined - wartość nigdy nie została ustawiona
*/

// operatory arytmetyczne
var n1 = 4;
var n2 = 2;

//Dodawanie
var res = n1 + n2;

// Konkatenacja
var res2 = n1 + "5";

//Odejmowanie
var res3 = n1 - n2;

//Mnozenie
var res4 = n1 * n2;
var res5 = n1 * "2";

//Dzielenie
var res6 = n1 / n2;

//Modulo
var res7 = n1 % n2;

//Potega
var res8 = n1 ** n2;

//Kolejnosc działań jak na matematyce

//Przypisywanie z np dodaniem
n1 += n2;

//let a var let jest blokowy

var liczba = 123;
{
    let liczba = 100;
    console.log(liczba);
}

console.log(liczba)

//rzutowanie typów
var slowo = "słowo";
var prawda = true;
var falsz = false;

console.log(slowo + prawda);
console.log(liczba + prawda);
console.log(liczba + falsz);

console.log(prawda.toString()); // rzutowanie na stringa


"use strict" // sprawdza dokładnie kod js przed łąmaniem zasad js

// hoisting wynoszenie deklaracji na samą górę, czyli najpierw możemy przypisać wartość zmiennej a później ją zadeklarować
abc = "ABC"

var abc;

// wiele zmiennych
var a = b = c = 15;
console.log(a, b, c);