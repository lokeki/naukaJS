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

