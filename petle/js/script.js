//petla while

var number = 10;

while(number > 0){
    console.log(number--);
}

var secretNumber = 2;
/*
while(prompt("Podaj liczbę") != secretNumber){//jest dostępna jako funkcja w obiektowym modelu przegladarce, możemy o cos zapytac. i uzyskac odpowiedć, np: Podaj liczbę i oczekuje na odpowiedz użytkownika

    alert("Nie trafiłeś!");

} 

alert("Brawo!");

*/

//petla do while

number = 20;

do{
    console.log(number);
    number++; 
}while(number > 30);

//petla for

for(let i = 0; i <= 10; i++){
    console.log(i);
}

//petla for in służy do iterowania po wlasciwosciach obiektow

//tworzenie obiektu
var person = {
    imie: "Maciej",
    nazwisko: "Kowalski",
    wiek: 30
};

var person2 = {

};

for(var key in person){ // for( key - nazwa zmiennej, ktr sobie tworzymy, przechodzi po nazwach zmiennej(kluczach, wlasciwosciach) in person - nazwa obiektu)

    console.log(key + ": " + person[key]);// person[key] przechodzenie po kluczch 

}

//przechodzimy i wszytsko kopiujemy
for(var key in person){
    person2[key] = person[key];
}

console.log(person2);

//kontynuacja pętli (continue)

for(var i = 0; i <= 20; i++){

    if( (i % 2) === 0){
        continue;
    }

    console.log(i);
    
}

//przerywanie pętli (break)

var  numbers = [2, 3, 6, 20, 0, 52, 11],
    containsZero = false; // czy ma zero

for(var i = 0; i < numbers.length; i++){

    if(numbers[i] === 0){
        console.log("Mamy zero");
        containsZero = true;
        break;
    }
}

//for...in obiekty i tablice
var person = {
    fname: "John",
    lname: "Doe", 
    age: 25
};
var text = "";
var x;
for (x in person){
    text += person[x];
}
console.log(text);

//for...of dziala dla tablic

var car = ["BMW", "Volvo", "Mini"];
var x;
for(x of car){
    document.write(x + "<br/>");
}

//for w for
var array = [
    ['apple', 'orange', 'pear'],
    ['carrots', 'beans', 'peas'],
    ['cookies', 'cake', 'muffins', 'pie']
]

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
        console.log(array[i][j]);
    }
}
