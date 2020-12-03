 //tablice asocjacyjne
 // Obiekty skladaja sie z properies(wlasciwosi) i methods(metody)
/*
 var person = {
     firstName: "Jan",
     lastName: "Kow",
     age: 32,
     sayHello: function(){
         console.log("Hi " + this.firstName );
     }
 };
*/
 /* 
typy prymitywne:
* String
* Number
* boolean
mają one metody i wlasciwosci
* null
* undefined
nie mają one metod i wlasciwosci

Obiekty:
* wszystko inne XD
 */

 //Tworzenie object literal (obiekt)

 var person = { 
     firstName: "Tomasz",
     "last-name": "Kowalski",
     age: 32
 };

 //odwolywanie się do wlasciwosci person
 console.log( person.firstName);

 //odwolywanie się do wlasciwosci person, jesli jest zapisany jako string
 //obiekt["nazwaproperies"]
 console.log(person["last-name"]);

 //dopisywanie properies w object
 // a dokladniej: dopisywanie do object key and value pairs
 person.job = 'programista';
 // to samo
 person["job"] = "programista";
 console.log(person);

 //usuwanie keys w object
 delete person.age;
 console.log(person);

 // przekazywanie obiektow przez referencje
 var person2 = person;
 
 person2.age = 23;
 console.log(person);
// poprzez referencje oznacza to, ze dzialamy na poprzedniej zmiennej w tym przykladzoe na person, czyli zmieniajac dane w person2, zmieniamy dane w person. (mają to samo miejsce w pamieci)

// jak dzialaja funkcje
var person3 = {
    firstName3: "Jan",
    lastName3: "Kowalski",
    sayHello: function(){
        console.log("Hej mam na imie " + this.firstName3);    
    },
    setFirstName: function(firstName){
        this.firstName3 = firstName;
    }
};

person3.sayHello();

var person4 = {
    firstName3: "Jan",
    lastName3: "Kowalski"
};

//porownywanie obiektow
//for in

//destrukturyzacja obiektu

const obiekt = {
    klucz1: 'wartosc',
    klucz2: 'wartosc',
    klucz3: 'wartosc',
    klucz4: {
        klucz5: 'wartosc'
    }
};

console.log(
obiekt.klucz1,nobiekt.klucz3, obiekt.klucz2)

const {klucz1, klucz3, klucz2, klucz4={klucz5}} = obiekt
console.log(klucz1, klucz3, klucz2)