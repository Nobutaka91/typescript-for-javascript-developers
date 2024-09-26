export {};

class Person {
  constructor(public name: string, protected age: number) {}
}


const me = new Person('Kou', 33); 
console.log(me);