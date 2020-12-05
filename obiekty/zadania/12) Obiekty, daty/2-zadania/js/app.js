/*
const spaceShip = {
  name: "Enterprise",
  currentLocation: "Earth",
  flyDistance: 0,
  flyTo: function(place, distance) {
    this.currentLocation = place;
    this.flyDistance += distance;
  },
  showInfo: function() {
    console.log(` Informacje o statku:
    --------------------
    Statek   ${this.name}
    doleciał do miejsca ${this.currentLocation}
    Statek przeleciał już całkowity dystans  ${this.flyDistance}`);
  },
  meetClingon: function() {
    const randomArr = [];
    for (let i = 0; i < 100; i++) {
      randomArr.push(Math.random());
    }
    const moreThanHalf = randomArr.filter(nr => nr > 0.5);
    if (moreThanHalf.length > randomArr.length / 2) {
      console.log(
        `Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami `
      );
    } else {
      console.log(
        ` Statek .... będący w okolicy .... został pokonany przez Klingonów`
      );
    }
  }
};
spaceShip.showInfo();

spaceShip.meetClingon();
*/