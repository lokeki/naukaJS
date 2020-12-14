let body = document.body,
    btn = document.querySelector('#btn');

body.addEventListener('click', function(e){
    
    console.log('Kliknales w body');
});

btn.addEventListener('click', function(e){

    e.stopPropagation(); // powoduje ze odpalane jest tylko to zdarzenie, u rodzicow juz nie. Zapobiega temu, aby ten event byl propagowany wyzej, jest ono ciage odpalone, nawet przy innych zdarzeniach na tym elemencie

    e.stopImmediatePropagation(); // stopuje wywolywanie innych zdarzen na tym elemencie

    console.log('Kliknales w przycisk');
}); // rejestrujemy zdarzenie na dziecku i rodzicach jesli nie ma: e.stopPropagation();

btn.addEventListener('click', function(e){

    console.log('Znow kliknales w przycisk');
});

// nie wszytskie zdarzenia 'bombelkuja' do gory, np w form