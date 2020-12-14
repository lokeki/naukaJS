let btn = document.querySelector('#btn');

btn.addEventListener('click', function(e) {
    console.log(this);
    console.log(e.target); // tu jest to samo

    e.target.setAttribute('disabled', true);
});

document.body.addEventListener('click', function(e){
    console.log(this); // this kieruje na element na ktr zarejestrowalismy zdarzenie
    console.log(e.target);
})

