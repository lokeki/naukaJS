//console.log(window); // jest najwyzej w hierarchii

function sayHello() {

    //window.message = "Czesc!" // to jest alternatywne do tego co na dole, jesli nie uzyjemy var itp, to zostanie przypisane globalnie do window
    message = "Czesc!"; // jesli nie uzyjemy var to ta zmienna jest globalna

    //alert(message);

    // funkcja confirm
    var con = confirm("Czy wyrazasz zgode?"); // zwraca true/false

    console.log(con);

    // prompt()
    var ans = prompt("Jak masz na imie", "Podaj swoje imie"); // okienko z miejscem do wpisania

    console.log(ans);

    window.myObject = {}; //do window przypisujemy referencje i te dane bd dostepne globalnie

}

sayHello();

console.log(message);