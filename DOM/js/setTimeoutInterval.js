// setTimeout

var timeout = setTimeout(function() {
    console.log("Witaj po pieciu sekundach!");
}, 5000); // setTime(funkcja, czasWMilisekundach) wykona funkcje po podanym czasie(jednokrotnie)

clearTimeout(timeout); // resetujemy

// setInterval
//pozwala wykonac funkcje co jakis czas(w interwalach)

var counter = 0,
    clock = null;

function tick(){

    if(counter <= 5){
        console.log(counter++);
    }else{
        clearInterval(clock); //czyscimy
    }

}

//clock = setInterval(tick, 1000);



// zastepowanie setInterval setTimeout

counter = 0;

function tock() {

    if(counter <= 5){
        console.log(counter++);
        setTimeout(tock, 1000);
    }
}

tock();

/*
czemu jest to lepsze rozwiazanie:
teoretycznie mozna zapchac kolejke jesli w funkcji bd ciezkie rzeczy, a my poprzez setInterval bedziemy ciagle dokladac

przy setTimeout najpierw zostanie wykonany kod, a pozniej zosatnie znow wywolany

*/