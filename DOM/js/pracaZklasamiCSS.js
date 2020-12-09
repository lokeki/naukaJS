const link = document.querySelector(".link");

//link.className="red"; //nadpisze caly atrybut


link.classList.add('red', 'green'); // dodajemy kolejna klase, mozna kilka po przecinku

link.classList.remove('red'); // usuwamy podana klase

link.classList.toggle('green'); // jesli nie ma podanej klasy, to ja stworzy, a jak jest to usunie

link.classList.contains('red'); // zwraca true/false sprawdza czy podana klasa jest przypisana 