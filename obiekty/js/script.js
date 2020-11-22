 //tablice asocjacyjne
 // Obiekty składaja sie z properies(wlasciwosi) i methods(metody)
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
mają one metody i wlaściwości
* null
* undefined
nie mają one metod i wlaściwości

Obiekty:
* wszystko inne XD
 */

 //Tworzenie object literal (obiekt)

 var person = { 
     firstName: "Tomasz",
     "last-name": "Kowalski",
     age: 32
 };

 //odwoływanie się do wlasciwosci person
 console.log( person.firstName);

 //odwoływanie się do wlasciwosci person, jeśli jest zapisany jako string
 //obiekt["nazwaproperies"]
 console.log(person["last-name"]);

 //dopisywanie properies w object
 // a dokładniej: dopisywanie do object key and value pairs
 person.job = 'programista';
 // to samo
 person["job"] = "programista";
 console.log(person);

 //usówanie keys w object
 delete person.age;
 console.log(person);

 // przekazywanie obiektów przez referencje
 var person2 = person;
 
 person2.age = 23;
 console.log(person);
// poprzez referencje oznacza to, że działamy na poprzedniej zmiennej w tym przykładzoe na person, czyli zmieniajac dane w person2, zmieniamy dane w person. (mają to samo miejsce w pamieci)

// jak działają funkcje
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

//porównywanie obiektów
//for in