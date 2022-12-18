// day one 16       24 hrs let's see
//babel (old browsers compatiblity)

//to avoid mistakes
// "use strict";

console.log("hellow world");

//' ' `(1) can be used

//variables //naming of variables (rules $ can be used)

var $value_1is = 2;
console.log($value_1is ** 3); //for power **

//cammel case using in js firstName, FistName for class

//let prefered over var
let first = "ankit";
console.log(first);
console.log(first.length);
console.log(first[3]);

first = "     Aprit       ";
console.log(first);
console.log(first.length);
console.log(first[3]);

first = first.trim();
console.log(first);
console.log(first.length);
console.log(first[3]);
//some operations on strings
console.log(first.toUpperCase());
console.log(first.toLowerCase());
console.log(first.slice(1, 4)); //1to end (1)

const age = 3;
// name="arpit";//can't be changed
console.log(age,typeof age);

//data type
console.log(typeof age);
//file ->pref->snippit(global)->$1 
console.log(typeof "ankit");
//int(number) to string
// age=age="";->don't work bcoz of const
console.log(typeof age+"",age);

//string to int just add +sign
let myStr="432";
//+mystr=String(myStr)//Number(age);
console.log(typeof myStr);
console.log(typeof +myStr);
//two strings add(concatinate) by + 

let umar=19;
let nam="nain";
let about_me="my name is "+nam+" and my age is "+ umar;
let about=`my name is ${nam} and my age is ${umar}`
console.log(about_me);
console.log(about);
// const hi;//need to assing data type

//null->typeof null is object it's bugg in js not changed coz of 
//alot of code is already in null->object
let happpy=null;
console.log(typeof happy,typeof null);//"use strict "; throw errors
happy="not";
console.log(happy,typeof happy);
//Bigint
console.log(Number.MAX_SAFE_INTEGER);
let no=BigInt(3978713435154);
let no1=12124234244234n;
//bool
let num1=3;
let num2='3';
console.log(num1==num2);
console.log(num1+""===num2);
console.log(num1===+num2);
//don't check data type we have to add =more
console.log(55%5!=0);
let bank="";//null 0 false 
if(bank){
    console.log("bhara hua ");
}
else{
    console.log("khali");
}
//1:56




