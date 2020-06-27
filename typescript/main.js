"use strict";
exports.__esModule = true;
var message = "welcome back";
console.log(message);
var isBeginner = true;
var total = 0;
var name = "bob";
var sentence = "My name is " + name + "\nI am a beginner at typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// examples of lists
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple type
var person1 = ["bob", 22];
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "thing";
// let theVariable: unknown = 10;
// console.log(theVariable.name);
// theVariable();
// (theVariable as string).toUpperCase();
// function hasName(obj: any): any obje
