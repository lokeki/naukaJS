let form = document.querySelector('#myForm'),
    link = document.querySelector('#showMessage');

form.addEventListener('submit', function(e){

    if(!form.firstName.value){
        e.preventDefault();
        alert('Wpisz imie')
    }
});

form.querySelector('#firstName').addEventListener('keypress', function(e){

    console.log(String.fromCharCode(e.charCode)); // poprzez str zamieniamy kod na str
    console.log(e)

    if(String.fromCharCode(e.charCode) === 'a'){
        e.preventDefault(); // niepozwalamy wpisac literki 
    }
});

link.onclick = function(e){

    e.preventDefault();

    let message = document.querySelector(e.target.hash);

    message.style.display = 'block';

    return false;
};