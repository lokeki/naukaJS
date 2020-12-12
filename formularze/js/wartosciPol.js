const form = document.querySelector('#myForm');

console.log(form.firstName.value); //odczytujemy wartosc z formularza


console.log(form.firstName.getAttribute('value')); //odczytujemy wartosc atrybutu value
// albo poprzez
console.log(form.firstName.defaulValue)


form.lastName.value = 'Kowalski';

console.log(form.subject.value);

form.subject.length = 2;

console.log(form.remember.checked);

