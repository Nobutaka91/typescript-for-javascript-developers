export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Nou';
  static lastName: string = "Ackerman";

  static work() {
    // return "Hey, guys! This is Kou! Are you interesed in Typescript?";
    return `Hey, guys! This is ${this.firstName} Are you interesed in Typescript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());