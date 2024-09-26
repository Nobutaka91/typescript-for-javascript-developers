export {};

interface Profile {
 name: string;
 underTwenty: boolean;
 [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Kou", underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = "Kou";
profile.age = 33;
profile.nationality = 'Japan';