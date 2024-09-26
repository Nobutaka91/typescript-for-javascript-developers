export {};

class VisaCard {

  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('Kou');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'baka';

