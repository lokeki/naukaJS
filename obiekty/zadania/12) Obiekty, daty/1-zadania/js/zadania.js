
/*Zadania - obiekty

/*
Zadanie 1

Stwórz 2 obiekty produktów `prod1` i `prod2`, gdzie każdy z nich będzie miał właściwości: `name`, `price`, `weight`.

Wypisz oba obiekty w konsoli.
Wypisz w konsoli teksty:

```
Produkt numer jeden to: ...
Produkt numer dwa to: ...
Produkty kosztują razem: ...
Produkty ważą razem: ...
```

Gdzie pod zmienne podstaw odpowiednie dane.
*/

const Prod = (name, price, weight) =>({
    name: name,
    price: price,
    weight: weight
})

let prod1 = Prod('Kubek', 54, 0.5);
let prod2 = Prod('Talerz', 10, 1);

console.log(`Produkt numer jeden to: ${prod1.name}`);
console.log(`Produkt numer dwa to: ${prod2.name}`);
console.log('Produkty kosztują razem: ' + (prod1.price + prod2.price));
console.log('Produkty ważą razem:: ' + (prod1.weight + prod2.weight));


/*
 Zadanie 2

Stwórz obiekt **currentUser**. Obiekt niech ma właściwości:
`name`, `surname`, `email`, `www`, `userType`,

oraz metodę `show()`, która wypisze wszystkie te właściwości w konsoli.

Wypisywany tekst powinien być ładnie sformatowany np.:

```
console.log("Imię: ", ....);
console.log("Nazwisko: ", ....);
```

Wywołaj metodę tego obiektu.
*/

var currentUser = {
    name: 'Ania',
    surname: 'Kowalska',
    email: 'nininini@o2.pl',
    www: 'www',
    userType: 'userType',
    show: function(){
        console.log(`
        Imię: ${this.name}
        Nazwisko: ${this.surname}
        Email: ${this.email}
        www: ${this.www}
        userType: ${this.userType}
        `);
    }
}

currentUser.show();

/*
 Zadanie 3

Stwórz obiekt book, który będzie miał właściwości:
`title`, `author`, `pageCount`, `publisher`.

oraz metodę: `showDetails()`, która zrobi pętlę po tym obiekcie wypisując wszystkie
jego klucze oraz ich wartości.
*/

let book = {
    title: 'title',
    author: 'author',
    pageCount: 'pageCount',
    publisher: 'publisher',
    showDetails: function() {
        console.log(this);
        for(let el in this){
            console.log(el, this[el])
        }
    }
}

book.showDetails();