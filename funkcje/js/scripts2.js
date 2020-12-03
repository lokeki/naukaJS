//console.log(firstNameZ);
//widzi zmienna z script.js
//w html po kolei odpala pliki js i zmienne, ktr byly dostepne wyzej i tu beda dostepne

var firstNameZ = "Karol";

//hello();

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

function wordDescription(word, desc) {
    return word + " - " + desc;
};

console.log(wordDescription('stol', 'okragly'));

//silnia
function factorial(num) {
    //moje
    let result = num;
    for(let i = num - 1; i > 0; i--){
        result *= i;
    }
    return result;
    /*
    inne
    for(let j = 1; j <= num; i++){
        result *= i;
    }
    return result;
    */
}

console.log(factorial(3));

//podstawa do potegi
function pow(base, exp) {
    console.log(base ** exp);
    return base ** exp;
    // z for
    let result = base;
    for(let i = exp; i > 1; i--){
        result *= base;
    }
    return result;

}

console.log(pow(5, 5)); 
//const base = Number(prompt('Podaj podstawowe potegi')); //zmiana na liczbe
//const exp = parseInt(prompt('Podaj wykladnik potegi'));// zmiana na liczbe
//pow(base, exp);

//dwumian Newtona n!/k! * (n - k)!
function binominal(n, k){
    let result = factorial(n)/(factorial(k) * factorial(n-k));
    console.log(result);
    return result;
}

binominal(5, 3);

//zamiana elementow w tablicy
function change(tab, ind1, ind2){
    //moje
    [tab[ind1], tab[ind2]] = [tab[ind2], tab[ind1]];
    return tab;
    //inne
    var temp = tab[ind1];
    tab[ind1] = tab[ind2];
    tab[ind2] = temp;
    return tab;

}

const tab = ['ab', 'cd', 'ef', 'gh', 'ij']
console.log(change(tab, 1, 2));


/*hoisting
console.log({x});
console.log({a});
console.log({b});

var x = 1;
const a = 10;
let b = 2;
*/

//funkcja rekurencyjna
function odliczanie(i){
    console.log('Wypisz ' + i);
    if(i > 0){
        odliczanie(--i);
    }
}

odliczanie(10);