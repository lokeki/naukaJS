//dynamicznosc kodu

// tworzenie funkcji

var text = "Witaj";

sayHello();
// 1 rodzaj zapisu / deklaracja funkcji
function sayHello() {

    console.log(text);
    // wyswietli sie undefined, poniewaz zadziala hosting, czyli zmienna text zostanie wyniesiona na gore funkcji, a ze tam nie zostala okreslona jej wartosc to jest ustalona domysna undefined
    var text = "Czesc";

    console.log(text);
};

sayHello();

// 2 rodzaj zapisu / wyrazenie funkcyjne
var sayHello2 = function(){ //w sayHello2 przechowujemy referencje do tej funkcji

    console.log("Czesc");
}

/* roznica miedzy tymi dwoma
funkcje ktore nie sa przypisane do zmiennej, do funkcji przypisana jest nazwa(1 rodzaj zapisu), sa one wynoszone na sama gore zasiegu zmiennych (hoisting) mozemy z niej skorzystac zanim zostala zdefiniowana (jak na gorze)

z funkcji przypisanej do zmiennej juz tak nie mozna zrobic (2 rodzaj zapisu)
*/

// 3 rodzaj zapisu
var sayHello3 = function hello(){

    console.log(hello);

    console.log("No czesc");
};
// poza funkcja "hello()" nie zadziala, ten zapis sluzy do tego aby moc korzystac z funcji hello() wewnatrz jej samej

//zwracanie wartosci (jak jst to implementowane)
function sayHelloZ(){
    console.log("Hi");
    //jesli nic nie zwracamy(np. return), to zwroci undefined

    return " No witaj ";//zwracamy poprzez return
}

var hello = sayHelloZ(); //przypisujemy return
console.log(sayHelloZ() + "Maciej");

function makeArray(){

    var arr = [1, 2, 3];

    return arr;//return konczy dzialanie funkcji calkowicie
}

//w consoli można np po wpisaniu makeArray()[2] uzyc odrazu "[]" i odwolac sie do konkretnego obiektu

//parametry funkcji
//tworzymy funkcje kwadrat przekazanej funkcji
function square(num){ //dowolna liczba parametrow
    return num * num; // wykorzystujemy dane parametry w funkcji
}

function sum(a, b){ //nie musimy wpisywac wszystkich parametrow, jak ich nie bedzie zostanie podstwaione undefined
//jesli podany wiecej parametrow niz jest w funkcji to nie beda one brane pod uwage
//roznica miedzy parametrem a argumentem
//parametr jest w nawiasie przed wywolaniem funkcji, a argument w chwili podstawienia wartosci
    return a + b;
}

var firstName = "Tomasz"

//typy prymitywne sa wstawiane do funkcji poprzez kompiowanie a nie referencje

var person = {
    firstName: "Tomasz",
    lastName: "Kowalski"
};

function saySomething(obj){ 

    obj.firstName = "Piotr";
    /*jezeli pzekazujemy objekt i odwolujemy sie do niego ogolnie czyli:
    obj = {}; 
    to nie zmieniamy tam wartosci poza funkcja

    jesli jednak odwolamy sie konkretnie do wlasciwosci obiektu np:
    obj.firstName = "";
    to odwolujemy się poprzez referecje i zmieniamy jego wartosc poza funkcja
    */
    return "Witaj, " + obj.firstName + " " + obj.lastName;
}

console.log(saySomething(person));
console.log(firstName);

//zakres zmiennych
function init(){
    var firstNameZ = "Maciej";
    
    //funkacja tworzy nowy zakres zmiennych
    function saySomethingZ() {
    
        var lastNameZ = "Kowaslski"; //poza ta funkcja ta zmienna jest niedostepna
    
        console.log('Czesc, ' + firstNameZ + " " + lastNameZ); // ma dostep do tej zmiennej, bo sa w jednym zakresie zmiennych
    };
    
    // w instukcjach warunkowych, petle
    
    if(true){
        var age = 32; // jesli ta instukcja warunkowya sie spelni to ta zmienna bedzie dostepna ponizej, poza tym blokiem
        //sam blok nie tworzy scope, czyli zakresu zmiennych
    }
    
    //aby "ukryc" takie zmienne mozna je oplesc dodatkowa funkcja
    
    //garbage collector - inaczej mowiac odsmiecacz, mechanizm, ktr sam usuwa z pamieci niepotrzebne juz dane, np po wykonaniu funkcji usuwa stworzone z niej zmienne, do ktr i tak nie mamy dostepu
    
    //funkacja ma dostep do zmiennych tam gdzie zostala zdefiniowana a nie uruchamiana
    // jednak jesli funkcje przypiszemy do obiektu globalnego np 
    window.hello = saySomethingZ; //mowimy, ze w obiekcie window chcemy utworzyc sobie wlasciwosc, ktora bedzie kierowala na ta funkcje

}

init();

//closure, domkniecie funkcje maja dostep do "swoich zmiennych" i na nich dzialaja nie ma znaczenia gdzie zostanie ona wywolana

//zmienna aguments
//jest dostepna w kontekscie funkcji
function sum(num1, num2) {

    console.log(arguments);// poprzez arguments mozemy sie odwolac do przeslanych argumentow, przechowuje wszytskie przeslane argumenty

    /*arguments jest to obiekt tablicopodobny/array-like
    mozemy sie odwolac np do dlugosci poprzez arguments.length

    !! jednak nie jest to prawdziwa tablica dlatego nie mozemy uzywac wszystkich metod jak do tablicy !

    ale mozemy sie odwoluwac jak do tablicy np. do pierwszego argumentu, tzn: num1

        console.log(arguments[0]);

    mozemy tez nadpisywac te argunemty:

            arguments[0] = 10;
    */
    console.log("Przed nadpisaniem, arguments[0] = " + arguments[0]);
    arguments[0] = 10;
    console.log("Po nadpisaniu, arguments[0] = " + arguments[0]);
    console.log(arguments.length);
    /*
        Do czego?
        np czy zostaly podane te parametry, ktr chcielismy np:
        w sum chcemy miec tylko dwie liczby i je sumowac 
    */
   if(arguments.length == 2 && typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    } else {
        return "Podaj poprawne argumenty";
    }

}
console.log(sum(2, 5));

function sum2(){

    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total;
}

console.log("script.js sum2: " + sum2(2, 3, 4, 5, 6));

// Funkcje anonimowe
(function() {
    var arr = [1, 45, 22, 31, 3];

    arr.sort((a, b) => a - b); // jest tu funkcja anonimowa, tzn ze nie ma zadnej nazwy
    //przydaje sie gdy raz chcemy wykorzystac jakas funkcjie
    document.write(arr);
    
    
    //Przekazywanie funkcji 
    
    function sayHelloF(text, getName) {
        return text + getName()
    }
    
    document.write("<br/>Funkcja sayHelloF: " + sayHelloF("Witaj ", () => "Piotr")); //przekazujemy referencje do getName w funkcji sayHelloF i potem jaj wywolujemy poprzez getName()
    
})();//to jest funkcja self-invoking anonymous function, czyli samowywolujaca sie funkcja anonimowa 
//teraz zmienne dostepne w funkcji na gorze nie sa dostepne globalnie
//nawiasy () oplatajace cala funkcje sprawiaja ze jest ona wyrazeniem, a nawiasy na koncu (); wywoluja funkcje

//niektore wbudowane globalne funcje 

//eval() nie uzywamy, jesli naprawde nie musimy
//przyjmuje text, ktr jst kodem
//eval('alert("Witaj")');

//isFinite zwraca true, false sprawdza czy liczba jst liczba skonczona
document.write("<br/>" + isFinite(15));

//isNaN() czy jest NaN
document.write("<br/>" + isNaN(2 * undefined));

//parseFloat() pozwala ze string zrobic liczbe zmiennoprzecinkowa
document.write("<br/>" +  typeof parseFloat("20.4zl"));//wycina litery

//parseInt() jak wyzej tylko na calkowite
document.write("<br/>" +  typeof parseInt("20.4zl"));

//alert() funkcja dostepna poprzez obiektowy model dokumentu
//alert("Witaj");







