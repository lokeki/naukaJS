//console.log(firstNameZ);
//widzi zmienna z script.js
//w html po kolei odpala pliki js i zmienne, ktr byly dostepne wyzej i tu beda dostepne

var firstNameZ = "Karol";

hello();

function superSum(...args){
    console.log(args);
}

superSum(1, 2, 3, 4, 50, 100, 10);

const nr = 5;

function functionName1(nr) {
    const result = nr * nr;
    return result;
    
}

console.log(functionName1(10));

// funkcja strzalkowa jest tylko jeden parametr
const resultOfFunction2 = () => {nr * nr};

//tak tez mozna, zaoszczedzanie znakow
const resultOfFunction3 = _ => {nr * nr};

//obiekt Math
console.log(Math)
//metoda obiektu Math
console.log(Math.sin) // powie ze to jst funkcja
//wywolanie metody obiektu Math
console.log(Math.sin())


function print(name, status) {
    console.log(name + " jest " + status);
}
print();// undefined jest undefined
print("Joe");// Joe jest undefined
print("Joe", "wysoki");// Joe jest wysoki


function print2(name = "Joe", status = "wysoki") {
    console.log(arguments);
    console.log(name + " jest " + status);
}
print2();//  Joe jest wysoki
print2("Karol");// Karol jest wysoki
print2("Karol", "smieszny");// Karol jest smieszny
print2(undefined,"smiesznyy");//  musi byc pierwszy podany

//obiekt parametrem, wartosci domyslne
function print3({name = "Joe", status = "wysoki"}) {
    console.log(name + " jest " + status);
}

function print4({name, status}) {
    console.log(arguments);
    console.log(name + " jest " + status);
}

print4({name: "Adam", status: "niski"}); // przesylanie argumentow poprzez klucze

const params = {name: "Kuba", status: "gruby"};
print4(params);


function sumByReduce(...param) { //zamieniamy parametry na tablice
    //jesli uzywamy funcji jak ponizej nie uzywamy nawiasow {}, ale jesli chcemy skorzystac z {} to musimy wstawic return
    const result = param.reduce((a,b) => a + b);
    return result;
}

const mySum = sumByReduce(1,2,3,4,5,6,7);
console.log(mySum);


//TODO collback 