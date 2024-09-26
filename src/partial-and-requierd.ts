export {};


type Profile = {
 name: string;
 age?: number;
 zipCode: number;
};


type SuperPartialType = Partial<Profile>;
type SuperRequierdType = Required<Profile>;