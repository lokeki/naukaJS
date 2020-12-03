let a = 1;
let b = 7;

/*
if(b === 7 || a === 4){
    console.log(`b jest rowne ${b}, a jst rowne ${a}`);
}else if(b === 6){
    console.log(`b jest rowne ${b}`);
}else{
    console.log("Zadne z warunkow");
}
*/

//krotsze

if(b === 7 || a === 4)
    console.log(`b jest rowne ${b}, a jst rowne ${a}`);
else if(b === 6)
    console.log(`b jest rowne ${b}`);
else
    console.log("Zadne z warunkow");

//inny skrocony

const fn1 = () => {
    console.log(`b jest rowne ${b}, a jst rowne ${a}`);
    console.log("Jeej");
}

(b === 7 || a === 4) ? fn1() : console.log("Zadne z warunkow");

//switch

const value = "a" //prompt("wpisz literke:");
console.log(value)

const bA = 'b';

const fn2 = () =>{
    console.log('Wpisales wartosc b')
}

switch(value){
    case 'a' :
        console.log('Wpisales wartosc a');
        break;
    case bA :
        fn2();
        break;
    default:
        console.log('Nie ma znaku');

}

if(value === 'a'){
    console.log('Wpisales wartosc a');
}else if(value === bA){
    fn2();
}else{
    console.log('Nie ma znaku');
}

const obj={
    a:  console.log('Wpisales wartosc a'),
    b:  console.log('Wpisales wartosc b')
}

var nrOne = 20;
var nrTwo = 24;

(nrOne >= nrTwo) ? console.log(`wieksza liczba jest ${nrOne}`) : console.log(`wieksza liczba jest ${nrTwo}`);

// zwracanie wiekszej wartosci

let biggerNumber = (nrOne >= nrTwo) ? nrOne : nrTwo;
console.log(biggerNumber);


//dl hasla >= 10 i zawiera @ jst silne
//dl hasla >= 8 lub zawiera @ i dl hasla >=10 jst wystarczajce
//haslo za slabe

const checkPassword = (password) =>{
    if(password.length >= 12 && password.includes("@")){
        console.log("Haslo jst silne")
    }else if(password.length >= 8 || (password.includes("@") && password.length >= 10)){
        console.warn("Haslo jst wystarczajace");
    }else{
        console.error("Haslo jest slabe");
    }
  
}

checkPassword("qwerty");
checkPassword("qwerty@sss");
checkPassword("q232323jkkjn");
checkPassword("q232fedevcs@323jxsxsxaxsxkkjn");
