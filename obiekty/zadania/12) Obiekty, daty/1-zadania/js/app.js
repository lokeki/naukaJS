//zad1
const prod1 = {
  name: "prod1",
  price: 34,
  weight: 600
};
const prod2 = {
  name: "prod2",
  price: 3,
  weight: 50
};
console.log(`Produkt numer jeden to: ${prod1.name}
Produkt numer dwa to: ${prod1.name}
Produkty kosztują razem: ${prod1.price + prod2.price}
Produkty ważą razem: ${prod1.weight + prod2.weight}
`);

//zad2
const currentUser = {
  name: "name",
  surname: "surname",
  email: "email",
  www: "www",
  userType: "userType",
  show: function() {
    console.log("Imię: ", this.name);
    console.log("Nazwisko: ", this.surname);
  }
};

currentUser.show();

//ZAD3
const book = {
  title: "title",
  author: "author",
  showDetails: function() {
    console.log(this);
    for (let item in this) {
      console.log(item);
    }
  }
};
book.showDetails();
