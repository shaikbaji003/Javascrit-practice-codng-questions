
//DT:30/11/2022 javascript coding questions

//Destracturing
const obj1 = {
  a: "hello world", // property
  b: 42,
  c: true
};

let { a, b, c } = obj1;
console.log(a, b, c);

//arrat to object
const ar = [
    ["name", "baji"],
    ["age", "23"]
  ];
  
  const out1 = Object.fromEntries(ar);
  console.log(out1);

let obj = { first: "hello", second: "how are you" };
let obj2 = obj;
obj.first = "hii";
console.log(obj.first);
console.log(obj2.first);


//add each element +5 in arrray

let arre = [1, 2, 3, 4, 5, 6, 7];
let addone = arre.map((num) => num + 5);
console.log(addone);

// // //revese num

function reversenum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
console.log(reversenum(8974413));


//plaindrome

function plaindrome(str) {
  return str.split("").reverse().join("") === str;
}
console.log(plaindrome("hihih"));


//slice() splice()
let arr1 = [1, 2, 3, 4];

let newarr = arr1.slice(0, 2);
console.log(newarr);
console.log(arr1);
let latestarr = arr1.splice(0, 3);
console.log(latestarr);
console.log(arr1);

//remove duplicates
let diff = ['A', 'B', 'A', 'C', 'B','D','E','E','F'];
    
let filtered=diff.filter((e, index)=>{
  return   diff.indexOf(e) === index
})

console.log(filtered);



//each index value

arr.forEach((c, index)=>
console.log(`${c}-${index}- ${arr.indexOf(c)}`)
)

//DT:1/12/2022 

// What is the output?
//1
let a = 10;
var a = 20;
console.log(a);
//2
const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a);
console.log(b);
//3
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NULL);
console.log(typeof typeof 1);
//4
function func2() {
  return;
  {
    name: "Full Stack Tutorials";
  }
}
console.log(func2());
//5
function func1() {
  return {
    name: "Full Stack Tutorials",
  };
}
console.log(func1());
//6
var a=3;
var b=a++;
var c=++a;
console.log(a,b,c)
//7
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}
//8 Find the sum of all elements/numbers of a given array?
var arr = [1, 2, 5, 10, 20];
var sum = arr.reduce((a, i) => {
  return a + i;
});
console.log(sum);
//9 How to convert an Object {} into an Array [] in JavaScript?
let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };
console.log(Object.values(obj));
//10 print vegtarian true values
const passengers123 = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4
  },
  {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3
  },
  {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1
  }
];



const det=passengers123.filter((e)=> e.isVegetarianOrVegan).map((e)=> e.isVegetarianOrVegan)
console.log(det)

//05/12/2022

//How to empty an array in JavaScript?
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
//1 method
arrayList = [];
//2nd method
arrayList.splice(0, arrayList.length);
//How would you check if a number is an integer?

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
//Make this work

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
//answer
function duplicate(arr) {
  return arr.concat(arr);
}

duplicate([1, 2, 3, 4, 5]);
//Write a "mul" function which will properly when invoked as below syntax

function mul (x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
console.log(mul(2)(3)(4));
//Write a function that would allow you to do this?
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
//answer
function createBase(baseNumber) {
  return function(N) {
    return baseNumber + N;
  }
}

var addSix = createBase(6);
addSix(10);
addSix(21);

//FizzBuzz Challenge

function fiz(n){
    for(i=0; i<=n; i++){
        if(i%3===0 && i%5===0){
            console.log('fiz buz')
        }else if(i%3===0){
            console.log('fizz');
        }else if(i%5===0){
            console.log('buzz')
        }else(console.log(i))
    }
}

fiz(15);
//Given two strings, return true if they are anagrams of one another
//For example: Mary is an anagram of Army

//answer
function isAnagram(first, second) {
  var a = first.toLowerCase();
  var b = second.toLowerCase();
 a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

//What will be the output of the following code?

var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

// output?
(function() {
  var a = b = 5;
})();

console.log(b);//5

//Write a function that would allow you to do this
//multiply(5)(6);
function multiply(a) {
  return function(b) {
    return a * b;
  }
}

multiply(5)(6);

//cut array length
  let arr=[4,7,1,4,7,5,1,4,6,8,9]
  arr.length=5;
  console.log(arr)


  console.log(output);


//DT:06/12/2022

// Question: What is typeof []
// Answer: Object. Actually Array is derived from Object. If you want to check array use Array.isArray(arr)

// Question: What is typeof arguments
// Answer: Object. arguments are array like but not array. it has length, can access by index but can't push pop, etc.

// Question: What is the value of typeof null
// Answer: "object"

// Question: What is console.log(true+false)
// Answer: 1 here true -->> 1 & false -->> 0 then 1 + 0 -->> 1

// Question: What is 2+true
// Answer: 3. The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1

// Question: What is "2"+true
// Answer: 2true here string concatination happer "2"+"true" -->> 2true

// Question: What is the value of -'34'+10
// Answer: -24. minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number.

// Question: What is the value of +'dude'
// Answer: NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.

// Question: If you have var y = 1, x = y = typeof x; What is the value of x?
// Answer: "undefined"

// Question: for var a = (2, 3, 5); what is the value of a?
// Answer: 5. The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. ref: MDN

// Question: for var a = (1, 5 - 1) * 2 what is the value of a?
// Answer: 8

// Question: What is the value of !'bang'
// Answer: false. ! is NOT.

// Question: What is the value of parseFloat('12.3.4')
// Answer: 12.3

// Question: What is the value of Math.max([2,3,4,5]);
// Answer: NaN

// Question: typeof(NaN)
// Anwser:"number"

// Question:null == undefined
// Answer: true

// Question: If var a = 2, b =3 what would be value of a && b
// Answer: 3

// Question: What is -5%2
// Answer:-1. the result of remainder always get the symbol of first operand
======================================================================================================================================================================
let a = [];
let b = [];
console.log(a==b); //false
console.log(a===b); //false
//Explaination : Here we are comparing memory location, not an array. Memory location of 2 arrays are not same.
--------------------------
let a = [];
let b = a;
console.log(a==b); //true
console.log(a===b); //true
//Explaination : Here we are assigning a to b, where memory location is now same.
---------------------------
let a = [1];
let b = [1];
console.log(a[0]==b[0]); //true
console.log(a[0]===b[0]); //true
//Explaination : Here we are comparing elements inside an array, not a memory location. We specify the index so that's why element get compared.
-----------------------------
let z= [1,2,3]
let a ={name: "priya"}
console.log(...z); // 1 2 3 
//Explaination : ...z means destructing happened i.e, all the elements are come out from an array/object.
------------------------------
console.log(typeof NaN); //number
//Explaination : If we divide "priya"/2 then it will give NaN. 
--------------------------------
let data = 10 - -10;
console.log(data); //20
//Explaination : Minus minus will become plus so 10+10=20
---------------------------------
const set = new Set([1,1,2,2,3,4,5])
console.log(set) //{1,2,3,4,5}
//Explaination : It will remove duplicate values.
---------------------------------
let data ={name: "priya"}
console.log(delete data.name); //true
console.log(data)//{}
//Explaination : delete will return either true or false.
-----------------------------------
let data ={name: "priya"}
console.log(delete data); //false
//Explaination : We can delete the object property only. We can't able to delete the object(i.e, data).
------------------------------------
const data = ["piya", "priya", "supriya"];
const [y] = data;
console.log(y); //"priya"
//Explaination : We are doing destructuring here. y is representing the first index only
-------------------------------------
const data = ["piya", "priya", "supriya"];
const [y,z] = data;
console.log(y,z); //"priya", "priya"
//Explaination : We are doing destructuring here. y is representing the first index only and z representing the second index.
--------------------------------------
const data = ["piya", "priya", "supriya"];
const [,m] = data; // way to access any specific element here at second position
console.log(m); //"priya"
//Explaination : To access any element without taking previous values, we can do just write comma.
--------------------------------------
const data ={name:"priya"}
const {name} = data; //how to get the name property without . dot operator
console.log(name);//priya
//Explaination : Here we did object destructuring.It's not store in continuos memory location but array store in continuoes memory location so that's why we used comma in an array.
--------------------------------------
let data ={name:"priya"}
let data1={city:"ABC"}
data = {...data, ...data1} //merge 2 objects
console.log(data); // {name:"priya", age:"ABC"}
//Explaination : using spread operator we use to merge the 2 objects. Three dots will pop out the property from an object and assign inside curly brackets.
-----------------------------------------
let data ={name:"priya"}
let data1={city:"ABC"}
data = {data, ...data1} //merge 2 objects
console.log(data); // { "data" : {name:"priya"}, "city": "ABC"}
//Explaination :Three dots will pop out the property from an object and assign inside curly brackets. If we didn't do destructing or spread operator then key will be object name(i.e, data) and assign the value as whole object into it.
------------------------------------------
let data ={name:"priya"}
let data1={city:"ABC", name: "supriya"}
data = {...data, ...data1} //merge 2 objects
console.log(data); // { name:"supriya", "city": "ABC"}
//Explaination : If we have same keys while merging then the position of the property will remain same but the value get updated with new value. Because in an objects Keys hould be unique.
-------------------------------------------
const name = "priya"
console.log(name()); //Error: name is not a function
//Explaination : Function we are calling but it's not present so it will an error.
--------------------------------------------
const result = false || {} || 20 || null;
console.log(result); //20
//Explaination : OR operator will find first positive value. Null is a falsy value by default. {} is a positive value. It didn't reach till 20 and null.
--------------------------------------------
const result = null || false || '';
console.log(result); //''
//Explaination : OR operator will find first positive value. It will print '' because any of the true value didn't found so it will pick last value always.
-------------------------------------------
const result = [] || 0 || true;
console.log(result); //[]
//Explaination : OR operator will find first positive value. It will print [] because empty array/object is a positive.
-------------------------------------------------
console.log(Promise.resolve(5)); //Promise {<fulfilled>: 5}
//Explaination : While doing resolve(), itself here a promise. If we pass number/string etc then it will print fulfilled.
------------------------------------------------
console.log("smile" === "smile"); //true
//Explaination : Each emojy contain unicode where we are compairing unicode not the emojy so it's true
-------------------------------------------------
JSON.parse ?
Parse JSON object to a JavaScript value // converting data into js object
-------------------------------------------------
let name  = "priya";
function getName(){
  console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization 
  let name = "supriya";
}
getName();
//Explaination : Hoisting used here. If we use VAR the can use variable before declare. But in LET we can't do that. LET/CONST need declaration first then can use it.
--------------------------------------------------
let name  = "priya";
function getName(){
  console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization 
  let name = "supriya";
}
getName();
------------------------------------------------------------------------------
let name  = "priya";
function getName(){ 
  let name;
  console.log(name); //undefined
  name = "supriya";
}
getName();
------------------------------------------------------------------------------
let name  = "priya";
function getName(){ 
  let name = "supriya";
  console.log(name); //supriya    
}
getName();
------------------------------------------------------------------------------
