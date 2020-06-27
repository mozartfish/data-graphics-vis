export {};
let message = "welcome back";
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "bob";
let sentence: string = `My name is ${name}
I am a beginner at typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// examples of lists
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple type
let person1: [string, number] = ["bob", 22];

// enums
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "thing";

// let theVariable: unknown = 10;
// console.log(theVariable.name);
// theVariable();
// (theVariable as string).toUpperCase();

// function hasName(obj: any): any obje
