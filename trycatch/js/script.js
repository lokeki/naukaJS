function searchDB() {


    console.log("Otwieram polaczenie");

    db.search(); //zakladamy ze obieky db jest utworzony gdzies wczesniej i ze chcemy przeszukac jaks baze danych

    console.log("Zamykam polaczenie");
}

try { // jesli w try wyskoczy blad to w catch go przechwycimy
    searchDB();
}catch(e) {
    console.log(e);
    console.dir(e);
}finally{ //zawsze sie wykona 
    console.log("Zamykam polaczenie");
}

//zglaszanie wlasnych bledow

function getData(type) {

    if(!type){
        //return null;
        throw new Error("Nieprawidlowy typ.");
    }
    return {
        firstName: "Jan", 
        lastName: "Kowalski"
    };
}

function searchDB2() {


    console.log("Otwieram polaczenie 2 ");

    console.log("Pobieram dane");

    var data = getData(); 

    if(data === null){
        /*
        // 1 zapis
        throw {
            message: "Brak danych" //wpisujemy wartosci ktr zostana odczytane 
        }; // zglaszamy blad i zostanie on zlapany
        */

        // 2 zapis
        throw new Error("Brak danych");

    }

    console.log("Zamykam polaczenie");
}

try { 
    searchDB2();
} catch(e) {
    console.log("Wystapil blad: " + e.message);
    console.dir(e);
} finally { 
    console.log("Zamykam polaczenie");
}




/*try{
    console.log('a');
    x = x + 3;
    console.log('b');
}
catch(error){
    console.log('c', {error}, error)
}
finally{
    console.log('d')
}

function getMonthName(mo){
    mo -=1;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    if(months[mo]){ //!! zamiana na boolean
        return months[mo];
    }else{
        throw 'InvalidMonthNumber'
    }
}

try{
    const month1 = getMonthName(10);
    console.log(month1);
    const month2 = getMonthName(1000);
    console.log(month2);
}
catch (exception){
    console.log(exception);
    console.log('ziomus, nie znam miesiaca');
}*/

