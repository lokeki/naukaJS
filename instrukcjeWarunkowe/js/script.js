var firstName = "Maciej";

if(firstName !== ''){
    console.log("Cześć " + firstName);
} else{
    console.log("Hello");
}

var number = 20;

if(number < 30){

} else if(number > 10){ //js nie posiada konstrukcji else if

} else{

}

if(true)
    console.log("Jestem bez \"{}\"")


// skrócony zapis if (operator warunkowy)

var userName;

userName = firstName ? firstName : "Nieznajomy";
//do czego chcemy przypisać = warunek ? jeśli spełniony przypisujemy to : jeśli nie jst spełniony to to



//instrukcja warunkowa switch

var number = 4,
    word = "";

switch(number){
    case 1: 
        word = "jeden";
        break;
    case 2:
        word = "dwa";
        break;
    case 3:
        word = "trzy";
        break;
    default:
        word = "wartosc nieznana";
}

console.log(`Wartość to ${word}.`);
