export {};

type Profile = {
 name: string;
 age: number;
};  


const me: Profile = {
 name: 'Kou',
 age: 33,
};

me.age++; 

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
 name: 'suzuki',
 age: 34,
}  

// friend.age++;

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;