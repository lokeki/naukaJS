//Obiekt String
(function(){
    
    let n = "Ania";
    
    console.log(typeof(n));
    
    //inny sposob tworzenia stringa
    
    let n1 = new String("Ania"); //String jest to funkcja konstruktora, zwraca referencje do obiektu:
    console.log(typeof(n1));
    //nie powinnismy z niego korzystac, stringi zapisane do zmiennej bez "new" maja pewne wlasciwoscii metody
    
    console.log(n.length);// jesli bedziemy chcieli uzyc motod, czy wlasciwosci to js w tle uzyje new, ale po wykonaniu funkcji wraca on z powrotem do typu prymitywnego
    
    n.myValue = 20; // stworzy obiekt i doda wlasnosc, ale po wykonaniu zniknie i nie bedziemy mieli do niej dostepu
    
    let n2 = String(32);// za pomoica funkcji string mozemy konwertowac inne wartosci do stringa(zwraca wartosc prymitywna)
    console.log(typeof(n2));
    
    //metody na stringach
    
    //length
    console.log(n.length);
    
    //n[0] odwolywanie sie do poszczegolnych liter
    console.log(n[0]);
    
    //charAt() mowimy z ktorej pozycji chcemy pobrac znak
    console.log(n.charAt(1));
    
    //indexOf("cos") //czy w danym ciagu znajduje sie dany ciag, zwraca index, jesli nie ma zwraca -1
    console.log(n.indexOf("nia")); 
    
    //replace() zamiana pewnych znakow na inne, orginalny string nie ulegl zmianie
    console.log(n.replace("nia", "nna"));
    console.log(n);
    
    //slice() wycinamy fragment stringa, orginalny string nie ulegl zmianie
    console.log(n.slice(0, 1));
    console.log(n);
    
    //substr(indexOdKtrZaczynamy, iloscZnakow) 
    console.log(n.substr(0, 1));
    console.log(n);
    
    //split() //zwraca tablice, w nawiasie podajemy jaki znak rozdziela stringa
    console.log(n.split(""));
    console.log(n);
    
    //toLowerCase() zamienia wszystkie znaki na male 
    console.log(n.toLowerCase());
    console.log(n);
    
    //toUpperCase() zamienia wszystkie znaki na duze
    console.log(n.toUpperCase());
    console.log(n);


})/*()*/;

//Number
(function(){

    // tak jak w string jest "w locie" konwertowana do stringa
    let num = 255;

    let num2 = new Number("23");

    let num3 = Number("23zl"); //NaN nie usuwa liter

    console.log(typeof num3);
    console.log(num3);

    //metody klasy Number(konstruktora)

    //maksymana wartosc numeryczna
    console.log(Number.MAX_VALUE);

    //minimalna wartosc numeryczna
    console.log(Number.MIN_VALUE);

    //referencja do NaN
    console.log(Number.NaN);

    //-Infinity
    console.log(Number.NEGATIVE_INFINITY);

    //Infinity
    console.log(Number.POSITIVE_INFINITY);

    //metody zmiennej number

    //toString()
    console.log(num.toString(16)); //konwertuje wartosc zmiennej na system przekazany w toString() i zwraca stringa z ta zamiana

    //toFixed() mowimy ile ma btc miejsc po przecinku
    console.log(num.toFixed(2));


})/*()*/;

//Boolean
(function(){

    let b = false;

    let b2 = new Boolean([1, 2]);

    let b3 = Boolean([1, 2]);//konwertowanie tez

    //metody do b2
    console.log(b2.valueOf()); // zwraca prymitywna wartosc

})/*()*/;


//Array
(function(){

    //let arr = [1, 2];
    //to samo, jesli mamy w nawiasie wiecej niz jeden argument
    //let arr2 = new Array(1, 2);
    //to samo
    //let arr2 = Array(1, 2);


    //jednak juz w takim zapisie jest roznica
    let arr = [10]; // tworzy tabice [10]
    
    let arr2 = new Array(10); //tworzy tablice z tylma miuiejscami co w nawiasie, ale sa one puste (undefined)


    
})/*()*/;

//Function to jest obiekt
(function(){

    //konstruktor funkcji

    /* glownie zamiana tekstu na funkcje

    !!!!!! niebezpieczne !!!!!!

    */

    var f = new Function("firstName", "lastName", "return firstName + ' ' + lastName;");// jako ostatnie cialo funkcji

    console.log(f("Jan", "Kowalski"))

    function f2(firstName2, lastName2){

        arguments.callee.counter = arguments.callee.counter ? arguments.callee.counter : 1 // kieruje na funkcje, ale nie dziala wszedzie

    

        return firstName2 + ' ' + lastName2 + ", funkcja wywolana po raz: " + arguments.callee.counter++;
    }

    //f2.counter = 0;//dopisujemy wlasciwosc

    console.log(f2.length); //ilosc argumentow

    
})/*()*/;

//Math

(()=>{

    console.log(Math.abs(-22)); //zwraca wartosc absolutna

    console.log(Math.round(22.5234)); // zwykle zaokraglenie jak w matematyce

    console.log(Math.ceil(22.02)); // zaokragla w gore (sufit)

    console.log(Math.floor(42.89)); //zaokragle w dol (podloga)

    console.log(Math.max(3, 5, 1, 6, 0)); // zwraca najwieksza

    console.log(Math.min(33, 123, 5, 10)); // zwraca najmniejsza

    console.log(Math.round(Math.random() * 10)); // round() zwraca losowa liczbe z przedzialu 0-1, tutaj zaokraglemy jeszcze liczbe * 10

})();

//Date

var d = new Date(); // zwraca obiekt data, zalezy co jest zawarte w systemie
// jesli uzywamy new mozemy wtedy podac dodatkowe parametry w nawiasie, bez new tez zwroci date, ale wtedy parametry w nawiasie zostana zignorowane

var d2 = new Date(12131323); // w nawiasie sekundy, od roku 1970

var d3 = new Date(2015, 0); // ustawiamy konkretna date
//new Date(rok, miesiac, dzien, h, min, s )
//miesiace sa indeksowane od 0

// metody

console.log(d3.getFullYear()); // rok (number)

console.log(d3.getMonth()); // miesiac

console.log(d3.getDate()); // dzien

console.log(d3.getHours()); // godzina

console.log(d3.getMinutes()); // minuty

console.log(d3.getMilliseconds()); // milisekundy

console.log(d3.getDay()); // dzien tygodnia (normalnie)

console.log(d3.getTime()); // sekundy od 1970

// jak chcemy zmienic to stotujemy set..()

console.log(d3.toString()); // zwraca stringa

console.log(d3.toLocaleString()); 

// formatowanie

console.log(d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear());



//RegExp

//var regex = /a+/gi; // wszytskie ktr maja przynajmniej jedna literke a, dzialajac globalnie

var regex = new RegExp('a+', 'ig'); // tak jak u gory

var n = "ania";

console.log(n.replace(regex, 'p'));

console.log(regex.test('kojelka')); // jesli jest a to true


