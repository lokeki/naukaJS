var btn2 = document.querySelector("#btn2"),
    btn3 = document.querySelector("#btn3");

function sayHello(){
    alert("Hej!");
}

// Dodawanie zdarzen

btn2.onclick = sayHello; // w taki sposob mozemy przypisac tylko jedno zdarzenie



btn3.addEventListener("click", sayHello, false); // addEventListener(typZdarzeniaJakieChcemyObsluzyc, referencjaDoFn, true/false)
btn3.addEventListener('click', function(){
    alert('Witaj!');
}) // tym sposobem mozemy przypisac kilka zdarzen i wszytskie sie wykonaja


// Usowanie zdarzen

btn2.onclick = null; // tu tak wystarczy w addEventsLisener nie

btn3.removeEventListener('click', sayHello, false); // aby usunac w taki sposob, musimy miec referencje do funkcji