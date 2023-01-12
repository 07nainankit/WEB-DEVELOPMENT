// // day one 16       24 hrs let's see
// //babel (old browsers compatiblity)

// //to avoid mistakes
// // "use strict";

// console.log("hellow world");

// //' ' `(1) can be used

// //variables //naming of variables (rules $ can be used)

// var $value_1is = 2;
// console.log($value_1is ** 3); //for power **

// //cammel case using in js firstName, FistName for class

// //let prefered over var
// let first = "ankit";
// console.log(first);
// console.log(first.length);
// console.log(first[3]);

// first = "     Aprit       ";
// console.log(first);
// console.log(first.length);
// console.log(first[3]);

// first = first.trim();
// console.log(first);
// console.log(first.length);
// console.log(first[3]);
// //some operations on strings
// console.log(first.toUpperCase());
// console.log(first.toLowerCase());
// console.log(first.slice(1, 4)); //1to end (1)

// const age = 3;
// // name="arpit";//can't be changed
// console.log(age,typeof age);

// //data type
// console.log(typeof age);
// //file ->pref->snippit(global)->$1 
// console.log(typeof "ankit");
// //int(number) to string
// // age=age="";->don't work bcoz of const
// console.log(typeof age+"",age);

// //string to int just add +sign
// let myStr="432";
// //+mystr=String(myStr)//Number(age);
// console.log(typeof myStr);
// console.log(typeof +myStr);
// //two strings add(concatinate) by + 

// let umar=19;
// let nam="nain";
// let about_me="my name is "+nam+" and my age is "+ umar;
// let about=`my name is ${nam} and my age is ${umar}`
// console.log(about_me);
// console.log(about);
// // const hi;//need to assing data type

// //null->typeof null is object it's bugg in js not changed coz of 
// //alot of code is already in null->object
// let happpy=null;
// console.log(typeof happy,typeof null);//"use strict "; throw errors
// happy="not";
// console.log(happy,typeof happy);
// //Bigint
// console.log(Number.MAX_SAFE_INTEGER);
// let no=BigInt(3978713435154);
// let no1=12124234244234n;
// //bool
// let num1=3;
// let num2='3';
// console.log(num1==num2);
// console.log(num1+""===num2);
// console.log(num1===+num2);
// //don't check data type we have to add =more
// console.log(55%5!=0);
// let bank="";//null 0 false 
// if(bank){
//     console.log("bhara hua ");
// }
// else{
//     console.log("khali");
// }

// // //prompt
// // let winningNumber=10;
// // // let userGuess=prompt("best performer messi / mbappa");
// // let userGuess=+prompt("best performer messi / mbappa");
// // //prompt is takeing input in string
// // console.log(typeof userGuess,userGuess);
// // //if elseif ,switch just remember ==(don't check data type)
// // //=== also checks data type

// //loops
// let i=0;
// while(i<=3){
//     console.log(i);
//     i++;
// }
// console.log("break");
// for(let j=6;j<=7;j++)console.log(j);
// console.log("break");
// do{
//     console.log(i);
//     i++;
// }while(i<6);//runs atleast once

// //array->any data type can be stored //mutable
// let fruits=["apple","mango",3,null,undefined];
// console.log(fruits);
// console.log(fruits[2]);
// fruits[2]="three";
// let remove=fruits.pop();//stored->.shift also do same
// fruits.push("banana");
// fruits.unshift("banana")
// console.log(fruits);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));//to identify is array or not
// //array is reference type and called object
// //push and pop are fast coz of operation on last vs first unshift and shift

// let array2=fruits;
// //here we know fruits store address of apple and array2 gets same address pass by reference
// //any change in fruits lead to change in array2

// // diff methods to copy an arrays not reference

// // let arr2=fruits.slice(0);//`1`
// let arr2=fruits.slice(0).concat(["items"]);//`1`

// let arr3=[].concat(fruits);//`2

// // let arr4=[...array2];//spread operator
// let arr4=[...array2,...arr2,"item2","item3"];//spread operator

// console.log("fruits" ,fruits);
// fruits.push("he he he")
// console.log("array2" ,array2);
// console.log("arr2" ,arr2);
// console.log("arr3" ,arr3);
// console.log(fruits);
// fruits[4]="nullbadtoref";
// let fruits2=[];
// for(let j=0;j<fruits.length;j++){
//     if(j==3){continue;}
//     fruits2.push(fruits[j].toUpperCase());
// }
// console.log(fruits2);
// //due to reference property const don't impact just we can't reassgn
// //use const in arrays

// //for of loop
// // for(let fal of fruits){
// //     console.log(fal);    
// // }

// //for in loop
// for(let fal in fruits){
//     console.log(fal);  
//     console.log(fruits[fal]);
// }
// //array destructuring
// let [myval,,myval2,...myNewArray]=fruits;
// console.log("better way to copy");
// console.log(myval);
// console.log(myval2);
// console.log(myNewArray);

// //objects->don't have index ->reference type ->key value pair
// const key="email";
// const person={nome:"Ankit",umage:19,
//         hobbies:["boobi"],
//         type:["joking"],
//         //we have to add strings
//         "person help":"sleep"
// };
// person[key]="ankit@gmial.com";
// person["key"]="nainankit.com";
// person.gender="male";
// console.log(person);
// console.log(person.name);
// console.log(person.age);

// //iteration in object
// for(let itr of Object.keys(person)){
//     console.log(person[key]);s
//     console.log(key);
// }
 
//we are picking an element by id from the document.
let countEl = document.getElementById("count-el");

let count=0;

function increment(){
    count+=1;
    //console.log(count);
    countEl.innerText=count;
}
function reset(){
    count=0;
    //console.log(count);
    countEl.innerText=count;
}
let saving = document.getElementById("output");
function save(){
    // console.log(count);
    let countstr=count+" - ";
    // saving.innerText+=countstr;
    saving.textContent+=countstr;

    count=0;
    countEl.textContent=count;    
}

//string are are kind of wierd to use they type cast a lot
// let age =77;
// let umar="8";
// let no=3;
// console.log(age+umar);
// console.log(age+no);

// let firstName="Ankit";
// let lastName="Nain";
// let fullName=firstName+", "+lastName+"!";
// console.log(fullName);

//2nd project of calculator
let n1=8;
let n2=9;
let num1El=document.getElementById("num1");
let num2El=document.getElementById("num2");
num1El.textContent=n1;
num2El.textContent=n2;
let result=document.getElementById("total");
let ans=0;
function sumup(){
    console.log(n2+n1);
    // ans=num1El+num2El;
    ans=n1+n2;
    ans="sum:"+ ans;
}
function minus(){
    ans=n1-n2;
}
function xtime(){
    ans=n1*n2;
}
function decri(){
    ans=n1/n2;
}
function show(){
    result.textContent=ans;
}

//building jack

let hasSolvedChallenge=false;
let isAlive=true;
let firstCard=ranomno();
let secondCard=9;
let cards=[firstCard,secondCard];
// let sum = firstCard + secondCard;
let sum = 0;

let message=document.getElementById("msg");
let res=document.getElementById("sum");
// let res=document.querySelector("#sum")
let pata=document.getElementById("card");

function startgame(){
    for(let i=0;i<cards.length;i++){
        sum+=cards[i];
    }
    if(sum<21){
        // console.log("Do you want to draw a new card?");
        message.textContent="Do you want to draw a new card?";
        res.textContent="sum: "+sum;
        // pata.textContent="cards:"+firstCard+" "+secondCard;
        pata.textContent="cards:"+cards[0]+" "+cards[0];
    }
    else if(sum === 21){
        hasSolvedChallenge=true;
        //3= to check data type too
        // console.log("boom baby jackpot");   
        message.textContent="boom baby jackpot";
        res.textContent="sum: "+sum;
        pata.textContent="cards:"+cards;
    }
    else{
        // console.log("you are out of the game");
        isAlive=false;
        message.textContent="you are out of the game";
        res.textContent="sum: "+sum;
        // pata.textContent="cards:"+firstCard+" "+secondCard;
        pata.textContent="cards: "
        for(let i=0;i<cards.length;i++){
            pata.textContent+=cards[i];
        }
    }
}

//use of array in the first/second card

// let aboutme=["ankit",19,true];
// console.log(aboutme[2]);
// aboutme.push(2030);
// console.log(aboutme);
// aboutme.pop();

//getting random input
function ranomno(){
    //math.random 0-1 not including 1 like 0.999... is max
    // return Math.random();
   
    //(1-13)
    // return Math.floor(Math.random()*12)+1;   

    if(isAlive && hasSolvedChallenge!=true){
        let ans=Math.floor(Math.random()*12)+1;
        if(ans===1)return 11;
        else if(ans>=11 || ans<=13){
            return 10;
        }   
        else{
            return ans;
        }
    }
}
//to tackle the problem of 0. no use-> *x / math.floor /+1

//prefer to use proper names like sumEl for dom and sum-el for id 

//showing score of particular player using class

let player = {
    name:"ankit",
    score:142,
    sayHello: function(){
        console.log("hey");
    }
}
console.log(player.name);
console.log(player["score"]);
let playerEl=document.getElementById("player-el");

playerEl.textContent=player["name"]+": "+player["score"];
//so we have created our on function
player.sayHello();

//homework
// let person={
//     name:"ankit",
//     age:19,
//     country:"India",
// }
// function logData(){
//     console.log(person.name+" is "+person.age+" years old and lives in "+ person.country);
// }
// logData();


//push pop for end and for begin shift unshift

// let arr=[1,2,3,4];
// arr.pop();
// arr.push(5);
// arr.shift();
// arr.unshift(0);
// console.log(arr);
//can be remembered by the more no of words used 

//how to randomly take input from our data
let hands=["rock","paaper","seasor"];
function index(){
    return Math.floor(Math.random()*3);
    //3 so range 0 to 2;
}
console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());

console.log(hands[index()]);

//crome extension

//we use const for data not to be changed like const name="ankit";
//how to take input from user -> doc.gebi().val;
//535
