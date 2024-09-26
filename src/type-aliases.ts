export {};

type Mojiretsu = string;

const fooMojiretsu: Mojiretsu = 'Hello'; 


const example1 = {
  name: 'Kou',
  age: 33
};

type Profile = {
  name: string;
  age: number;
}


const example2: Profile  = {
  name: 'Kou',
  age: 33
};


type Profile2 = typeof example1;