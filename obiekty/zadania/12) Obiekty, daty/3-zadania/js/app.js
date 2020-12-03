const book = {
  users: [],
  addUsers: function(name, age, phone) {
    this.users.push({ name, age, phone });
  },
  showUsers: function() {
    console.log("wszyscy użytkownicy w książce");
    // for (let i = 0; i < this.users.length; i++) {
    //   console.log(this.users[i]);
    // }
    this.users.map(user => console.log(user));
  },
  findByName: function(name) {
    const userWithName = this.users.filter(user => user.name === name);
    console.log(userWithName[0] || false);
  },
  findByPhone: function(phone) {
    const userWithPhone = this.users.filter(user => user.phone === phone);
    console.log(userWithPhone[0] || false);
  },
  getCount: function() {
    console.log(this.users.length);
  }
};
book.addUsers("Lidia", 50, 555555555);

book.showUsers();
book.findByName("Lidixa");
book.findByName(555555555);

book.getCount();
