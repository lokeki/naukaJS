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

//zadania

//1.1
//wyswietlanie parzystej i nieparzystej
function logNumber(num){
    for( let i = 0; i <= num; i++){
        i % 2 ? console.log("nieparzysta: " + i) : console.log("parzysta: " + i)
    }
}

logNumber(20);


/*w konsoli tabliczka mnozenia
  
  1 2 3 4 5
  2 4 6 8 10
  3
  4
  5
*/

function Mn(num1, num2){
    for(let i = 0; i < num1; i ++){
        for(let j = 1; j < num2; j++){

        }
    }
}

for(let i = 1; i <= 5; i ++){
    let row = '';

    for(let j = 1; j <= 5; j++){
        row += (i * j).toString().padStart(4, ' ')
    }
    console.log(row);
}