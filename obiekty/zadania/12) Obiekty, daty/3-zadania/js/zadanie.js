/*
Zadania - obiekty

Stwórz obiekt **book**, który będzie miał:

#### Właściwości:
- **users**
    która będzie tablicą użytkowników (na początku pusta)

#### Metody:
- **addUser(name, age, phone)**

    która doda to tablicy `users` nowy obiekt, który będzie miał klucze:
    name, age, phone z przekazanymi do tej funkcji danymi

- **showUsers()**

    która po odpaleniu wypisze w konsoli tekst:
    `Wszyscy użytkownicy w książce` a następnie w pętli wypisze wszystkich użytkowników

- **findByName(name)**

    która wypisze w konsoli pierwszego użytkownika, który ma szukane imię
    lub false jeżeli nie znajdzie.

- **findByPhone(phone)**

    która wypisze w konsoli pierwszego użytkownika, który ma szukany telefon
    lub false jeżeli nie znajdzie

- **getCount()**

    która wypisze ile jest użytkowników w tabeli

    */

    let book = {
        users: [],
        addUser: function(name, age, phone){
            this.users.push({name: name, age: age, phone: phone})
        },
        showUsers: function(){
            console.log(`Wszyscy użytkownicy w książce`);
            for(let el in this.users){
                console.log(this.users[el])
            }
        },
        findByName: function(name){
            let userWithName = this.users.filter((el) => el.name === name);
            userWithName.length > 0 ? console.log(userWithName[0]) : console.log('false') ;
        },
        findByPhone: function(phone){
            let userWithPhone = this.users.filter((el) => el.phone === phone);
            userWithPhone.length > 0 ? console.log(userWithPhone[0]) : console.log('false') ;
        },
        getCount: function(){
            console.log(this.users.length);
        }
    };

    book.addUser('Ania', 20, 12345679);
    book.addUser('Tom', 15, 789456123);

    book.showUsers();

    book.findByName('Ania');

    book.findByPhone(789456123);

    book.getCount();

