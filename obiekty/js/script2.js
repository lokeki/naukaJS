//kopiowanie obietkow

const a = { marka: "Skoda"};
const b = Object.assign({}, a); //kopiujemy a do b za pomoca Object.assign()

b.marka = "Opel"; // zmieniamy wartosc w b, ale nie zmieniamy wartosci w a

//Obiekt Date
var czas = new Date()

czas.getTime() //zwraca aktualny czas

//przyklady/cwiczenia

var kubek = {
    kolor: "Niebieski"
}

console.log(kubek)

kubek.uchwyt = false;
console.log(kubek)

kubek["uchwyt"] = true;
console.log(kubek)

const zmienna = kubek.kolor;
zmienna + " bardzo"
console.log(kubek)

var kubek2 = {
    kolor: 'niebieski',
    zawartosc: {
        nazwa: 'kawa',
        rodzaj: 'czarna'
    },
    podajNazwe: function() {
        console.log('jestem kubkiem koloru ' + this.kolor)
    }
}

console.log(kubek2);
kubek2.podajNazwe();

var Kubek = function(k, u) {
    this.kolor = k;
    this.uchwyt = u;
}

var kubek2 = new Kubek('niebieski', false);

const Kubek3 = (k, u) => ({
    kolor : k, uchwyt: u
})

const kolejnyKubek = Kubek3('czerwony', false)

console.log(kolejnyKubek)

const string = new String('javascript')
console.log(string)

const string1 = 'javastring'

console.log(string === string1)
console.log(string == string1)

var wyplaty = {
    Jan: 100,
    Andrzej: 120,
    Zofia: 250
}
var sumaWyplat = 0;
var ilosc = 0;

for(var osoba in wyplaty){
    console.log(osoba);
    if(osoba === "Andrzej"){
        wyplaty[osoba] = 140;
    }
    if(osoba === "Jan"){
        wyplaty[osoba] = 14;
    }
    sumaWyplat += wyplaty[osoba];
    ilosc++;
}

var liczbaOsob = Object.keys(wyplaty).length

const sredniaWyplata2 = Math.round(sumaWyplat / liczbaOsob)


console.log({sumaWyplat, wyplaty})

const sredniaWyplata = (sumaWyplat / ilosc).toFixed(2)
 
console.log({sumaWyplat, wyplaty, ilosc, sredniaWyplata})


