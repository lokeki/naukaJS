let list1 = document.querySelector('#list1');

//niezbyt efektywne, bo za kazdym razem przegladarka musi to przetwarzac
/*
for(let i = 0; i <= 5; i++){

    var li = document.createElement('li');

    li.appendChild(document.createTextNode( `Nowy element listy ${i}`));

    list1.appendChild(li);
}
*/
//inny sposob

var dc = document.createDocumentFragment(); //zachowuje sie jak el html

for(let i = 0; i <= 5; i++){

    var li = document.createElement('li');

    li.appendChild(document.createTextNode( `Nowy element listy ${i}`));

    dc.appendChild(li);
}

list1.appendChild(dc); // zosatły dodane jednorazowo, jednak dc.appendChild(li) - document fragment wyczyści swoją zawartość po użyciu metody appendChild. Nie będzie do niego referencji!