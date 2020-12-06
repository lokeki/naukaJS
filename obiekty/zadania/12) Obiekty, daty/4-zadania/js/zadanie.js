/*
Zadania - obiekty

 Zadanie 1
Stwórz obiekt o nazwie **tableGenerator**.
Obiekt ten powinien mieć tylko metody:

1. **randomNumber(min, max)**

    zwraca losową liczbę z przedziału `min`-`max`

2. **generateIncTable(lng)**

    zwraca nową tablicę o długości `lng` z liczbami od 0 do lng

3. **generateRandomTable(lng, min, max)**

    zwraca nową tablice o długości `lng` z losowymi liczbami z przedziału `min`-`max`

4. **generateTableFromText(str)**

    generuje nową tablicę ze słowami z tekstu `str`
    Jeżeli przekazany tekst nie jest tekstem, wtedy powinna być zwrócona pusta tablica
    Wykorzystaj odpowiednią metodę dla stringów (szukaj na "mdn js string")

5. **getMaxFromTable(arr)**

    zwraca największą liczbę z tablicy `arr`

6. **getMinFromTable(arr)**

    zwraca najmniejszą liczbę z tablicy `arr`

7. **delete(arr, index)**
    usuwa z tablicy `arr` element o indexie `index`
*/

let tableGenerator = {
    randomNumber: function(min, max){
        return Math.floor(Math.random() * max - min + 1) + min;
    },
    generateIncTable: function(lng){
        let tab = [];
        for(let i = 0; i < lng; i++){
            tab.push(i);
        }
        return tab;
    },
    generateRandomTable: function(lng, min, max){
        let tab = [];
        for(let i = 0; i < lng; i++){
            tab.push(this.randomNumber(min, max));
        }
        return tab;
    },
    generateTableFromText: function(str){
        if(typeof(str) === 'string'){
            return str.split(' ');
        }else{
            return [];
        } 
    },
    getMaxFromTable: function(arr){
        console.log(arr);
        return arr.sort((a, b) => a - b)[arr.length - 1];
    },
    getMinFromTable: function(arr){},
    delete: function(arr, index){}
};

console.log(tableGenerator.randomNumber(1, 5));
console.log(tableGenerator.generateIncTable(6));
console.log(tableGenerator.generateRandomTable(5, 1, 6))
console.log(tableGenerator.generateTableFromText('koko lolo'));
console.log(tableGenerator.getMaxFromTable((tableGenerator.generateRandomTable(5, 1, 20))));