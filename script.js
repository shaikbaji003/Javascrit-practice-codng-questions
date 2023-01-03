
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
//DT:07/12/2022

--------------------------------------------------
console.log((x => x)('I love')) //"I love"
console.log(`${(x => x)('I love')} to program`) //"I love to program"
//Explaination : Template Literal used here. We use here arrow function which is returning a string 
----------------------------------------------------
function sumValues(x,y,z){
  return x+y+z;
}
sumValues(...[2,3,4]) //how to call a function so that output will be 9
//Explaination : we can't do like this sumValues(2,3,4).
----------------------------------------------------
const name = "priya is a girl.";
console.log(typeof name); //string
console.log(!typeof name); //false //"priya is a good girl" is a string means thruthy value. Nagation of thruthy is falsy value.
console.log(!typeof name === 'object'); //false
console.log(!typeof name === 'string'); //false
console.log(!typeof name === false); //true
//Explaination : We are using negation mark(!) which will return either true or false only.
----------------------------------------------------
const name = "priya";
const age ="10000";
console.log(isNaN(name)); //true
console.log(isNaN(age)); //false
//Explaination : If it's not a number then return True. If it's a number then return false.
-----------------------------------------------------
let person = {name: "priya"};
Object.seal(person); //post seal, how can you modify the person object
person.age ="1000";
person.name ="supriya";
console.log(person); //{name : "supriya"}
//Explaination : Onceyou use Seal we can't able to add the more keys with values into it.But you can modigy the existing key.
-------------------------------------------------------
let data = [2,9,0,10];
data.shift();//remove first element
console.log(data); //[9,0,10]
data.pop(); //remove last element
console.log(data);//[9,0]
//Explaination : shift and pop use to remove the elements from first and last index.
--------------------------------------------------------
//check the value is even or odd
let a =10;
console.log(a%2===0 ? true : false); //true
//Explaination : Need to divide by 2 and then checking if reminder is zero/one.
----------------------------------------------------------
let data ={ name : "priya"};
delete data.name;
console.log(data); //{}
//Explaination : delete always work with object properties not a object itself.
---------------------------------------------------------
let data ="true";
//convert data into boolean false value
console.log(!data); //false
console.log(typeof !data); //boolean
//Explaination : ! will make boolean value(or opposite value). 
---------------------------------------------------------
let data ="true";
//convert data into boolean true value
console.log(!!data); //true
console.log(typeof !!data); //boolean
//Explaination : ! will make boolean value(or opposite value). 
---------------------------------------------------------
Diff between Map and foreach: Map will return new thing but Foreach didn't return anything.
---------------------------------------------------------
let data = ["piya", "priya", "supriya"];
delete data[1];
console.log(data); //["piya",,"supriya"] //["piya",empty,"supriya"]
console.log(data.length); //3
//Explaination : Whenever element deleted from an object it will create a empty space. Array length will always reain same.
-------------------------------------------------------------
//merge 2 arrays
const a =[1,2,3];
const b =[4,5,6];
const c =[...a, ...b]
console.log(c); //[1,2,3,4,5,6]
//Explaination : using spread operator
----------------------------------------------------------------
const a =[1,2,3];
const b =[3,4,5,6];
const c =[...a, ...b]
console.log(c); //[1,2,3,3,4,5,6]
//Explaination : using spread operator still we can merge and both values will be present in arrays. But in an object, it will take the lates value and assigned to the 1st position of that key.
-------------------------------------------------------------------
let c = 3**3;
console.log(c); //27
console.log(3*3); //9
//Explaination : 3 square 3 means 3*3*3
---------------------------------------------------------------------
let a=2;
setTimeout(()=>{
  console.log(a); //100
},0)
a=100;
//Explaination : Here we are using zero time interval. setTimeout is async function so it will execute at last. Firstly all the sync code will get execute. so that's why 100 is assigned to a.
------------------------------------------------------------------------
let a =2;
let A =30;
console.log(A); //30
//Explaination : a and A both are diff variables.
------------------------------------------------------------------------
let A10="hello";
let 10A ="hi";
console.log(A10); //hello
//console.log(10A); //error
//Explaination : Variable can't start with a number.
------------------------------------------------------------------------
let a="hello";
let b =`hello`;
console.log(a === b); //true
console.log(a == b); //true
//Explaination : Doble code and backticks both are same.
--------------------------------------------------------------------------
let a =1;
let c =2;
console.log(--c === a); //true
//Explaination : --c will be 1 so thats why true.
--------------------------------------------------------------------------
let a =1;
let b =1;
let c =2;
console.log(a === b === -c); //false
//Explaination : a===b gives True. true === -c(number) gives false.
---------------------------------------------------------------------------
console.log(3*3); //9
console.log(3**3); //27
//console.log(3***3); //error
//Explaination : *** doesn't exist in js.
----------------------------------------------------------------------------
console.log(a); //undefined
var a;
//Explaination : We can use VAR variable before its declaration. We didn't assign any value but still by default "undefined" will be store in it.undefined means declared but value didn't initialised.
-----------------------------------------------------------------------------
console.log(a); //not defined
//Explaination : Not defined means variable didn't even declared.Also value is not assogned.
-----------------------------------------------------------------------------
console.log([[[]]]); //[[[]]]
//Explaination : It will print the nested array. We will get 3 nested array and each one have 1 element but at the last array will be empty.
------------------------------------------------------------------------------
How to find Operating system name?
navigator.plateform we can use it. //win32
-------------------------------------------------------------------------------
let for = 100; //Error
//Explaination : For is a reserved keyword.
-------------------------------------------------------------------------------
function fruit(){
  console.log(name); //undefined
  console.log(price); //Error
  var name = "priya";
  let price = 1000;
}
fruit()
//Explaination : Hoisting concept used here. Error because in LET declaration first then only we can use it. but in var we can use brfore its declaration.
-------------------------------------------------------------------------------
for(var i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) // 3,3,3
}
//Explaination : Var is a global variable. Firstly Sync code get executed then async code will start to execute. so i value incremented from 0 to 3 when pointer reaches to setTimeout so it will print 3 thrice time.
---------------------------------------------------
for(let i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) //0 //1 //2
}
//Explaination : LET is a block scope. so it will print 0,1,2. Its having own islocated scope.
----------------------------------------------------
console.log(+true); //1
console.log(typeof +true); //number
//Explaination : if we write + in front of anything then it will convert into a number.
----------------------------------------------------
console.log(!"priya"); //false
console.log(typeof ("priya")); //string
//Explaination : ! will give either true/false.! means false and !! means true.
----------------------------------------------------
let data = "size";
const bird = {size : "small"}
console.log(bird[data]); //small
console.log(bird["size"]); //small
console.log(bird.size); //small
console.log(bird.data); //undefined
//Explaination : If we wants to access variable with object then use [] notation(. notation will not work).
------------------------------------------------------
let c = {name  : "priya"};
let d;
d=c;
c.name = "supriya";
console.log(d.name); //supriya

//DT:08/12/2022

//Explaination : Using assignment operator we are accessing the same memory allocation. 
-------------------------------------------------------
var x;
var x=10;
console.log(x); //10
//Explaination : Can be declare multiple times.
---------------------------------------------------------
var x;
let x=10;
console.log(x); //Error
//Explaination : Can't be declare multiple times with LET.
----------------------------------------------------------
let a = 3;
let b = new Number(3);
console.log(a == b); //true
console.log(a === b); //false
console.log(typeof b); //object
//Explaination : === will give false because a will give number but b will give an object.
-------------------------------------------------------
let name;
nmae ={}; //wrong variable name i wrote
console.log(name); //undefined
//Explaination : by default it wil be undefined if we declare first.
---------------------------------------------------------
function first(){
  console.log("Woof!!"); //Woof!!
}
first.name = "apple";
first();
//Explaination : To add the property with a function then it will not create a impact.
----------------------------------------------------------
function sum(a,b){
  return a+b;
}
console.log(sum(1, "2")); //12
//Explaination : 2 is passed as a string so it will get concat. num+string = string
------------------------------------------------------------
let num = 0;
console.log(num++); //0
console.log(++num); //2
console.log(num); //2
//Explaination : ++ will increase the value by 1. preincrement and postincrement used here.
--------------------------------------------------------------
function getAge(...args){ //[1000]
  console.log(typeof args); //object
}
getAge(1000);
//Explaination : typeof args means typeof an array means typeof [] is object.
--------------------------------------------------------------
function getAge(){ 
 age = 1000;
 console.log(age); //1000
}
getAge();
//Explaination : if we didn't declare with Var/Let/const then by default it will become as a Var.
------------------------------------------------------------------
function getAge(){ 
  'use strict'
 age = 1000;
 console.log(age); //error
}
getAge();
//Explaination : Use strict wil give a error because it forces to use a proper way of the variable declaration.
----------------------------------------------------------------------
const sum = eval('10*10+5');
console.log(sum); //105
//Explaination : It will perform the numerical operation
----------------------------------------------------------------------------
const obj = {1:"a", 2:"b"}
console.log(obj.hasOwnProperty("1")); //true
console.log(obj.hasOwnProperty(1)); //true
//Explaination : "1" and 1 treat as same.
----------------------------------------------------------------------------
const obj = {a:"one", b: "two", a:"three"}
console.log(obj); // {a:"three", b: "two"}
//Explaination : Key position will be same but tha value get updated with new value in object.
----------------------------------------------------------------------------
for(let i=1; i<5; i++){
  if(i==3) continue;
  console.log(i); //1,2,4
}
//Explaination : If i =3 then it will not execute the code for 3, but can execute for i=4.
------------------------------------------------------------------------------
const foo = () => console.log("first");
const bar = () => setTimeout(()=> console.log("second"));
const baz = () => console.log("third");
bar();
foo();
baz();
//Explaination : first,third, second. Because asyn operation work post all the syn operation get complete.
----------------------------------------------------------------------------
<div onClick="console.log("first div")">
  <div onClick="console.log("second div")">
    <button onClick="console.log("button")">
     Click Me
     </button>
  </div>
</div>
//Explaination : button, second div, first div. Even bubbling happened here.
---------------------------------------------------------------------------
const person = {name:'priya'};
function sayHi(age){
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,21)); //"priya is 21"
console.log(sayHi.bind(person,21)); //it will return a function. //function sayHi(age){  return `${this.name} is ${age}`;}
console.log(sayHi.bind(person,21)()); //"priya is 21"
//Explaination : Bind will always return a function so require to invoke the function.
------------------------------------------------------------------------------
function sayHi(){
  return (()=>0)();
}
console.log(typeof sayHi()); //number
//Explaination : sayHi will return anonymous arrow function/IIFE, where it will return 0. type of 0 is number.
----------------------------------------------------------------------------
function sayHi(){
  return ()=>0;
}
console.log(typeof sayHi()); //function
console.log(typeof sayHi()()); //function
//Explaination : sayHi will return anonymous arrow function/IIFE, where we didn't invole the arroe function so it will return function.
-----------------------------------------------------------------------------
console.log(typeof typeof 1); //string
//Explaination : typeof 1 is a number and typeof number is a string.
-----------------------------------------------------------------------------
const numbers = [1,2,3];
numbers[6]=11;
console.log(numbers); //[1,2,3,,,,11]
//Explaination : Array store elements in a continuous memory location. It will give empty in between an array.
-------------------------------------------------------------------------------
const numbers = [1,2,3];
numbers[9]=numbers;
console.log(numbers); //[1,2,3,,,,.......]
//Explaination: It will print infinite loop.
-------------------------------------------------------------------------------
console.log(!!null); //false
console.log(!!""); //false
console.log(!!1); //true
//Explaination: !null give true and !!null give false. !1 give false and then !!1 give true.
-------------------------------------------------------------------------------
console.log(setInterval(()=>console.log('Hi'), 1000));
console.log(setInterval(()=>console.log('Hi'), 1000));
console.log(setInterval(()=>console.log('Hi'), 1000));
//Explaination: setInterval will give uniques id to stop. It will give like 1,2,3. so it will print 1,2,3,Hi,Hi, Hi, Hi, Hi, .....so on.
------------------------------------------------------------------------------
console.log(setTimeout(()=>console.log('Hi'), 1000));
console.log(setTimeout(()=>console.log('Hi'), 1000));
console.log(setTimeout(()=>console.log('Hi'), 1000));
//Explaination : it will print 1,2,3,Hi,Hi, Hi.
-------------------------------------------------------------------------------
console.log([..."priya"]); //["p","r","i","y","a"]
//Explaination: It will convert into an array.
-------------------------------------------------------------------------------
const firstPromise = new Promise((res, rej)=>{
  setTimeout(res, 500, 'one');
})
const secondPromise = new Promise((res, rej)=>{
  setTimeout(res, 100, 'second');
})
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
//Explaination: Race will return only first matching result so it will print 100. For 500 it will take time to execute so it will not get print.
-----------------------------------------------------------------------------------
let person = {name: "priya"};
const numbers = [person];
person = null;
console.log(numbers, person); // [{name : "priya"}] //null
//Explaination: We try to empty the objecti,e person, but still an array i.e, numbers conatin value so it will not create an impact while assigning null to person.
----------------------------------------------------------------------------------
const person = {name: "priya", age: 1000};
for(const item in person){
  console.log(item); //name, age
}
//Explaination: For in loop give a keys only.
--------------------------------------------------------------------------------------
let data = 3+4+'5';
console.log(data); //"75"
console.log(typeof data); //string
//Explaination: It will add as a string.
------------------------------------------------------------------------------------------
console.log(typeof 3+4+'5'); //"number45"
//Explaination: operation went from left to right side.
----------------------------------------------------------------------------------------
console.log(typeof (3+4+'5')); //"75" //string
console.log(typeof (3+4+  +'5'));//number
//Explaination: To find out the typeof when the all the operation get complete thrn have to enclose in paranethisis. If we add + plus sign to any string it will convert to a number.
----------------------------------------------------------------------------------------
let data = [1,2,3].map( num =>{
  if (typeof num === 'number') return;
  return num*2;
})
console.log(data); //[undefined,undefined,undefined]
//Explaination: If jusr return then it will print undefined.
----------------------------------------------------------------------------------------
function getInfo(member){
  member.name = "priya";
}
const person = {name : "supriya"}
getInfo(person);
console.log(person); //{"name":"priya"}
//Explaination: If we pass an object as argument it will have call by refrence, means having same memory location.
----------------------------------------------------------------------------------------
function Car(){
  this.make = "tata";
  return {make: "kia"};
}
const myCar = new Car();
console.log(myCar.make); //kia
//Explaination: return will overrite the property.If we didn't return then it will print tata.
----------------------------------------------------------------------------------------
(()=>{
  let x = (y = 10);
})()
console.log(typeof x, y); //"undefined" //10
//Explaination: x is a block scope, and we are trying to console x outside of x so that's why undefined.
-----------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})()
console.log(typeof y); //number
//Explaination: x is a block scope, and y is a var because y is not declared so by default it will be var.
----------------------------------------------------------------------------------------
(()=>{
  let x = 10;
})();
(()=>{
  let x = 10;
})();
console.log(typeof x); //undefined
//Explaination: x is a block scope.
---------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})();
(()=>{
  let x = y = 20;
})();
console.log(y); //20
//Explaination: y is a var scope so it will overrite from 10 to 20
-----------------------------------------------------------------------------------------
let x =100;
(()=>{
  var x = 10;
})();
console.log(x); //100
//Explaination: x=10 contain inside a block because we already declare with 100 outside so it will print 100.
-------------------------------------------------------------------------------------------
const func = (function(a){
                   delete a;
                   return a;
               } )(5)
console.log(func);

output: 5
//delete keyword only use with object properties. here a is a variable so it will not work the variable. //delete user.age 
------------------------------------------------------------------------------------------
Dynamic property of object :
const property = "firstName";
const name = "Priya";

const user = {
  property : name //{"property" : "Priya"}
}
console.log(user);

const user1 = {
  [property] : name //dynamic property required [] //{"firstName" : "Priya"}
}
console.log(user1);
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//iterate through keys
for(let item in user){
  console.log(item) //name age
}
//iterate through values
for(let item in user){
  console.log(user[item]) //priya 100
}
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//double the age as 200 //iterate through keys
for(let item in user){
 if(typeof user[item] === "number"){
   user[item]*=2
 }
}

console.log(user)
------------------------------------------------------------------------------------------
const a = {}
const b = {key : "b"}
const c = {key : "c"}

a[b] = 123;
a[c] = 456;
console.log(a[b]); //456

//console.log(a) //{"[object Object]" : 456}
//here object is not converted into a string so printing key as object Object.
//so for both it will be 
//a["[object Object]"] = 123;
//a["[object Object]"] = 456;
//it get override by 456.
------------------------------------------------------------------------------------------
const user = {
  name :"priya",
  age : 100
}
//convert into a string
const str = JSON.stringify(user)
console.log(str)//{'name':'priya','age':100}"

//convert string onto an object
console.log(JSON.parse(str)) //{ name : "priya, "age":100}


*****************
Real Usecases : Storing in local storage. We can't store the object as a value so require to convert into a string.
const user = {
  name :"priya",
  age : 100
}
console.log(JSON.stringify(user)) //convert into a string
console.log(JSON.parse(JSON.stringify(user)))  //convert into an object

localStorage.setItem("testAsKey", JSON.stringify(user)) {"name":"priya","age":100}
localStorage.setItem("testAsKey", user) //[object Object] beacuse we are forcefully trying to convert in a string

JSON.parse(localStorage.getItem("testAsKey")) //will get as a object
------------------------------------------------------------------------------------------
const user = {
  name :"priya",
  age : 100
}
console.log(JSON.stringify(user,["name"])) //"{'name':'priya'}"

//wheen we pass as a array then it will convernt only those properties and ignore rest of the proerties
------------------------------------------------------------------------------------------
const shape = {
  radius : 10,
  diameter(){
    return this.radius*2; //this pointing to shape
  }
 parimeter : () => 2*Math.PI*this.radius; //this pointing to window where it's not exist
}
console.log(shape.diameter()) //20
//console.log(shape.parimeter()) //Nan
-------------------------------------------------------------------------------------------
let user = {
  name : "Priya",
  age : 100
}

const name = "Supriya";
//const {name} = user; //Identifier 'name' has already been declared 
const {name : myName} = user;

console.log(myName) //Priya
-------------------------------------------------------------------------------------------
let user = {
  age : 100,
  fullName : {
    first : "Priya",
    last : "Bagde"
  }
}

const {fullName : {first}} = user;
console.log(first); //"Priya"
//Destructuring at deep nested
-------------------------------------------------------------------------------------------
let c = {greeting : "Hey!"}
let d;

d=c;
c.greeting = "Hello"
console.log(d.greeting); //Hello
//We are passing the refrence not the propertues of an object so when we changge the roperty of any object it will reflect in both objects
-------------------------------------------------------------------------------------------
let person = {name : "priya"}
const members = [person]
person = null
console.log(members);// [{"name":"priya"}]

let person = {name : "priya"}
const members = [person]
person.name = null
console.log(members);// [{"name":null}]





//12/12/2022



//Explaination: We try to empty the objecti,e person, but still an array i.e, numbers conatin value so it will not create an impact while assigning null to person.
----------------------------------------------------------------------------------
const person = {name: "priya", age: 1000};
for(const item in person){
  console.log(item); //name, age
}
//Explaination: For in loop give a keys only.
--------------------------------------------------------------------------------------
let data = 3+4+'5';
console.log(data); //"75"
console.log(typeof data); //string
//Explaination: It will add as a string.
------------------------------------------------------------------------------------------
console.log(typeof 3+4+'5'); //"number45"
//Explaination: operation went from left to right side.
----------------------------------------------------------------------------------------
console.log(typeof (3+4+'5')); //"75" //string
console.log(typeof (3+4+  +'5'));//number
//Explaination: To find out the typeof when the all the operation get complete thrn have to enclose in paranethisis. If we add + plus sign to any string it will convert to a number.
----------------------------------------------------------------------------------------
let data = [1,2,3].map( num =>{
  if (typeof num === 'number') return;
  return num*2;
})
console.log(data); //[undefined,undefined,undefined]
//Explaination: If jusr return then it will print undefined.
----------------------------------------------------------------------------------------
function getInfo(member){
  member.name = "priya";
}
const person = {name : "supriya"}
getInfo(person);
console.log(person); //{"name":"priya"}
//Explaination: If we pass an object as argument it will have call by refrence, means having same memory location.
----------------------------------------------------------------------------------------
function Car(){
  this.make = "tata";
  return {make: "kia"};
}
const myCar = new Car();
console.log(myCar.make); //kia
//Explaination: return will overrite the property.If we didn't return then it will print tata.
----------------------------------------------------------------------------------------
(()=>{
  let x = (y = 10);
})()
console.log(typeof x, y); //"undefined" //10
//Explaination: x is a block scope, and we are trying to console x outside of x so that's why undefined.
-----------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})()
console.log(typeof y); //number
//Explaination: x is a block scope, and y is a var because y is not declared so by default it will be var.
----------------------------------------------------------------------------------------
(()=>{
  let x = 10;
})();
(()=>{
  let x = 10;
})();
console.log(typeof x); //undefined
//Explaination: x is a block scope.
---------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})();
(()=>{
  let x = y = 20;
})();
console.log(y); //20
//Explaination: y is a var scope so it will overrite from 10 to 20
-----------------------------------------------------------------------------------------
let x =100;
(()=>{
  var x = 10;
})();
console.log(x); //100
//Explaination: x=10 contain inside a block because we already declare with 100 outside so it will print 100.
-------------------------------------------------------------------------------------------
const func = (function(a){
                   delete a;
                   return a;
               } )(5)
console.log(func);

output: 5
//delete keyword only use with object properties. here a is a variable so it will not work the variable. //delete user.age 
------------------------------------------------------------------------------------------
Dynamic property of object :
const property = "firstName";
const name = "Priya";

const user = {
  property : name //{"property" : "Priya"}
}
console.log(user);

const user1 = {
  [property] : name //dynamic property required [] //{"firstName" : "Priya"}
}
console.log(user1);
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//iterate through keys
for(let item in user){
  console.log(item) //name age
}
//iterate through values
for(let item in user){
  console.log(user[item]) //priya 100
}
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//double the age as 200 //iterate through keys
for(let item in user){
 if(typeof user[item] === "number"){
   user[item]*=2
 }
}

console.log(user)
------------------------------------------------------------------------------------------
const a = {}
const b = {key : "b"}
const c = {key : "c"}

a[b] = 123;
a[c] = 456;
console.log(a[b]); //456

//console.log(a) //{"[object Object]" : 456}
//here object is not converted into a string so printing key as object Object.
//so for both it will be 
//a["[object Object]"] = 123;
//a["[object Object]"] = 456;
//it get override by 456.
------------------------------------------------------------------------------------------
const user = {
  name :"priya",
  age : 100
}
//convert into a string
const str = JSON.stringify(user)
console.log(str)//{'name':'priya','age':100}"

//convert string onto an object
console.log(JSON.parse(str)) //{ name : "priya, "age":100}


*****************
Real Usecases : Storing in local storage. We can't store the object as a value so require to convert into a string.
const user = {
  name :"priya",
  age : 100
}
console.log(JSON.stringify(user)) //convert into a string
console.log(JSON.parse(JSON.stringify(user)))  //convert into an object

localStorage.setItem("testAsKey", JSON.stringify(user)) {"name":"priya","age":100}
localStorage.setItem("testAsKey", user) //[object Object] beacuse we are forcefully trying to convert in a string

JSON.parse(localStorage.getItem("testAsKey")) //will get as a object
------------------------------------------------------------------------------------------
const user = {
  name :"priya",
  age : 100
}
console.log(JSON.stringify(user,["name"])) //"{'name':'priya'}"

//wheen we pass as a array then it will convernt only those properties and ignore rest of the proerties
------------------------------------------------------------------------------------------
const shape = {
  radius : 10,
  diameter(){
    return this.radius*2; //this pointing to shape
  }
 parimeter : () => 2*Math.PI*this.radius; //this pointing to window where it's not exist
}
console.log(shape.diameter()) //20
//console.log(shape.parimeter()) //Nan
-------------------------------------------------------------------------------------------
let user = {
  name : "Priya",
  age : 100
}

const name = "Supriya";
//const {name} = user; //Identifier 'name' has already been declared 
const {name : myName} = user;

console.log(myName) //Priya
-------------------------------------------------------------------------------------------
let user = {
  age : 100,
  fullName : {
    first : "Priya",
    last : "Bagde"
  }
}

const {fullName : {first}} = user;
console.log(first); //"Priya"
//Destructuring at deep nested
-------------------------------------------------------------------------------------------
let c = {greeting : "Hey!"}
let d;

d=c;
c.greeting = "Hello"
console.log(d.greeting); //Hello
//We are passing the refrence not the propertues of an object so when we changge the roperty of any object it will reflect in both objects
-------------------------------------------------------------------------------------------
let person = {name : "priya"}
const members = [person]
person = null
console.log(members);// [{"name":"priya"}]

let person = {name : "priya"}
const members = [person]
person.name = null
console.log(members);// [{"name":null}]
//because we are modifying the property of object
-------------------------------------------------------------------------------------------
Ways to make deep copy:
1. object.assign
2. {...obj}
3. JSON.parse(JSON.stringyfy(obj))
-------------------------------------------------------------------------------------------
console.log(1);

function print(name){
  setTimeout(()=>{
    return `${name}`
  },1000)
}
let value = print("Priya");
console.log(value)

console.log(2);
Reason : It run the code quickly and it will not wait for setTimeout so value will be undefined
---------------------------------------------------
Above code can be fix by callback:
console.log(1);
function print(name, cb){
  setTimeout(()=>{
     cb(`${name}`)
  },1000)
}
print("Priya", (value)=>{
  console.log(value)
});
console.log(2);
-------------------------------------------------------------------------------------------

  
  //13/12/2022
  
  
  
  
  let promises = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let state = true;
    if(state){
      resolve("Resolved Promises!!...");
    }else{
      reject("Rejected Promises!!...");
    }  
  }, 1000)
})
promises.then((res)=>console.log(res))
.catch((err)=>console.log(err))
//resoled!!....
-------------------------------------------------------------------------------------------
console.log(1);

const data = new Promise((resolve, reject)=>{
  console.log(2);
  resolve(3);
})

data.then((res)=>{
  console.log(res)
})

console.log(4); //1 2 4 3
-------------------------------------------------------------------------------------------
console.log(1);

const data = new Promise((resolve, reject)=>{
  console.log(2);
  //resolve(3);
})

data.then((res)=>{
  console.log(res)
})

console.log(4); //1 2 4 
If we are not returning anything it will not print anything .
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let a = "true";
setTimeout(()=>{
  a=false;
}, 2000)

while(a){
  console.log("1")
} 

Reason: 1, 1, 1,...... 
Explanation: Event loop will add setTimeout callback in Macrotask queue and will push it to call stack for execution only when the main thread finishes executing.

Here, since 'a' is true and isn't being set to false anywhere in main thread, the while loop will run infinitely, and setTimeout callback will never get a chance to run.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function run(value, time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(value)
    }, time)
  })
}
async function task(){
  let a = await run(1, 1000); //1value //1 sec
  let b = run(2, 2000); //2value //2 sec
  let c = run(3, 1000);  //3value //execute before b so will not take extra time
  console.log(a + await b+ await c);
}
task()

6 'in 3Sec'

Explanation: In line 10, a setTimeout() timer of 1 sec will be triggered and due to 'await', it will wait for the timer to expire, and after 1 sec, value of a is 1. 

Then since there is no 'await' in line 11 and 12, the 2 timers of 2 sec and 1 sec will be triggered simultaneously. Then in line 14, since b hasn't been resolved, due to await, it will wait for another 2 sec, and since the 2 timers started simultaneously, the other 1 sec timer would already have expired. 

So, after another 2 sec, value of b will be 2, and then immediately after that, value of c will be 3. 

👉 Output : 1 + 2 + 3 = 6
👉 Total time: 1 (line 10) + 2 (await b, in line 14) + 0 (await c, in line 14) = 3 sec
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const fetchData = function(){
  return new Promise((res, reject)=>{
    reject("Error!!")
  })
}

fetchData()
.then(null, (err)=>{
  console.log("First");
  console.log(err);
})
.catch(()=>{
  console.log("Second");
  console.log(err)
})

Explaination : "First" "Error!!"
reject("Error!!") gives string value so it will go to THEN block rather than CATCH block.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
displayName();
var displayName = function(){
  console.log("Priya")
} 
function displayName(){
  console.log("dolly")
}
displayName();

//Explaination : dolly priya

Normal function will get execute before, because of function Hoisting concept, then function expression wil get execute.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const inc = async(x) => {
  x = x + await 1; //2
  return x;
}

const increment = async(x) =>{ 
  x = x+1; //2+1
  return x; //3
}
inc(1)
.then((x)=>{ //2
  increment(x) //2
  .then((x)=>console.log(x)) //3
})
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const p1 = Promise.resolve("First");
const p2 = Promise.reject("Second");
const p3 = Promise.resolve("Third");
const runPromise = async() =>{
  try{
    const res = await Promise.all([p1,p2,p3]);
    console.log(res);
  }
  catch(err){
    console.log(err)
  }
}
runPromise();

//output : Second

Promise.all() returns array of resolved promises values and if either any of the promise is rejected, then it directly returns the rejected promise value through catch block.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("start");

async function getData(){
  console.log("priya");
  return "Dolly";
}

getData()
.then((res)=> console.log(res));

console.log("end");
//start priya end Dolly
//all the console will print first then aync and setTimeout
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const promise = () => Promise.resolve("Success");
function first(){
  promise().then((res)=> console.log(res)); //async
  console.log("First"); //sync
}
async function second(){
  const res = await promise(); 
  console.log(res); //async
  console.log("Second"); //sync
}
first();
second();

// First Sucess success second
// sync(console) run hen async(promise)
//await pause the line of execution
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const person1 = {
  name : "Priya"
}
const person2 = {
  name : "Dolly"
}
const person = Object.assign(person1, person2);

console.log(person); //{"name" : "Dolly"}
console.log(person.name); //Dolly
console.log(person1.name); //Dolly
console.log(person2.name); //Dolly

//Having same key name so, the value is override and it will be "Dolly"

Explanation : As Object.assign() method will add all the key values of person2 to person1 and return the reference of person1 to person and if same key are there they'll be overwritten.
Basically person1 and person are referring to same object.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const calc=(a)=>{
  return (b)=>{
    if(b) return calc(a+b);
    return a;
  }
}
console.log(calc(1)(2)(3)(4)()) //10 currying
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const fetchData = function(){
  return new Promise((res)=> res("One"));
}
let isLoading = true;
fetchData()
.then((result)=>{
  console.log(result);
})
.finally(()=>{
         console.log("Two");
          isLoading = false;
})      
console.log(isLoading)  

//true one two
//console value run first
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

const person = {
  name : "Priya",
  displayName(){
    console.log(this.name) //pointing to the person object
  }
}

const jayesh = Object.create(person)
person.displayName(); //Priya
console.log(jayesh); //{}
jayesh.displayName(); //Priya
I believe Object.create() creates a new object from the existing object, and both have the same memory addresses.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
let p = new Promise((resolve, reject)=>{
   reject(Error("Failed!!"))                    
})

p.catch((error)=>{
  console.log(error); //{}
  console.log(error.message); //failed
}).then((result)=>{
  console.log(result) //undefined //doesn't return anything
})

//Failed!! undefined
Explanation: In line 2, we are rejecting the promise 'p' with the argument as Error("Fails!"), which is an 'Error' object with property 'message' set to 'Fails!'. So, in line 5, the error callback passed to catch() method of promise 'p' receives the above passed Error object as the 'error' parameter, and so 'error.message' (Fails!) is printed. 

Now, as this catch handler is not returning any value so, the chained 'then' handler will be called with undefined as parameter.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* 💡"JavaScript-with-JC" - Guess the Output? */

// 👉 MCQ-1
function MCQ1() {
  const person = {
    name: "Jayesh",
    displayName1: function () {
      console.log("name1", this.name);
    },
    displayName2: () => {
      console.log("name2", this.name);
    },
  };
  person.displayName1();
  person.displayName2();

  // 👍A) name1 Jayesh , name2 Jayesh
  // 💡B) name1 Jayesh , name2 undefined
  // 💖C) name1 Jayesh , name2
  // 😀D) name1 , name2 Jayesh

  /* 
  In window browser answer is C) name1 Jayesh , name2 because arrow function inherits "this" from its outer function where "this" is window.
  and window has by default property name that is used for setting or returning the name of a window and in above case window.name is empty string.
  
  In other compilers answer is B) name1 Jayesh , name2 undefined because arrow function inherits "this" from its outer function where "this" refers to global object.
  */
}
// MCQ1();

// 👉 MCQ-2
function MCQ2() {
  let name = "Jayesh";
  function printName() {
    if (name === "Jayesh") {
      let name = "JC";
      console.log(name);
    }
    console.log(name);
  }
  printName();

  // 👍A) Jayesh     💡B) Jayesh, JC
  // 💖C) JC, JC     😀D) JC, Jayesh

  /* Answer is D) JC, Jayesh because let variables are block scope, name inside if condition will shadow outer name*/
}
// MCQ2();

// 👉 MCQ-3
function MCQ3() {
  var player = "Virat";
  function displayPlayer() {
    if (player === "Virat") {
      var player = "VK";
      console.log(player);
    }
    console.log(player);
  }
  displayPlayer();

  // 👍A) VK, Virat    💡B) VK, VK
  // 💖C) undefined    😀D) VK, undefined

  /* 
   Answer is C) undefined because var variables are functional scope, When displayPlayer fn starts executing, Execution context of
   displayPlayer will be created in callstack and at the memory creation phase var variable player is initialized as undefined. 
   hence if condition will become false and It will print only undefined.
  */
}
// MCQ3();

// 👉 MCQ-4
function MCQ4() {
  const person = {
    name: "Jayesh",
    age: 24,
  };

  const getAge = person.age;
  delete person.age;

  console.log(person);
  console.log(getAge);

  // 👍A) { name: 'Jayesh', age: 24 }, null
  // 💡B) { name: 'Jayesh' }, 24
  // 💖C) { name: 'Jayesh' }, undefined
  // 😀D) { name: 'Jayesh', age: 24 }, 24

  /*
  Answer is B) { name: 'Jayesh' }, 24 because delete keyword deletes property of an object and we are setting getAge as pass by value.
 */
}
// MCQ4();

// 👉 MCQ-5
function MCQ5() {
  // No Strict Mode
  name = "Jayesh"; // window.name ( property of window object )
  console.log(delete name);

  const displayName = (function (name) {
    console.log(delete name); // Local variable of function
    return name;
  })("JC");

  console.log(displayName);

  // 👍A) true, false, JC
  // 💡B) true, true, undefined
  // 💖C) false, false, JC
  // 😀D) false, true, undefined

  /*
  Answer is A) true, false, JC because delete keyword deletes only property of an object. 
  delete keyword can not delete local variables ( declared with var, let, and const ) and functions. 
  delete keyword can delete global variables as they are property of window object.
 */
}
// MCQ5();

// 👉 MCQ-6
function MCQ6() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i;
    };
  }

  console.log(arr[0]());
  console.log(arr[4]());

  // 👍A) 0, 4     💡B) 4, 4
  // 💖C) 5, 5     😀D) TypeError

  /*
  Answer is C) 5, 5 because variables declared with var keyword are function-scoped or globally-scoped but not blocked scoped. 
  Inner function will form the closure and points to the updated value of i that is 5. 
  In the case of Let variable, as they are blocked scoped so inner function will hold different values of i from 0 to 4.
 */

  /* 👇 In the case of Let variable */
  const arrBlock = [];

  for (let i = 0; i < 5; i++) {
    arrBlock[i] = function () {
      return i;
    };
  }

  console.log(arrBlock[0]()); // 0
  console.log(arrBlock[4]()); // 4
}



//14/12/2022



// 👉 MCQ-7
function MCQ7() {
  let person = { name: "Jayesh" };
  const personArray = [person];
  person = null;
  console.log(personArray);

  personArray = [];
  console.log(personArray);

  // 👍A) [ { name: "Jayesh" } ], []
  // 💡B) [ { name: "Jayesh" } ] , TyperError
  // 💖C) [ null ], TypeError
  // 😀D) [ {} ], []

  /*
  Answer is B) [ { name: "Jayesh" } ] , TyperError because person = null will only disconnect the person variable from value { name: "Jayesh"} which is stored in memory, personArray[0] will still point to same value { name: "Jayesh"}.
  and personArray = [] at this line TyperError as const variable can't be redeclared and throws Uncaught TypeError: Assignment to constant variable.  
 */
}
// MCQ7();

// 👉 MCQ-8
function MCQ8() {
  const value = { number: 10 };

  const addition = (x = { ...value }) => {
    console.log((x.number += 5));
  };

  addition();
  addition();
  addition(value);
  addition(value);

  // 👍A) 15, 20, 25, 30    💡B) 15, 15, 20, 25
  // 💖C) 15, 15, 15, 15    😀D) 15, 15, 15, 20

  /*
  Answer is D) 15, 15, 15, 20 because when we call addition function 3rd time with passing value object as an argument, then x will take value as pass by reference and will update number property of original object ( value in this case ) to 15.  
  Hence, while calling addition function 4th time will console 15 + 5 => 20.
 */
}
// MCQ8();

// 👉 MCQ-9
function MCQ9() {
  function makePerson() {
    return {
      userName: "Jayesh",
      ref: this,
    };
  }

  const person = makePerson();
  console.log(person.ref.userName);

  // 👍A) Jayesh      💡B) ""
  // 💖C) undefined   😀D) TypeError

  /*
  Answer is C) undefined because "this" keyword in makePerson function will refer to the window object,
  person.ref.userName is same as Window.userName and no property named with userName is present in window object, Hence It will console undefined.
 */

  // 👇 We can get "Jayesh" as an output by doing small change in above question :-
  function makePerson2() {
    return {
      userName: "Jayesh",
      // 👇 Here, We have assigned a function to ref property of an object, and function's "this" will point to the returned object.
      ref: function () {
        return this;
      },
    };
  }

  const person2 = makePerson2();
  console.log(person2.ref().userName); // Jayesh
}
// MCQ9();

// 👉 MCQ-10
function MCQ10() {
  const user = {
    userName: "Jayesh",
    displayName: function () {
      console.log(this.userName);
    },
  };

  setTimeout(user.displayName, 1000);

  // 👍A) Jayesh     💡B) undefined
  // 💖C) ""         😀D) TypeError

  /*
  Answer is B) undefined because setTimeout is using user.displayName as a callback function rather than object method.
  callback function's "this" will refer to the window object and It will console undefined as there is no property such as userName in the window object.   
  */

  // 👇 We can get "Jayesh" as an output by wrapping the user.displayName() inside a function :-

  setTimeout(function () {
    user.displayName(); // Here, displayName is called by user object ( object method ). Hence, "this" will refer to user object.
  }, 1000);
}
// MCQ10();

// 👉 MCQ-11
function MCQ11() {
  const series = { name: "JavaScript-with-JC" };

  function getSatus(postNumber) {
    return `${this.name} 🌟 ${postNumber}`;
  }

  console.log(getSatus.call(series, 50));
  console.log(getSatus.bind(series, 50));

  // 👍A) JavaScript-with-JC 🌟 50, undefined
  // 💡B) JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50
  // 💖C) JavaScript-with-JC 🌟 50, [Function: bound getSatus]
  // 😀D) JavaScript-with-JC 🌟 50, TypeError

  /*
  Answer is C) JavaScript-with-JC 🌟 50, [Function: bound getSatus] because call, apply and bind methods are used for function borrowing in JavaScript.   
  The call method immediately invokes the borrowed function where as bind method does not invoke the borrowed function immediately, bind method returns a copy of borrowed function
  that can be called later on with or without passing new arguments to it.
  */

  // 👇 We can get 'JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50' as an output by calling borrowed function of bind method :-

  console.log(getSatus.call(series, 50)); // JavaScript-with-JC 🌟 50
  console.log(getSatus.bind(series, 50)()); // JavaScript-with-JC 🌟 50
}
// MCQ11();

// 👉 MCQ-12
function MCQ12() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method(fn) {
      fn();
    },
  };

  person.method(displayName);

  // 👍A) JC           💡B) Jayesh
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is B) Jayesh because displayName function is passed to person object method as a callback function.
  "this" keyword in displayName function will refer to window object and window object has a property "name" with value "Jayesh". Hence, It will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by attaching call method with fn() inside person method :-

  const person2 = {
    name: "JC",
    method(fn) {
      fn.call(this); // borrowing function and passing "this" of person2 object.
    },
  };

  person2.method(displayName); // JC
}
// MCQ12();

// 👉 MCQ-13
function MCQ13() {
  var length = 4;

  function callback() {
    console.log(this.length);
  }

  const object = {
    length: 5,
    method: function () {
      arguments[0]();
    },
  };

  object.method(callback, 2, 3);

  // 👍A) 2     💡B) 3
  // 💖C) 4     😀D) 5

  /*
  Answer is B) 3 because arguments keyword is an array of arguments passed to the function. 
  Here while calling object.method(), we are passing three arguments callback fn(), 2 and 3.
  If we try to console arguments it will look like this 👇

  Arguments(3) [ƒ, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  0: ƒ callback()
  1: 2
  2: 3
  callee: ƒ ()
  length: 3
  Symbol(Symbol.iterator): ƒ values()
  [[Prototype]]: Object

  As we can clearly see, arguments is having length property that is equal to number of arguments passed to function.
  So, arguments[0] is nothing but the first argument passed to function that is callback function in this case.
  As we know, Everything in JavaScript is an object ( arguments is also an object which has length property with value 3 )
  arguments[0]() function's "this" will refer to arguments object. Hence, It will console 3 as an output.
  */
}
// MCQ13();

// 👉 MCQ-14
function MCQ14() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method: displayName.bind(this),
  };

  person.method();

  // 👍A) Jayesh       💡B) JC
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is A) Jayesh because "this" inside the definition for person object does not refer to person object. 
  "this" will refer to the window object here, and binding displayName function with passing window's this  
  as a context will return a copy of bound function that is stored in method property of person object. 
  So, While calling person.method() will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by wrapping displayName.bind(this) inside a function because "this" inside the normal function of an object refers to the object :-

  const person2 = {
    name: "JC",
    method: function () {
      return displayName.bind(this); // Here, "this" refers to the person2 object
    },
  };

  person2.method()(); // JC
}
// MCQ14();

// 👉 MCQ-15
function MCQ15() {
  function show() {
    console.log(this.name);
  }

  const person1 = { name: "Jc" };
  const person2 = { name: "Jayesh" };

  show = show.bind(person1).bind(person2);
  show();

  // 👍A) Jayesh       💡B) undefined
  // 💖C) JC           😀D) TypeError

  /*
  Answer is C) JC because a function which is bound with bind keyword can not be re-bound with other new context, bind chaining does not exist.
  once the function is bound to a particular object, It will always be bound to that object no matter how many times it's further bounded.
  */
}
// MCQ15();

// 👉 MCQ-16
function MCQ16() {
  let person1 = {
    name: { firstName: "Jayesh" },
    age: 24,
  };
  let person2 = { ...person1 };

  person2.name.firstName = "Virat";
  person2.age = 33;

  console.log(person1.name.firstName);
  console.log(person1.age);

  // 👍A) Jayesh, 33     💡B) Jayesh, 24
  // 💖C) Virat, 33      😀D) Virat, 24

  /*
  Answer is D) Virat, 24 because The spread operator makes deep copies of data if the data is not nested. 
  When we have nested data in an array or object the spread operator will create a deep copy of the top most data 
  and a shallow copy of the nested data. 
  person1 and person2 is pointing to different memory address but person1.name and person2.name is pointing to the same memory address

  We Can do Deep copy of nested objects by using:-
  1) const copyObj = JSON.parse(JSON.stringify(originalObj))
  2) const copyObj = structuredClone(originalObj);
*/
}
// MCQ16();


//15/12/2022



// 👉 MCQ-17
function MCQ17() {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      1000,
      i
    );
  }

  // 👍A) 0 1 2 3 4      💡B) 5 5 5 5 5
  // 💖C) 4 4 4 4 4      😀D) 0 1 2 3 4 5

  /*
  Answer is A) 0 1 2 3 4 because as we are passing i ( 0 to 4 ) value as an argument to setTimeout callback function
  therefore this will console different values of i from 0 to 4.

  if there was no argument passed to setTimeout callback function then the output would be 5 5 5 5 5 because variables declared 
  with var keyword are function-scoped or globally-scoped but not blocked scoped. Inner function i would point to the updated value of i that is 5.
*/
}
// MCQ17();

// 👉 MCQ-18
function MCQ18() {
  console.log(1);

  async function fetchData() {
    console.log(2);
    let result = await Promise.resolve(3);
    console.log(result);
  }

  fetchData();
  console.log(4);

  // 👍A) 1 2 3 4      💡B) 1 4 2 3
  // 💖C) 1 2 4 3      😀D) 1 3 4 2

  /*
  Answer is C) 1 2 4 3 beacause promise is used to handle the asynchronous result of an operation and 
  callback functions attached to the promises are stored into microtask queue. 
  So, first synchronous code will be executed i.e 1,2,4 and once callstack is empty, event loop pushes the microtask queue's task into callstack
  callstack will start executing the task and It will console 3 at last.
  */
}
// MCQ18();

// 👉 MCQ-19
function MCQ19() {
  console.log("start");

  const promise = new Promise((resolve) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("end");

  // 👍A) start end 1 3 2      💡B) start 1 3 end 2
  // 💖C) start end 1 2 3      😀D) start 1 end 2 3

  /*
  Answer is B) start 1 3 end 2 beacause The function we pass into the Promise constructor runs synchronously, 
  but anything that depends on its resolution ( resolve or reject ) will be called asynchronously. 
  Even if the promise resolves immediately, any handlers ( callback attached to promise then and catch ) will execute asynchronously. 

  const promise = new Promise((resolve) => {
  console.log(1);  // runs synchronously
  resolve(2); // called asynchronously by then callback
  console.log(3); // runs synchronously
});
*/
}
// MCQ19();

// 👉 MCQ-20
function MCQ20() {
  console.log("First");

  const promise = new Promise((resolve) => {
    console.log("Second");
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("Third");

  // 👍A) First Second undefined Third      💡B) First Third Second
  // 💖C) First Second Third undefined      😀D) First Second Third

  /*
  Answer is D) First Second Third because as there is no resolve in Promise constructor, So it will not go inside of .then block.
  */
}
// MCQ20();

// 👉 MCQ-21
function MCQ21() {
  const fetchData = function () {
    return new Promise((resolve, reject) => {
      reject();
    });
  };

  fetchData()
    .then(() => {
      console.log("Success 1");
    })
    .catch(() => {
      console.log("Error 1");
    })
    .then(() => {
      console.log("Success 2");
    });

  // 👍A) Error 1 TypeError    💡B) Error 1
  // 💖C) Error 1 Success 2    😀D) undefined

  /*
  Answer is C) Error 1 Success 2 because in promise chaining .then method below .catch method will be called if in .catch method we are not 
  returning rejected promise ( by default implicitly returns a promise that is handled by it's below .then method )
  */
}
// MCQ21();

// 👉 MCQ-22
function MCQ22() {
  function foo() {
    let a = (b = 0);
    a++;
    return a;
  }
  foo();
  console.log(typeof a);
  console.log(typeof b);

  // 👍A) undefined number        💡B) ReferenceError number
  // 💖C) undefined undefined     😀D) number number

  /* 
  Answer is A) undefined number because variable a is declared with let it is blocked scope and will be "not defined" outside function foo().
  The typeof operator returns "undefined" even for “undeclared” (or “not defined”) variables.
  Notice that there was no error thrown when we executed typeof a, even though a is an undeclared variable. 
  This is a special safety guard in the behavior of typeof. 
  and variable b is a just global scope variable hence it will be available outside function foo() also. 
  */
}
// MCQ22();

// 👉 MCQ-23
function MCQ23() {
  console.log("start");

  setTimeout(() => {
    console.log("first");
  }, 0);

  Promise.resolve("second").then((res) => console.log(res));

  console.log("end");

  // 👍A) start end first second       💡B) start first second end
  // 💖C) start end second first       😀D) start first end second

  /* 
  Answer is C) start end second first because callback function attached to Promises added into microtask queue 
  whereas callback function of setTimeout added into callback ( macroTask ) queue. 
  microTask queue has more priority than callback ( macroTask ) queue.
  */
}
// MCQ23();

// 👉 MCQ-24
function MCQ24() {
  const person1 = {
    name: "Jayesh",
    age: 24,
  };

  const person2 = person1;
  person2.name = "Virat";

  console.log(person1.name);
  console.log(person2.name);

  // 👍A) Jayesh Virat  💡B) Virat Virat
  // 💖C) Virat Jayesh  😀D) Jayesh Jayesh

  /* 
  Answer is B) Virat Virat because objects are passed as a reference, person1 and person2 will hold the same memory address
  and altering any property of person2 will modify property of person1 as well.
  */
}
// MCQ24();

//19/12/2022


--------------------------------------------------
console.log((x => x)('I love')) //"I love"
console.log(`${(x => x)('I love')} to program`) //"I love to program"
//Explaination : Template Literal used here. We use here arrow function which is returning a string 
----------------------------------------------------
function sumValues(x,y,z){
  return x+y+z;
}
sumValues(...[2,3,4]) //how to call a function so that output will be 9
//Explaination : we can't do like this sumValues(2,3,4).
----------------------------------------------------
const name = "priya is a girl.";
console.log(typeof name); //string
console.log(!typeof name); //false //"priya is a good girl" is a string means thruthy value. Nagation of thruthy is falsy value.
console.log(!typeof name === 'object'); //false
console.log(!typeof name === 'string'); //false
console.log(!typeof name === false); //true
//Explaination : We are using negation mark(!) which will return either true or false only.
----------------------------------------------------
const name = "priya";
const age ="10000";
console.log(isNaN(name)); //true
console.log(isNaN(age)); //false
//Explaination : If it's not a number then return True. If it's a number then return false.
-----------------------------------------------------
let person = {name: "priya"};
Object.seal(person); //post seal, how can you modify the person object
person.age ="1000";
person.name ="supriya";
console.log(person); //{name : "supriya"}
//Explaination : Onceyou use Seal we can't able to add the more keys with values into it.But you can modigy the existing key.
-------------------------------------------------------
let data = [2,9,0,10];
data.shift();//remove first element
console.log(data); //[9,0,10]
data.pop(); //remove last element
console.log(data);//[9,0]
//Explaination : shift and pop use to remove the elements from first and last index.
--------------------------------------------------------
//check the value is even or odd
let a =10;
console.log(a%2===0 ? true : false); //true
//Explaination : Need to divide by 2 and then checking if reminder is zero/one.
----------------------------------------------------------
let data ={ name : "priya"};
delete data.name;
console.log(data); //{}
//Explaination : delete always work with object properties not a object itself.
---------------------------------------------------------
let data ="true";
//convert data into boolean false value
console.log(!data); //false
console.log(typeof !data); //boolean
//Explaination : ! will make boolean value(or opposite value). 
---------------------------------------------------------
let data ="true";
//convert data into boolean true value
console.log(!!data); //true
console.log(typeof !!data); //boolean
//Explaination : ! will make boolean value(or opposite value). 
---------------------------------------------------------
Diff between Map and foreach: Map will return new thing but Foreach didn't return anything.
---------------------------------------------------------
let data = ["piya", "priya", "supriya"];
delete data[1];
console.log(data); //["piya",,"supriya"] //["piya",empty,"supriya"]
console.log(data.length); //3
//Explaination : Whenever element deleted from an object it will create a empty space. Array length will always reain same.
-------------------------------------------------------------
//merge 2 arrays
const a =[1,2,3];
const b =[4,5,6];
const c =[...a, ...b]
console.log(c); //[1,2,3,4,5,6]
//Explaination : using spread operator
----------------------------------------------------------------
const a =[1,2,3];
const b =[3,4,5,6];
const c =[...a, ...b]
console.log(c); //[1,2,3,3,4,5,6]
//Explaination : using spread operator still we can merge and both values will be present in arrays. But in an object, it will take the lates value and assigned to the 1st position of that key.
-------------------------------------------------------------------
let c = 3**3;
console.log(c); //27
console.log(3*3); //9
//Explaination : 3 square 3 means 3*3*3
---------------------------------------------------------------------
let a=2;
setTimeout(()=>{
  console.log(a); //100
},0)
a=100;
//Explaination : Here we are using zero time interval. setTimeout is async function so it will execute at last. Firstly all the sync code will get execute. so that's why 100 is assigned to a.
------------------------------------------------------------------------
let a =2;
let A =30;
console.log(A); //30
//Explaination : a and A both are diff variables.
------------------------------------------------------------------------
let A10="hello";
let 10A ="hi";
console.log(A10); //hello
//console.log(10A); //error
//Explaination : Variable can't start with a number.
------------------------------------------------------------------------
let a="hello";
let b =`hello`;
console.log(a === b); //true
console.log(a == b); //true
//Explaination : Doble code and backticks both are same.
--------------------------------------------------------------------------
let a =1;
let c =2;
console.log(--c === a); //true
//Explaination : --c will be 1 so thats why true.
--------------------------------------------------------------------------
let a =1;
let b =1;
let c =2;
console.log(a === b === -c); //false
//Explaination : a===b gives True. true === -c(number) gives false.
---------------------------------------------------------------------------
console.log(3*3); //9
console.log(3**3); //27
//console.log(3***3); //error
//Explaination : *** doesn't exist in js.
----------------------------------------------------------------------------
console.log(a); //undefined
var a;
//Explaination : We can use VAR variable before its declaration. We didn't assign any value but still by default "undefined" will be store in it.undefined means declared but value didn't initialised.
-----------------------------------------------------------------------------
console.log(a); //not defined
//Explaination : Not defined means variable didn't even declared.Also value is not assogned.
-----------------------------------------------------------------------------
console.log([[[]]]); //[[[]]]
//Explaination : It will print the nested array. We will get 3 nested array and each one have 1 element but at the last array will be empty.
------------------------------------------------------------------------------
How to find Operating system name?
navigator.plateform we can use it. //win32
-------------------------------------------------------------------------------
let for = 100; //Error
//Explaination : For is a reserved keyword.
-------------------------------------------------------------------------------
function fruit(){
  console.log(name); //undefined
  console.log(price); //Error
  var name = "priya";
  let price = 1000;
}
fruit()
//Explaination : Hoisting concept used here. Error because in LET declaration first then only we can use it. but in var we can use brfore its declaration.
-------------------------------------------------------------------------------
for(var i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) // 3,3,3
}
//Explaination : Var is a global variable. Firstly Sync code get executed then async code will start to execute. so i value incremented from 0 to 3 when pointer reaches to setTimeout so it will print 3 thrice time.
---------------------------------------------------
for(let i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) //0 //1 //2
}
//Explaination : LET is a block scope. so it will print 0,1,2. Its having own islocated scope.
----------------------------------------------------
console.log(+true); //1
console.log(typeof +true); //number
//Explaination : if we write + in front of anything then it will convert into a number.
----------------------------------------------------
console.log(!"priya"); //false
console.log(typeof ("priya")); //string
//Explaination : ! will give either true/false.! means false and !! means true.
----------------------------------------------------
let data = "size";
const bird = {size : "small"}
console.log(bird[data]); //small
console.log(bird["size"]); //small
console.log(bird.size); //small
console.log(bird.data); //undefined
//Explaination : If we wants to access variable with object then use [] notation(. notation will not work).
------------------------------------------------------
let c = {name  : "priya"};
let d;
d=c;
c.name = "supriya";
console.log(d.name); //supriya

//Explaination : Using assignment operator we are accessing the same memory allocation. 
-------------------------------------------------------
var x;
var x=10;
console.log(x); //10
//Explaination : Can be declare multiple times.
---------------------------------------------------------
var x;
let x=10;
console.log(x); //Error
//Explaination : Can't be declare multiple times with LET.
----------------------------------------------------------
let a = 3;
let b = new Number(3);
console.log(a == b); //true
console.log(a === b); //false
console.log(typeof b); //object
//Explaination : === will give false because a will give number but b will give an object.
-------------------------------------------------------
let name;
nmae ={}; //wrong variable name i wrote
console.log(name); //undefined
//Explaination : by default it wil be undefined if we declare first.
---------------------------------------------------------
function first(){
  console.log("Woof!!"); //Woof!!
}
first.name = "apple";
first();
//Explaination : To add the property with a function then it will not create a impact.
----------------------------------------------------------
function sum(a,b){
  return a+b;
}
console.log(sum(1, "2")); //12
//Explaination : 2 is passed as a string so it will get concat. num+string = string
------------------------------------------------------------
let num = 0;
console.log(num++); //0
console.log(++num); //2
console.log(num); //2
//Explaination : ++ will increase the value by 1. preincrement and postincrement used here.
--------------------------------------------------------------
function getAge(...args){ //[1000]
  console.log(typeof args); //object
}
getAge(1000);
//Explaination : typeof args means typeof an array means typeof [] is object.
--------------------------------------------------------------
function getAge(){ 
 age = 1000;
 console.log(age); //1000
}
getAge();
//Explaination : if we didn't declare with Var/Let/const then by default it will become as a Var.
------------------------------------------------------------------
function getAge(){ 
  'use strict'
 age = 1000;
 console.log(age); //error
}
getAge();
//Explaination : Use strict wil give a error because it forces to use a proper way of the variable declaration.
----------------------------------------------------------------------
const sum = eval('10*10+5');
console.log(sum); //105
//Explaination : It will perform the numerical operation
----------------------------------------------------------------------------
const obj = {1:"a", 2:"b"}
console.log(obj.hasOwnProperty("1")); //true
console.log(obj.hasOwnProperty(1)); //true
//Explaination : "1" and 1 treat as same.
----------------------------------------------------------------------------
const obj = {a:"one", b: "two", a:"three"}
console.log(obj); // {a:"three", b: "two"}
//Explaination : Key position will be same but tha value get updated with new value in object.
----------------------------------------------------------------------------
for(let i=1; i<5; i++){
  if(i==3) continue;
  console.log(i); //1,2,4
}
//Explaination : If i =3 then it will not execute the code for 3, but can execute for i=4.
------------------------------------------------------------------------------
const foo = () => console.log("first");
const bar = () => setTimeout(()=> console.log("second"));
const baz = () => console.log("third");
bar();
foo();
baz();
//Explaination : first,third, second. Because asyn operation work post all the syn operation get complete.
----------------------------------------------------------------------------
<div onClick="console.log("first div")">
  <div onClick="console.log("second div")">
    <button onClick="console.log("button")">
     Click Me
     </button>
  </div>
</div>
//Explaination : button, second div, first div. Even bubbling happened here.
---------------------------------------------------------------------------
const person = {name:'priya'};
function sayHi(age){
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,21)); //"priya is 21"
console.log(sayHi.bind(person,21)); //it will return a function. //function sayHi(age){  return `${this.name} is ${age}`;}
console.log(sayHi.bind(person,21)()); //"priya is 21"
//Explaination : Bind will always return a function so require to invoke the function.
------------------------------------------------------------------------------
function sayHi(){
  return (()=>0)();
}
console.log(typeof sayHi()); //number
//Explaination : sayHi will return anonymous arrow function/IIFE, where it will return 0. type of 0 is number.
----------------------------------------------------------------------------
function sayHi(){
  return ()=>0;
}
console.log(typeof sayHi()); //function
console.log(typeof sayHi()()); //function
//Explaination : sayHi will return anonymous arrow function/IIFE, where we didn't invole the arroe function so it will return function.
-----------------------------------------------------------------------------
console.log(typeof typeof 1); //string
//Explaination : typeof 1 is a number and typeof number is a string.
-----------------------------------------------------------------------------
const numbers = [1,2,3];
numbers[6]=11;
console.log(numbers); //[1,2,3,,,,11]
//Explaination : Array store elements in a continuous memory location. It will give empty in between an array.
-------------------------------------------------------------------------------
const numbers = [1,2,3];
numbers[9]=numbers;
console.log(numbers); //[1,2,3,,,,.......]
//Explaination: It will print infinite loop.
-------------------------------------------------------------------------------
console.log(!!null); //false
console.log(!!""); //false
console.log(!!1); //true
//Explaination: !null give true and !!null give false. !1 give false and then !!1 give true.
-------------------------------------------------------------------------------
console.log(setInterval(()=>console.log('Hi'), 1000));
console.log(setInterval(()=>console.log('Hi'), 1000));
console.log(setInterval(()=>console.log('Hi'), 1000));
//Explaination: setInterval will give uniques id to stop. It will give like 1,2,3. so it will print 1,2,3,Hi,Hi, Hi, Hi, Hi, .....so on.
------------------------------------------------------------------------------
console.log(setTimeout(()=>console.log('Hi'), 1000));
console.log(setTimeout(()=>console.log('Hi'), 1000));
console.log(setTimeout(()=>console.log('Hi'), 1000));
//Explaination : it will print 1,2,3,Hi,Hi, Hi.
-------------------------------------------------------------------------------
console.log([..."priya"]); //["p","r","i","y","a"]
//Explaination: It will convert into an array.
-------------------------------------------------------------------------------
const firstPromise = new Promise((res, rej)=>{
  setTimeout(res, 500, 'one');
})
const secondPromise = new Promise((res, rej)=>{
  setTimeout(res, 100, 'second');
})
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
//Explaination: Race will return only first matching result so it will print 100. For 500 it will take time to execute so it will not get print.
-----------------------------------------------------------------------------------
let person = {name: "priya"};
const numbers = [person];
person = null;
console.log(numbers, person); // [{name : "priya"}] //null
//Explaination: We try to empty the objecti,e person, but still an array i.e, numbers conatin value so it will not create an impact while assigning null to person.
----------------------------------------------------------------------------------
const person = {name: "priya", age: 1000};
for(const item in person){
  console.log(item); //name, age
}
//Explaination: For in loop give a keys only.
--------------------------------------------------------------------------------------
let data = 3+4+'5';
console.log(data); //"75"
console.log(typeof data); //string
//Explaination: It will add as a string.
------------------------------------------------------------------------------------------
console.log(typeof 3+4+'5'); //"number45"
//Explaination: operation went from left to right side.
----------------------------------------------------------------------------------------
console.log(typeof (3+4+'5')); //"75" //string
console.log(typeof (3+4+  +'5'));//number
//Explaination: To find out the typeof when the all the operation get complete thrn have to enclose in paranethisis. If we add + plus sign to any string it will convert to a number.
----------------------------------------------------------------------------------------
let data = [1,2,3].map( num =>{
  if (typeof num === 'number') return;
  return num*2;
})
console.log(data); //[undefined,undefined,undefined]
//Explaination: If jusr return then it will print undefined.
----------------------------------------------------------------------------------------
function getInfo(member){
  member.name = "priya";
}
const person = {name : "supriya"}
getInfo(person);
console.log(person); //{"name":"priya"}
//Explaination: If we pass an object as argument it will have call by refrence, means having same memory location.
----------------------------------------------------------------------------------------
function Car(){
  this.make = "tata";
  return {make: "kia"};
}
const myCar = new Car();
console.log(myCar.make); //kia
//Explaination: return will overrite the property.If we didn't return then it will print tata.
----------------------------------------------------------------------------------------
(()=>{
  let x = (y = 10);
})()
console.log(typeof x, y); //"undefined" //10
//Explaination: x is a block scope, and we are trying to console x outside of x so that's why undefined.
-----------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})()
console.log(typeof y); //number
//Explaination: x is a block scope, and y is a var because y is not declared so by default it will be var.
----------------------------------------------------------------------------------------
(()=>{
  let x = 10;
})();
(()=>{
  let x = 10;
})();
console.log(typeof x); //undefined
//Explaination: x is a block scope.
---------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})();
(()=>{
  let x = y = 20;
})();
console.log(y); //20
//Explaination: y is a var scope so it will overrite from 10 to 20
-----------------------------------------------------------------------------------------
let x =100;
(()=>{
  var x = 10;
})();
console.log(x); //100
//Explaination: x=10 contain inside a block because we already declare with 100 outside so it will print 100.
-------------------------------------------------------------------------------------------
const func = (function(a){
                   delete a;
                   return a;
               } )(5)
console.log(func);

output: 5
//delete keyword only use with object properties. here a is a variable so it will not work the variable. //delete user.age 
------------------------------------------------------------------------------------------
Dynamic property of object :
const property = "firstName";
const name = "Priya";

const user = {
  property : name //{"property" : "Priya"}
}
console.log(user);

const user1 = {
  [property] : name //dynamic property required [] //{"firstName" : "Priya"}
}
console.log(user1);
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//iterate through keys
for(let item in user){
  console.log(item) //name age
}
//iterate through values
for(let item in user){
  console.log(user[item]) //priya 100
}
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//double the age as 200 //iterate through keys
for(let item in user){
 if(typeof user[item] === "number"){
   user[item]*=2
 }
}

console.log(user)
------------------------------------------------------------------------------------------
const a = {}
const b = {key : "b"}
const c = {key : "c"}

a[b] = 123;
a[c] = 456;
console.log(a[b]); //456

//console.log(a) //{"[object Object]" : 456}
//here object is not converted into a string so printing key as object Object.
//so for both it will be 
//a["[object Object]"] = 123;
//a["[object Object]"] = 456;
//it get override by 456.
------------------------------------------------------------------------------------------




//20/12/2022



//Explaination: We try to empty the objecti,e person, but still an array i.e, numbers conatin value so it will not create an impact while assigning null to person.
----------------------------------------------------------------------------------
const person = {name: "priya", age: 1000};
for(const item in person){
  console.log(item); //name, age
}
//Explaination: For in loop give a keys only.
--------------------------------------------------------------------------------------
let data = 3+4+'5';
console.log(data); //"75"
console.log(typeof data); //string
//Explaination: It will add as a string.
------------------------------------------------------------------------------------------
console.log(typeof 3+4+'5'); //"number45"
//Explaination: operation went from left to right side.
----------------------------------------------------------------------------------------
console.log(typeof (3+4+'5')); //"75" //string
console.log(typeof (3+4+  +'5'));//number
//Explaination: To find out the typeof when the all the operation get complete thrn have to enclose in paranethisis. If we add + plus sign to any string it will convert to a number.
----------------------------------------------------------------------------------------
let data = [1,2,3].map( num =>{
  if (typeof num === 'number') return;
  return num*2;
})
console.log(data); //[undefined,undefined,undefined]
//Explaination: If jusr return then it will print undefined.
----------------------------------------------------------------------------------------
function getInfo(member){
  member.name = "priya";
}
const person = {name : "supriya"}
getInfo(person);
console.log(person); //{"name":"priya"}
//Explaination: If we pass an object as argument it will have call by refrence, means having same memory location.
----------------------------------------------------------------------------------------
function Car(){
  this.make = "tata";
  return {make: "kia"};
}
const myCar = new Car();
console.log(myCar.make); //kia
//Explaination: return will overrite the property.If we didn't return then it will print tata.
----------------------------------------------------------------------------------------
(()=>{
  let x = (y = 10);
})()
console.log(typeof x, y); //"undefined" //10
//Explaination: x is a block scope, and we are trying to console x outside of x so that's why undefined.
-----------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})()
console.log(typeof y); //number
//Explaination: x is a block scope, and y is a var because y is not declared so by default it will be var.
----------------------------------------------------------------------------------------
(()=>{
  let x = 10;
})();
(()=>{
  let x = 10;
})();
console.log(typeof x); //undefined
//Explaination: x is a block scope.
---------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})();
(()=>{
  let x = y = 20;
})();
console.log(y); //20
//Explaination: y is a var scope so it will overrite from 10 to 20
-----------------------------------------------------------------------------------------
let x =100;
(()=>{
  var x = 10;
})();
console.log(x); //100
//Explaination: x=10 contain inside a block because we already declare with 100 outside so it will print 100.
-------------------------------------------------------------------------------------------
const func = (function(a){
                   delete a;
                   return a;
               } )(5)
console.log(func);

output: 5
//delete keyword only use with object properties. here a is a variable so it will not work the variable. //delete user.age 
------------------------------------------------------------------------------------------
Dynamic property of object :
const property = "firstName";
const name = "Priya";

const user = {
  property : name //{"property" : "Priya"}
}
console.log(user);

const user1 = {
  [property] : name //dynamic property required [] //{"firstName" : "Priya"}
}
console.log(user1);
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//iterate through keys
for(let item in user){
  console.log(item) //name age
}
//iterate through values
for(let item in user){
  console.log(user[item]) //priya 100
}
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//double the age as 200 //iterate through keys
for(let item in user){
 if(typeof user[item] === "number"){
   user[item]*=2
 }
}

console.log(user)
------------------------------------------------------------------------------------------
const a = {}
const b = {key : "b"}
const c = {key : "c"}

a[b] = 123;
a[c] = 456;
console.log(a[b]); //456

//console.log(a) //{"[object Object]" : 456}
//here object is not converted into a string so printing key as object Object.
//so for both it will be 
//a["[object Object]"] = 123;
//a["[object Object]"] = 456;
//it get override by 456.
------------------------------------------------------------------------------------------
const user = {
  name :"priya",
  age : 100
}
//convert into a string
const str = JSON.stringify(user)
console.log(str)//{'name':'priya','age':100}"

//convert string onto an object
console.log(JSON.parse(str)) //{ name : "priya, "age":100}


*****************
Real Usecases : Storing in local storage. We can't store the object as a value so require to convert into a string.
const user = {
  name :"priya",
  age : 100
}
console.log(JSON.stringify(user)) //convert into a string
console.log(JSON.parse(JSON.stringify(user)))  //convert into an object
localStorage.setItem("testAsKey", JSON.stringify(user)) {"name":"priya","age":100}
localStorage.setItem("testAsKey", user) //[object Object] beacuse we are forcefully trying to convert in a string
JSON.parse(localStorage.getItem("testAsKey")) //will get as a object
------------------------------------------------------------------------------------------
const user = {
  name :"priya",
  age : 100
}
console.log(JSON.stringify(user,["name"])) //"{'name':'priya'}"
//wheen we pass as a array then it will convernt only those properties and ignore rest of the proerties
------------------------------------------------------------------------------------------
const shape = {
  radius : 10,
  diameter(){
    return this.radius*2; //this pointing to shape
  }
 parimeter : () => 2*Math.PI*this.radius; //this pointing to window where it's not exist
}
console.log(shape.diameter()) //20
//console.log(shape.parimeter()) //Nan
-------------------------------------------------------------------------------------------
let user = {
  name : "Priya",
  age : 100
}

const name = "Supriya";
//const {name} = user; //Identifier 'name' has already been declared 
const {name : myName} = user;

console.log(myName) //Priya
-------------------------------------------------------------------------------------------
let user = {
  age : 100,
  fullName : {
    first : "Priya",
    last : "Bagde"
  }
}

const {fullName : {first}} = user;
console.log(first); //"Priya"
//Destructuring at deep nested
-------------------------------------------------------------------------------------------
let c = {greeting : "Hey!"}
let d;

d=c;
c.greeting = "Hello"
console.log(d.greeting); //Hello
//We are passing the refrence not the propertues of an object so when we changge the roperty of any object it will reflect in both objects
-------------------------------------------------------------------------------------------
let person = {name : "priya"}
const members = [person]
person = null
console.log(members);// [{"name":"priya"}]

let person = {name : "priya"}
const members = [person]
person.name = null
console.log(members);// [{"name":null}]
//because we are modifying the property of object
-------------------------------------------------------------------------------------------
Ways to make deep copy:
1. object.assign
2. {...obj}
3. JSON.parse(JSON.stringyfy(obj))
-------------------------------------------------------------------------------------------
console.log(1);

function print(name){
  setTimeout(()=>{
    return `${name}`
  },1000)
}
let value = print("Priya");
console.log(value)

console.log(2);
Reason : It run the code quickly and it will not wait for setTimeout so value will be undefined
---------------------------------------------------
Above code can be fix by callback:
console.log(1);
function print(name, cb){
  setTimeout(()=>{
     cb(`${name}`)
  },1000)
}
print("Priya", (value)=>{
  console.log(value)
});
console.log(2);
-------------------------------------------------------------------------------------------

  
  
  //21/12/2022
  
  ================================================================================================================================================================================
Code 1: Remove Duplicate characters from String
function removeDuplicateCharacters() {
  var string='priya riya supriya'
  let result= string.split('').filter((item, index, arr)=> {
               return arr.indexOf(item) == index;
               }).join('');
  return result;
}
console.log(removeDuplicateCharacters());
================================================================================================================================================================================
Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object
var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
var unique = [...new Set(arr)]
console.log(unique) //output: [55, 44, 67, 8, 65, 1, 2, 3, 34, 5]
console.log(unique.length) //output: 10
================================================================================================================================================================================
Code 3: Remove Duplicate characters from array of element using filter
var myArray = ['a', 1, 'a', 2, '1'];
var unique = myArray.filter((value, index, arr) => arr.indexOf(value) === index);
================================================================================================================================================================================
Code 4:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split 
and then join().
function removeDuplicates(){
   var string ="India is my country"
   let result = string.split('').reverse().join('').split(' ').reverse().join(' ')
   return result
}
console.log(removeDuplicates()) 
output = "aidnI si ym yrtnuoc"
------------------------------------------
var reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
};
console.log(reverseWords("priya bagde"))
================================================================================================================================================================================
Code 5:String reverse with reversing of individual words
function withoutReverse(){
   var string ="India is my country"
   let result = string.split('').reverse().join('')
   return result
}
console.log(withoutReverse())
output = "yrtnuoc ym si aidnI"
================================================================================================================================================================================
Code 6:String reverse without using inbult function
function Reverse(){
   var string ="India is my country";
   var result="";
   for( var i=string.length-1; i>=0 ; i-- ) {
      result=result+string[i] }
   return result
}
console.log(Reverse())
output = "yrtnuoc ym si aidnI"
================================================================================================================================================================================
Code 7: Find factorial of user input number
const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) { console.log('Error! Factorial for negative number does not exist.')}
else if (number === 0) { console.log(`The factorial is 1.`)}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial is ${fact}.`);
}
================================================================================================================================================================================
Code 8:Anagram
function checkStringsAnagram() {
var a="Army";
var b="Mary"
   let str1 =  a.toLowerCase().split('').sort().join('');
   let str2 =  b.toLowerCase().split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } 
   else { 
      console.log("False");
   }
}
================================================================================================================================================================================
Code 9: Swapping of 2 numbers with third variable
let a=10;
let b=20;
let c;
   c=a;
   a=b;
   b=c;
console.log (a,b,c)
================================================================================================================================================================================
Code 10: Swapping of 2 numbers without third variable
let a=10; 
let b=20;
   a=a+b //30
   b=a-b //10
   a=a-b //20
console.log (a,b)
================================================================================================================================================================================
Code 11: To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method
function checkPalindrome(){
  const string = "anmna"
  let arr= string.split('').reverse().join('')
  //console.log(arr)
  if (string==arr){
      console.log("Palindrome")
  }
  else{
      console.log("Not Palindrome")
  }
}
checkPalindrome()
================================================================================================================================================================================
Code 12: To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing
function checkPalindrome(){
   const string = "12321"
   let len = string.length;
   for (i=0; i<len/2;i++){
     if (string[i]!==string[len-1-i]){
         console.log("Not Palindrome")
     }
     else{
         console.log(" Palindrome")
    }
   }
}
checkPalindrome()
================================================================================================================================================================================

  //22/12/2022
  
  
  
  
  
  Code 13: To find longest word from a string using (for of) /*for(var i=0; i>=num; i++) means iterate by indexing*/  /*for (var word of words) means iterate by an elements not 
by indexing*/
function longestWord(){
   let string = "supriya is a masooooom good girl"
   var words= string.split(' ')
   var longest=" "
   for(var word of words){
        console.log(word)
        if (word.length > longest.length)
        {
            longest=word;
         }
   }
    return longest.length
}
longestWord()
---------------------------
function longestWord(){
   let string = "supriya is a hahahahaha good girl"
   var arr= string.split(' ')
   var longest=" "
   for(var i=0; i<arr.length; i++){
      
        if (arr[i].length > longest.length)
        {
            longest=arr[i];
        }
   }
   return longest
}
console.log(longestWord())
================================================================================================================================================================================
Code 14: To find longest word from a string using functions
function findLongestWord() {
  var str = "Priya is a goog girl and having hardworking skill"
  var longestWord = str.split(' ').sort((a, b) => {return b.length - a.length }); //in desc order //from greater to smallest word
     console.log(longestWord[0]);
     console.log(longestWord[0].length); 
}
findLongestWord();
================================================================================================================================================================================
Code 15: To find longest word from a string using custom code
function longest() {
  var str ="Priya is a good girl and having hardworking skills"
  var words = str.split(' ');
  var longest = ''; 
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]; 
    }
  }
  console.log(longest)
  return longest;
}
longest();
================================================================================================================================================================================
Code 16: To find longest common string from array of strings
function longestCommonString(){
  array=["go","google","gosh"]
  var arr = array.sort()
  var i=0;
  while(arr[0].length>0 && arr[0].charAt(i)===arr[arr.length-1].charAt(i)){
    i++;
  }
  console.log(arr[0].substring(0,i)) // "go"
  return arr[0].substring(0,i)
}
longestCommonString() 
--------------------------------------------------------------------
function longestCommonString(){
  array=["got","google","gosh"]
  var arr = array.sort()
  var i=0;
  while(arr[0].length>0 && arr[0][i]===arr[arr.length-1][i]){
    i++;
  }
  console.log(arr[0].slice(0,i))
}
longestCommonString() 
--------------------------------------------------------------------
function longestCommonString(){
 let array=["go","google","gosh"]
  var arr = array.sort((a,b)=>a.length-b.length)
  let result =""
  for(let i=0; i<arr[0].length; i++){
    if(arr[0][i]===arr[arr.length-1][i]){
      result+=arr[0][i]
    }
  }
  return result
}
console.log(longestCommonString())
================================================================================================================================================================================
Code 17: To find vowels and its count in a given string
function vowelCounts(){
  vowels=["a","i","e","o","u"]
  var str ="priya"
  count=0;
  for(var letter of str.toLowerCase())
  {
    if(vowels.includes(letter))
    {
      count++;
      console.log(letter)
    }
  }
  console.log(count)
  return count
}
vowelCounts()
================================================================================================================================================================================
Code 18:To find character occurance fro the string
function characterOccurance(str,letter){
   let count =0;
  for(var i=0; i<str.length-1; i++){
    if(str.charAt(i)===letter)
      {
        count++
      }
  }
  console.log(count)
  return count
}
characterOccurance("priyapri", "p")
================================================================================================================================================================================
Code 19: To find a first pair whose sum is zero
function getSumPairZero(array)
{
  for(let number of array)
  {
     for(let i=1; i<array.length; i++)
     {
         if(number+array[i]===0)
         {
            return [number, array[i]]
         }
     }
  }
}
const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])
console.log(result)
------------------------------------------------
function getSumPairZero(array)
{
  for(let j=0; j<array.length;j++)
  {
     for(let i=1; i<array.length; i++)
     {
         if(array[j]+array[i]===0)
         {
            return [array[j], array[i]]
         }
     }
  }
}
const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])
console.log(result)
================================================================================================================================================================================
Code 20: To find a first pair whose sum is zero using indexing //Firstly do a sort here
function getSumPairZero(array)
{
  let left = 0;
  let right = array.length-1;
  while(left<right)
  {
    sum = array[left]+array[right]
    if(sum===0){
       return [array[left],array[right]]
    }else if(sum>0){
      right--;
    }else{
      left++;
    }
  }
}
const result = getSumPairZero([-5,-4,-3,-2,-1,0,2,4,6,8])
console.log(result)
================================================================================================================================================================================
Code 21: To find the largest pair of the 2 elements using indexing with unsorted elements
function largestPairSumofTwo(numbers){
    const num = numbers.sort((a, b) => b - a);
    console.log(num)
    return num[0] + num[1];
}
const result = largestPairSumofTwo([9,7,8,4,5,6,1,2,3])
console.log(result)
================================================================================================================================================================================
Code 22: To find the largest pair of the 2 elements using indexing with sorted elements
function largestPairSumofTwo(num){   
    return num[num.length-1] + num[num.length-2];
}
const result = largestPairSumofTwo([1,2,3,4,5,6,7,8,9])
console.log(result)
================================================================================================================================================================================
Code 23: To find the index of an element from an array
const letters = ['a', 'b', 'c']
const index = letters.indexOf('b')
console.log(index) // `1`
================================================================================================================================================================================
Code 24: Fibonacci Series (0,1,1,2,3,5,8,13....)
function fibonacciSeries(){
   const number = parseInt(prompt('Enter the number of terms: '));
   let n1 = 0, n2 = 1, nextTerm, arr=[]
   arr.push(n1)
   arr.push(n2)
   for (let i = 1; i <= number; i++) 
   {
     console.log(n1);
     nextTerm = n1 + n2;
     n1 = n2;
     n2 = nextTerm;
     arr.push(nextTerm)
   }
   return arr
}
console.log(fibonacciSeries())
================================================================================================================================================================================
Code 25: Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array
function listFibonacci(n) {
var arr = [0, 1]
  for (var  i = 1; i < n; i++) 
    arr.push(arr[i] + arr[i - 1])

  return arr
}
console.log(listFibonacci(4))
-----------------------------------------------------------------------
function listFibonacci(n) {
var arr = [0, 1]
  for (var  i = 0; i < n; i++) 
    arr.push(arr[i] + arr[i + 1])

  return arr
}
console.log(listFibonacci(4))
================================================================================================================================================================================
Code 26: Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)
function missingElement(){
  var a = [1,2,5]
  var missing = [];
  for (var i = 1; i <= 6; i++) 
   {
    if (a.indexOf(i) == -1) 
     {
       missing.push(i); 
     }
   }
 console.log(missing) //missing array
 console.log(a.concat(missing).sort()); //actual+missing elements
}
missingElement()
================================================================================================================================================================================
Code 27: Find the missing no. in an array
function missing(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x = x + 1;
        if (arr[i] != x) {
            return(x); //9
        }
    }
}
missing([1, 2, 3, 4, 5, 6, 7, 8, 10])
-------------------------------------------
function missing(arr) {
    for (var i = 0, x=1; i < arr.length; x++,i++) {
        if (arr[i] != x) { //index value comparing with pointer
            return x; //9
        }
    }
}
console.log(missing([1, 2, 3, 4, 5, 6, 7, 8, 10]))
================================================================================================================================================================================
Code 28: Sorting of an string/character
function sorting(arr) {
 return  arr.sort()
}
console.log(sorting(["d","g","y","e","r","p"]))
================================================================================================================================================================================
Code 29: Sorting of an number
function sorting(arr) {
 return  arr.sort((a,b)=>{return a-b}) 
}
console.log(sorting([1,23,34,2,76,78])) //[1, 2, 23, 34, 76, 78]
================================================================================================================================================================================
Code 30: To check if given number is prime or not
function isPrime(num) {
  if(num < 2) return false;
  for (let k = 2; k < num; k++){
    if( num % k == 0){ return false}
  }
  return true;
}
console.log(isPrime(17)) //true
=======================================================================================================================================
  
  
  //26/12/2022
  
  
  Code 31: To print all the numbers from 2 to 100
for (let i = 2; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
--------------------------------------
for (let i = 2; i <= 100; i++) 
{
    let flag = 0;
    for (let j = 2; j < i; j++) { //2<2 //2<3 //3<4
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) 
    {
        document.write(i+ "</br>");
    }
}
================================================================================================================================================================================
Code 32: To find unique values from 2 arrays and keep into one array.
function uniqueElements(arr1,arr2){
   let arr =[...arr1,...arr2];
   let array =[...new Set(arr)]
   console.log(array)
}
uniqueElements([1,2,3,4,4],[2,3,4,5,6])
================================================================================================================================================================================
Code 33: Find first duplicate element from an array
function firstDuplicate() {
    let arr = [1,2,2,5,5];
    let data = {};
    for (var item of arr) {
        if (data[item]) {
            return item
        } else {
            data[item] = item
            console.log(data[item])
        }
    }
    return -1
}
console.log(firstDuplicate()) 
================================================================================================================================================================================
Code 34: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
For numbers which are multiples of both three and five, print "FizzBuzz"
for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
================================================================================================================================================================================
Code 35: Uppercase of each first letter of a words 
function upperCaseFirsstLetter(){
   var string ="India is my country";
   var words = string.toLowerCase().split(" ")
   for( var i=0; i<words.length; i++) {
      words[i]=words[i][0].toUpperCase() + words[i].slice(1) //slice is used here to give all the letters except first letter.
      }
   return words.join(" ")
}
console.log(upperCaseFirsstLetter())
================================================================================================================================================================================
Code 36: Uppercase of each first letter of a words using map function
function upperCaseFirsstLetter(){
   var string ="India is my country";
   var words = string.toLowerCase().split(" ").map((ele)=>{
               return ele[0].toUpperCase() + ele.slice(1)
   })
   return words.join(" ")
}
console.log(upperCaseFirsstLetter())
================================================================================================================================================================================
Code 37: To check ending of the string with given character/s using inbuild function
function confirmEnding(str,target){
   return str.endsWith(target) //true
}
console.log(confirmEnding("priya","a"))
===============================================================================================================================================================================
Code 38: To check ending of the string with given character/s using custom
function confirmEnding(str,target){
   return str.substr(-target.length)===target
}
console.log(confirmEnding("priya","a"))
===============================================================================================================================================================================
Code 39: To find the largest elements fro the 2 dimensional array 
function largestFromArray(arr){
   var max=[];
   for(var i=0; i<arr.length;i++){
     var tempMax =arr[i][0] //first elements of the 4 internal arrays i,e(1,5,45,89
     for(var j=0; j<arr[i].length; j++){
        var currElement = arr[i][j];
        if(currElement>=tempMax){
          tempMax = currElement
        }
     }
      max.push(tempMax)
   }
  console.log(max)
   return max;
}
largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]])
================================================================================================================================================================================
Code 40: To find the largest elements fro the 2 dimensional array in another way
function largestFromArray(arr){
   var max=[0,0,0,0];
   for(var i=0; i<arr.length;i++){
      for(var j=0; j<arr[i].length; j++)
      {
          if(arr[i][j]>=max[i]){
          max[i] = arr[i][j]
        }
      }
   }
  console.log(max)
  return max;
}
largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]])
================================================================================================================================================================================
  
  

  
  
  //27/12/2022
  
  
  
  
  
  Code 41: Print string n times using inbuilt function
function repeatStrinNumTimes(str, num){
if (num<1) return ""
return str.repeat(num)
}
console.log(repeatStrinNumTimes("priya",3))
================================================================================================================================================================================
Code 42: Print string n times in custom way
function repeatStrinNumTimes(str, num){
var final="";
if(num<0) return ""
for(var i=0; i<num;i++)
{
  final=final+str
}
return final
}
console.log(repeatStrinNumTimes("priya",3))
================================================================================================================================================================================
Code 43:Print string n times in custom way
function repeatStrinNumTimes(str, num){
if(num<0) return ""
if(num===1) return str
return str+ repeatStrinNumTimes(str, num-1)
}
console.log(repeatStrinNumTimes("priya",3))
================================================================================================================================================================================
Code 44: Truncate the string
function truncateString(str, num){
if(num<=3) return str.slice(0,num)
return str.slice(0,num-3)+"..." //retuen only 4 digits thats why subtracted from 3
}
console.log(truncateString("priyabagde",2)) //pr
console.log(truncateString("priyabagde",4)) //p... //retuen only 4 digits
================================================================================================================================================================================
Code 45: Converting one dimensional array into n dimensional array using slice
function chunkArrayInGroup(arr, size){
  var group=[]
  while(arr.length>0){
  group.push(arr.slice(0, size))
  arr = arr.slice(size)
  }
  return group
}
console.log (chunkArrayInGroup(['a','b','c','d'],2)) //[["a", "b"], ["c", "d"]]
================================================================================================================================================================================
Code 46: Converting one dimensional array into n dimensional array using splice
function chunkArrayInGroup(arr, size){
  var group=[]
  while(arr.length>0){
  group.push(arr.splice(0, size))
  }
  return group
}
console.log (chunkArrayInGroup(['a','b','c','d'],2)) //[["a", "b"], ["c", "d"]]
================================================================================================================================================================================
Code 47: To find only truthy values
function removeFalseValue(arr){
 var trueth = []
 for (var item of arr){
   if(item){
      trueth.push(item)
   }
 }
 return trueth
}
console.log(removeFalseValue(["priya", 0 ,"", false, null,undefined, "ate", Nan ,9 ])) //["priya","ate",9]
================================================================================================================================================================================
Code 49:  To find only truthy values using filter
function removeFalseValue(arr){
  return arr.filter((item)=>{
                return item})
}
console.log(removeFalseValue(["priya", 0 ,"", false, null,undefined, "ate", 9 ]))
================================================================================================================================================================================
Code 50: Checking all letters of second words should present in first word, in the same order using include function
function characterPresent(arr){
  var first = arr[0].toLowerCase()
  var second = arr[1].toLowerCase()
  for (var letter of second){
    if(!first.includes(letter)){
      return false
    }
  }
  return true
}
console.log(characterPresent(["hello","hey"]))
================================================================================================================================================================================
Code 51: Checking all letters of second words should present in first word, in the same order using indexOf without indexing i.e for-of loop
function characterPresent(arr){
  var first = arr[0].toLowerCase()
  var second = arr[1].toLowerCase()
  for (var letter of second){
    if(first.indexOf(letter)== -1){ //-1 means not found in array
      return false
    }
  }
  return true
}
console.log(characterPresent(["hello","he"]))
---------------------------------------------------
function characterPresent(arr){
  var first = arr[0].toLowerCase()
  var second = arr[1].toLowerCase()
  for (var i=0; i<second.length; i++){
    if(!first.includes(second[i])){ //-1 means not found in array
      return false
    }
  }
  return true
}
console.log(characterPresent(["hello","he"]))
================================================================================================================================================================================
Code 52: Checking all letters of second words should present in first word, in the same order using indexOf with indexing
function characterPresent(arr){
  var first = arr[0].toLowerCase()
  var second = arr[1].toLowerCase()
  for (var i=0; i<second.length; i++){
    if(first.indexOf(second)== -1){ //-1 means not found in array
      return false
    }
  }
  return true
}
console.log(characterPresent(["hello","he"]))
=============================================
  
  
 //28/12/2022
  
  
  Code 55: Remove Duplicates from 2 arrays using Set
function uniquefromArrays(arr1, arr2){
 let arr = [...arr1, ...arr2]
 let unique = [...new Set(arr)];
 return unique
}
console.log(uniquefromArrays([1,2,3,4], [2,3,4,5])) //[1,2,3,4,5]
================================================================================================================================================================================
code 56: Sum of all numbers from start to end given number
function sumFromStartToEnd(arr){
  var start = Math.min(arr[0], arr[1])
  var end = Math.max(arr[0], arr[1])
  sum =0
  for(var i= start; i<=end; i++){
    sum+=i
  }
  return sum
}
console.log(sumFromStartToEnd([1,4]))
================================================================================================================================================================================
code 57: Remove or Delete elements from an array using various ways
Way 1: Removing Elements from End of a JavaScript Array
       var ar = [1, 2, 3, 4, 5, 6]; 
       ar.length = 4; // set length to remove elements
       console.log( ar ); // [1, 2, 3, 4]
    
Way 2: Removing Elements from Beginning of a JavaScript Array
        var ar = ['zero', 'one', 'two', 'three'];
        ar.shift(); // returns "zero"
        console.log( ar ); // ["one", "two", "three"]
        
Way 3: Using Splice to Remove Array Elements in JavaScript
        var list = ["bar", "baz", "foo", "qux"];
        list.splice(0, 2); // Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].
        
Way 4: Removing Array Items By Value Using Splice
       var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
       for( var i = 0; i < arr.length; i++){ 
           if ( arr[i] === 5) { 
              arr.splice(i, 1); 
           }
       } // [1, 2, 3, 4, 6, 7, 8, 9, 0]
       
       OR
       
        var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
        for( var i = 0; i < arr.length; i++){                             
        if ( arr[i] === 5) { 
            arr.splice(i, 1); 
            i--; 
          }
        } // [1, 2, 3, 4, 6, 7, 8, 9, 0]
        
Way 5: Using the Array filter Method to Remove Items By Value
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        var filtered = array.filter(function(value, index, arr){ 
        return value > 5;
        }); //filtered => [6, 7, 8, 9]
   
Way 6: Making a Remove Method
       function arrayRemove(arr, value) { 
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    var result = arrayRemove(array, 6); // result = [1, 2, 3, 4, 5, 7, 8, 9, 0]
    
Way 7: Explicitly Remove Array Elements Using the Delete Operator
         var ar = [1, 2, 3, 4, 5, 6];
         delete ar[4]; // delete element with index 4
         console.log( ar ); // [1, 2, 3, 4, undefined, 6]
================================================================================================================================================================================
Code 58 : Spiral Matrix Printing | Print the elements of a matrix in spiral form
var input = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];
function run(input, result) {
    // add the first row to result
    result = result.concat(input.shift());
    console.log("res1", result) //[1, 2, 3, 4] //[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7]
    console.log("in1", input)   //[[5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]] // [[10, 11]]

    // add the last element of each remaining row
    input.forEach(function(rightEnd) {
        result.push(rightEnd.pop());
    });
    console.log("res2", result) //[1, 2, 3, 4, 8, 12, 16] //[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11]
    console.log("in2", input)   //[[5, 6, 7], [9, 10, 11], [13, 14, 15]] // [[10]]

    // add the last row in reverse order
    result = result.concat(input.pop().reverse());
    console.log("res3", result) //[1, 2, 3, 4, 8, 12, 16, 15, 14, 13] //[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
    console.log("in3", input)   //[[5, 6, 7], [9, 10, 11]]

    // add the first element in each remaining row (going upwards)
    var tmp = [];
    input.forEach(function(leftEnd) {    
        tmp.push(leftEnd.shift());
    });
    console.log("res4", result) //[1, 2, 3, 4, 8, 12, 16, 15, 14, 13]
    console.log("in4", input)   //[[6, 7], [10, 11]]
    
    result = result.concat(tmp.reverse());
    console.log("temp", temp) //[9, 5]
    console.log("res5", result) //[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]
    console.log("in5", input)   //[[6, 7], [10, 11]]
    
    //again start the function
    return run(input, result); 
}
console.log('result', run(input, [])); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
================================================================================================================================================================================
Code 59: Currying function i.e sum of multiple argument functions //inner function can access outer function variables but outer functions can't able to acceess inner function.
function sum(a){
  return function sum(b){
    return function sum(c){
      return function sum(d){
         return a+b+c+d;
      }
    }
  }
}
console.log(sum(1)(2)(3)(4))

OR

const sum = (a) => (b) => (c) => (d) => a+b+c+d // using ES6
console.log(sum(1)(2)(3)(4))
================================================================================================================================================================================
Code 60: Find SUM, PRODUCT AND AVERAGE of the numbers //accumulation means collection
let arr=[1,2,3,4,5]
let sum = arr.reduce((accum, curr) =>{
    return accum + curr;
})
console.log(sum) //15

OR

let sum = arr.reduce((accum, curr) =>{
    return accum + curr;
},5) // can set initial value as 5 also
console.log(sum) //20


let product = arr.reduce((accum, curr) =>{
    return accum * curr;
})
console.log(product)//120

let average = arr.reduce((accum, curr, index, array) =>{
    let total = accum + curr;
    if(index === array.length-1){
       return total/array.length
    }
    return total
})
console.log(average)//3
================================================================================================================================================================================
Code 61: Convert 2D/3D array into 1D using reduce function and inbuilt function i.e flat
const arr = [
               ['a','b'],
               ['c','d'],
               ['e','f'],
            ]
const flatArr = arr.reduce((accum, curr)=>{
return accum.concat(curr)
})
console.log(flatArr) //["a", "b", "c", "d", "e", "f"]

OR

const arr = [
['a','b'],
['c','d'],
['e',['f','g']],
]
console.log(arr.flat(2)) //["a", "b", "c", "d", "e", "f"] //bydefault 1 hota h as a argument

OR

const arr = [
['a','b'],
['c','d'],
['e',['f',['g','h']]],
]
console.log(arr.flat(3)) //["a", "b", "c", "d", "e", "f", "g", "h"]
================================================================================================================================================================================
code 62: Reverse of a nuber using converting into string
function reverseNumber(input){
return(
    parseFloat(input.toString().split('').reverse().join(''))*Math.sign(input)
)
}
console.log(reverseNumber(123)) //321
================================================================================================================================================================================
code 63: Reverse of a nuber
function reverseNumber(input){
var result=0;
while(input!=0){ //123 //12 //1
    result = result *10; //0*10=0 //3*10=30 // 32*10 =320
    result = result + (input%10) //give reminder // 0+3=3 // 30+2=32 //320+1=321
    input = Math.floor(input/10) //12 //1
   // console.log("in", input)
  }
  
  return result
}
console.log(reverseNumber(123)) //321
================================================================================================================================================================================
code 64: Check Armstrong Number
function CheckArmstrongNum(num){ //153
  var temp = num;
  var result =0;
  var a;
  while(temp>0){ //153 //15 //1
    a= temp%10; //3 //5 //1
    temp= parseInt(temp/10) //15 // 1
    result= result+a*a*a //0+3*3*3 // 27+ 5*5*5 // 27+ 5*5*5 +1*1*1
  }
  if(result==num){
    return true
  }
  return false
}
console.log(CheckArmstrongNum(153)) //3*3*3 + 5*5*5 + 1*1*1 
================================================================================================================================================================================
code 65: To find the closest number in an array
const needle = 5;
const numbers = [1, 10, 7, 2, 4, 9];
numbers.sort((a, b) => {
    return Math.abs(needle - a) - Math.abs(needle - b);
})
console.log(numbers[0]);
================================================================================================================================================================================
code 66: To find the second largest number
function secondLargestNum(arr){
  return arr.sort((a, b)=> b - a )[1]
}
console.log(secondLargestNum(['1', '2', '3', '4', '9']))
================================================================================================================================================================================
code 67: To check whether particular word/number present in sentence or not using inbuilt function
function wordInSentence(str){
  return str.includes("world"); //true
}
console.log(wordInSentence("Hello world, welcome to the universe."))
OR
var nums =[0,1,3,5,6,7,8,9,7]
console.log(nums.includes(9)) //true
OR
var item=3
console.log(nums.some(x => x === item)) //true
================================================================================================================================================================================
code 68: To check whether particular word/number present in sentence or not using custom function
function checkValueExist(arr, item){
  var status = "Not Exist"
  for(var i=0; i<arr.length; i++){
    if(arr[i]===item){
      status = "Exist"
      break;
    }
  }
  return status
}
console.log(checkValueExist(['priya', 'riya', 'supriya'], 'priya'))
================================================================================================================================================================================
code 69: To check wheather property exist or not in object
let student ={
  name : "priya",
  age: 20
}
console.log('name' in student)
OR
console.log(student.hasOwnProperty('name'))
================================================================================================================================================================================
code 70: To dlete the property of an object
let student ={
  name : "priya",
  age: 20,
  city: "pune"
}
delete student.age;
console.log(student)
OR
delete student['name']
console.log(student)
================================================================================================================================================================================
code 71: To find the length of the array in custom way
function findLength(arr){
  var len =0;
  while(arr[len]!==undefined){
    len++
  }
  return len;
}
console.log(findLength([50,60,70,80,90]))
OR
function findLength(arr){
  return arr.length;
}
console.log(findLength([50,60,70,80,90]))
================================================================================================================================================================================
code 72: Star Pattern
for(var i=1; i<=5;i++){ //use to create new row
  for(var j=i; j<=5; j++){ //use to add in existing row
    document.write("*")
  }
  document.write("<br/>")
}
*****
****
***
**
*
================================================================================================================================================================================
code 73: Star Pattern
for(var i=1; i<=5;i++){ //use to create new row
  for(var j=1; j<=5; j++){ //use to add in existing row
    document.write("*")
  }
  document.write("<br/>")
}
*****
*****
*****
*****
*****
================================================================================================================================================================================
code 74: Star Pattern
for(var i=1; i<=5;i++){ //use to create new row
  for(var j=i; j<=5; j++){ //use to add in existing row
    document.write(i)
  }
  document.write("<br/>")
}
11111
2222
333
44
5
================================================================================================================================================================================
code 75: Star Pattern
for(var i=1; i<=5;i++){ //use to create new row
  for(var j=i; j<=5; j++){ //use to add in existing row
    document.write(j)
  }
  document.write("<br/>")
}
12345
2345
345
45
5
================================================================================================================================================================================

  
//29/12/2022
  
  
  code 77: To find the square root
var num = [4, 9, 16, 25, 36]
var result = num.map(Math.sqrt)
console.log(result) //[2,3,4,5,6]
================================================================================================================================================================================
code 78: Make alternate character to upper case
function alternateText(str){
  var char = str.toLowerCase().split('')
      for(var i=0; i <char.length; i=i+2){
         char[i]=char[i].toUpperCase()
      }
  return char.join('')
}
console.log(alternateText("Priya Bagde")) //"PrIyA BaGdE"
OR
let alt = "Priya Bagde"
alt = alt.split("")
  .map((letter,index)=>(index%2)==0 ? letter.toUpperCase(): letter.toLowerCase())
  .join("")
console.log(alt) //"PrIyA BaGdE"
================================================================================================================================================================================
code 79:  To find the negative values in an array or 2D Array
function countNegative(arr){
  let count = 0;
  for(let i=0;i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j]<0){
        count++
      }
    }
  }
  return count;
}
console.log(countNegative([[1,-1],[-1,-1]]))
================================================================================================================================================================================
code 80: Find first repeating character with its index from an array
function firstRepeatingIndex(arr){
  let count = {};
  for(let i=0;i<arr.length; i++){
      if(count[arr[i]])
      {
        console.log("character", arr[i])
        console.log("index", count[arr[i]])
        return count[arr[i]] //if exist
      }
      else
      {
        count[arr[i]]=i //if not exist keep at count
      }
      console.log("count", count) 
    }
  return count   
}
firstRepeatingIndex([1,0,2,3,4,4,5,7,7])

================================================================================================================================================================================
code 81: To find all the subsets of the set
function generateSubsets (arr) { //[1,2]
  let subsets = [];
  for (const item of arr) 
  {
    const tempSubsets = [...subsets];
    console.log("tempSubsets",tempSubsets) //[]//[[1]]
    for (const currSubset of tempSubsets) 
    {
      subsets.push([...currSubset, item]);
      console.log("subsets",subsets) //not came//[[1], [1,2]]
    }
    subsets.push([item]);
    console.log("subsets1",subsets) //[[1]]//[[1], [1,2],[2]]
  }
  subsets.push([]);
  console.log("subsets2",subsets) //[[1], [1, 2], [2], []]
  return subsets;
}
generateSubsets([1, 2]);
OR
function generateSubsets (arr) {
  let subsets = [];
  for (const item of arr) //[1,2] 
  {
    const tempSubsets = [...subsets];//[]//[[1]]
    for (const currSubset of tempSubsets) 
    {
      subsets.push([...currSubset, item]);//not came//[[1], [1,2]]
    }
    subsets.push([item]); //[[1]]//[[1], [1,2],[2]]
  }
  subsets.push([]);//[[1], [1, 2], [2], []]
  return subsets;
}
generateSubsets([1, 2]);
OR
function findAllSubsetsoOfGivenSet(arr) 
{
   var result= arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [value,...set])),
                          [[]]) //[[]] is used to pass initial value
  return result
}
console.log(findAllSubsetsoOfGivenSet([8,9]));
--------------------------------------------------------
function findAllSubsets(arr){
  var result = []
  for(var item of arr){
    let tempSub = [...result]
    for(var curr of tempSub){
      result.push([...curr, item])
    }
    result.push([item])
  }
  result.push([])
  return result
}

console.log(findAllSubsets([1,2]))
================================================================================================================================================================================
Code 82: To find the maximum repetation of the character in a string  
 function maxRepeating(str)
    {
        let count = 0;
        let character = str[0];
        for (let i=0; i<str.length; i++)
        {
            let tempCount = 1;
            for (let j=i+1; j<str.length; j++)
            {
                if (str[i] == str[j]) //if a is equal to a
                tempCount++; //use to find out the counts of character i.e a
            }
            if (tempCount > count)
            {
                count = tempCount;
                character = str[i];
            }
        }
        console.log(count, character)
        return character;
    }
maxRepeating("aaaabbaaccccccccccccccccccde");
================================================================================================================================================================================
Code 83: To find all the missing numbers from an array
function MissingElements(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] - i != arr[0]) //1-0==1 //2-1==1 //6-2!=1 //checking for consecutive numbers
        {
            while (arr[0] < arr[i] - i)//1<4 //2<4 //3<4 //finding missing numbers
            {
                console.log(i + arr[0]);//2+1 //3+1 //3+1
                arr[0]++; //2 //3 //4
            }
        }
    }
}
MissingElements([1,2,6]); //3,4,5
---------------------------------------------
function MissingElements(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[0] != arr[i] - i) 
        {
            while (arr[0] < arr[i] - i)
            {
                console.log(arr[0]+i);
                arr[0]++; 
            }
        }
    }
}
MissingElements([1,2,6])
================================================================================================================================================================================
Code 84: Adding an elements to the array when elements are consecutive numbers
const as = [1,2,3,4];
for (let index = 5; index <= 10; ++index) {
    as.push(index);
}
console.log(as); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
================================================================================================================================================================================
Code 85: Create a new array by adding one to each elements of the existing array
function plusOne(arr){
  var output=[]
    for (let i = 0; i < arr.length; ++i) {
        output.push(arr[i]+1);
    }
  return output
}
console.log(plusOne([1,2,3,4]));
================================================================================================================================================================================
Code 86: To find kth smallest or largest element in an array
function findKthSmallestOrLargest(arr, num) {
  arr.sort(function(a, b) { return a - b});
  console.log(arr)
  console.log("kth smallest", arr[num- 1]) //kth smallest
  console.log("kth largest", arr[arr.length-num]) //kth smallest

};
console.log(findKthSmallestOrLargest([2,1,4,3,6,5,7], 3)); //kth is 3rd //3,5
====================================================================================================================================================================================
Code 87: sort by frequency of the letters
function frequencySort(str) {
   let map = {}
   for (const letter of str) {
      map[letter] = (map[letter] || 0) + 1; //to count the occurance
     };
     console.log(map) //{a: 2,A: 2,b: 3,B: 3,c: 1,C: 1}
   let res = "";
   let sorted = Object.keys(map).sort((a, b) => map[b] - map[a])
   console.log("sorted", sorted)// ["b", "B", "a", "A", "c", "C"]
   for (let letter of sorted) {
      for (let count = 0; count < map[letter]; count++) {
         res += letter
         console.log(res)
      }
   }
   return res;
};
console.log(frequencySort("cCaaAAbbbBBB")); //"bbbBBBaaAAcC"
-------------------------------------------------------------------
function frequencySort(str) {
 let map = {}, res = "", sortedArr;
 for (const letter of str)map[letter]=(map[letter] || 0) + 1; 
 sortedArr = Object.keys(map).sort((a, b) => map[b] - map[a]);
 for (let letter of sortedArr) {
      for (let count = 0; count < map[letter]; count++) {
         res += letter
      }
 }
 return res;
};
console.log(frequencySort("cCaaAAbbbBBB"));
================================================================================================================================================================================
Code 88: To find the OCCURANCE of the character
function frequencySort(str) {
   let map = {}
   for (var i=0; i<str.length; i++) 
   {
     map[str[i]] = map[str[i]] ? map[str[i]]+1 : 1;  //Adding an element to the object, if already present then incrementing by 1
   }
   console.log(map)////{"c":1, "C:1", "a":2, "A":2, "b":3, "B":3}
};
frequencySort("cCaaAAbbbBBB"); 
OR
function frequencySortArr(arr) {
   let map = {}
   arr.forEach((element)=>{map[element] = map[element]+1 || 1 }) // will get occurance of the number
      return [...arr].sort((a,b)=> map[b]-map[a])
};
console.log(frequencySortArr([2,5,67,89,2,3,4,4,4]));  //[4,4,4,2,2,5,67,89,3]
================================================================================================================================================================================
Code 89: Permutation // Need to debug
let perm= (str, result)=> {
  if(str.length==0){console.log("result", result)} //let //lte //elt //etl //tle //tel
  
  for(var i=0; i<str.length; i++){
    let rest= str.substring(0,i)+ str.substring(i+1) 
   // console.log("rest", rest) //et//t//"" //e//"" //lt//t//"" //l//"" //le//e//"" //l//""
    console.log("finalresult",result+str[i])  //l//le//let  //lt//lte  //e//el//elt  //et//etl  //t//tl//tle  //te//tel 
    perm(rest, result+str[i]) 
  }
}
perm('let',''); 
//"result" "let"
//"result" "lte"
//"result" "elt"
//"result" "etl"
//"result" "tle"
//"result" "tel"
================================================================================================================================================================================
Code 90: To find the power of x
   var r = 1, i = 1;
    var b = 2;e =3 ;
    while(i <= e) //1<3//2<3//3=3
    {
        r *= b; //1*2//2*2//4*2
        i++;
    }
console.log(r) //8
OR
let number = 2;
let exponent = 3;
console.log( number ** exponent);
console.log( Math.pow(number, exponent));
================================================================================================================================================================================
Code 91: To find even and odd number by user input
const number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
================================================================================================================================================================================
Code 92: Grouping of an Anagram
let collectAnagrams = (words) => {
    let anagrams = {}
    let collectedAnagrams = []
    for (let word of words)
    {
        let sortedWord = word.split('').sort().join('') //arrange ervery word in alphabetical order
        anagrams[sortedWord] = anagrams[sortedWord]  || [] //console.log(".",anagrams) //creating keys 
        anagrams[sortedWord].push(word) // assigning exact values to keys //console.log("..", anagrams) 
    }
    console.log(anagrams)
    for (let item in anagrams)
    {
        collectedAnagrams.push(anagrams[item])  // add their values as subarrays of the collectedAnagrams array
    }
    return collectedAnagrams
}
console.log(collectAnagrams(['bag', 'gab', 'foo', 'abg', 'oof', 'ofo'])) //[["bag", "gab", "abg"], ["foo", "oof", "ofo"]]
======================================================================================================================
  
  
  
//02/01/2023
  
  
  
  
  Code 1: Remove Duplicate characters from String
function removeDuplicateCharacters() {
  var string='priya riya supriya'
  let result= string.split('').filter((item, index, arr)=> {
               return arr.indexOf(item) == index;
               }).join('');
  return result;
}
console.log(removeDuplicateCharacters());
================================================================================================================================================================================
Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object
var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
var unique = [...new Set(arr)]
console.log(unique) //output: [55, 44, 67, 8, 65, 1, 2, 3, 34, 5]
console.log(unique.length) //output: 10
================================================================================================================================================================================
Code 3: Remove Duplicate characters from array of element using filter
var myArray = ['a', 1, 'a', 2, '1'];
var unique = myArray.filter((value, index, arr) => arr.indexOf(value) === index);
================================================================================================================================================================================
Code 4:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split 
and then join().
function removeDuplicates(){
   var string ="India is my country"
   let result = string.split('').reverse().join('').split(' ').reverse().join(' ')
   return result
}
console.log(removeDuplicates()) 
output = "aidnI si ym yrtnuoc"
------------------------------------------
var reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
};
console.log(reverseWords("priya bagde"))
================================================================================================================================================================================
Code 5:String reverse with reversing of individual words
function withoutReverse(){
   var string ="India is my country"
   let result = string.split('').reverse().join('')
   return result
}
console.log(withoutReverse())
output = "yrtnuoc ym si aidnI"
================================================================================================================================================================================
Code 6:String reverse without using inbult function
function Reverse(){
   var string ="India is my country";
   var result="";
   for( var i=string.length-1; i>=0 ; i-- ) {
      result=result+string[i] }
   return result
}
console.log(Reverse())
output = "yrtnuoc ym si aidnI"
================================================================================================================================================================================
Code 7: Find factorial of user input number
const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) { console.log('Error! Factorial for negative number does not exist.')}
else if (number === 0) { console.log(`The factorial is 1.`)}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial is ${fact}.`);
}
================================================================================================================================================================================
Code 8:Anagram
function checkStringsAnagram() {
var a="Army";
var b="Mary"
   let str1 =  a.toLowerCase().split('').sort().join('');
   let str2 =  b.toLowerCase().split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } 
   else { 
      console.log("False");
   }
}
================================================================================================================================================================================
Code 9: Swapping of 2 numbers with third variable
let a=10;
let b=20;
let c;
   c=a;
   a=b;
   b=c;
console.log (a,b,c)
================================================================================================================================================================================
Code 10: Swapping of 2 numbers without third variable
let a=10; 
let b=20;
   a=a+b //30
   b=a-b //10
   a=a-b //20
console.log (a,b)
================================================================================================================================================================================
Code 11: To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method
function checkPalindrome(){
  const string = "anmna"
  let arr= string.split('').reverse().join('')
  //console.log(arr)
  if (string==arr){
      console.log("Palindrome")
  }
  else{
      console.log("Not Palindrome")
  }
}
checkPalindrome()
================================================================================================================================================================================
Code 12: To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing
function checkPalindrome(){
   const string = "12321"
   let len = string.length;
   for (i=0; i<len/2;i++){
     if (string[i]!==string[len-1-i]){
         console.log("Not Palindrome")
     }
     else{
         console.log(" Palindrome")
    }
   }
}
checkPalindrome()
================================================================================================================================================================================
Code 13: To find longest word from a string using (for of) /*for(var i=0; i>=num; i++) means iterate by indexing*/  /*for (var word of words) means iterate by an elements not 
by indexing*/
function longestWord(){
   let string = "supriya is a masooooom good girl"
   var words= string.split(' ')
   var longest=" "
   for(var word of words){
        console.log(word)
        if (word.length > longest.length)
        {
            longest=word;
         }
   }
    return longest.length
}
longestWord()
---------------------------
function longestWord(){
   let string = "supriya is a hahahahaha good girl"
   var arr= string.split(' ')
   var longest=" "
   for(var i=0; i<arr.length; i++){
      
        if (arr[i].length > longest.length)
        {
            longest=arr[i];
        }
   }
   return longest
}
console.log(longestWord())
================================================================================================================================================================================
Code 14: To find longest word from a string using functions
function findLongestWord() {
  var str = "Priya is a goog girl and having hardworking skill"
  var longestWord = str.split(' ').sort((a, b) => {return b.length - a.length }); //in desc order //from greater to smallest word
     console.log(longestWord[0]);
     console.log(longestWord[0].length); 
}
findLongestWord();
================================================================================================================================================================================
Code 15: To find longest word from a string using custom code
function longest() {
  var str ="Priya is a good girl and having hardworking skills"
  var words = str.split(' ');
  var longest = ''; 
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]; 
    }
  }
  console.log(longest)
  return longest;
}
longest();
================================================================================================================================================================================
Code 16: To find longest common string from array of strings
function longestCommonString(){
  array=["go","google","gosh"]
  var arr = array.sort()
  var i=0;
  while(arr[0].length>0 && arr[0].charAt(i)===arr[arr.length-1].charAt(i)){
    i++;
  }
  console.log(arr[0].substring(0,i)) // "go"
  return arr[0].substring(0,i)
}
longestCommonString() 
--------------------------------------------------------------------
function longestCommonString(){
  array=["got","google","gosh"]
  var arr = array.sort()
  var i=0;
  while(arr[0].length>0 && arr[0][i]===arr[arr.length-1][i]){
    i++;
  }
  console.log(arr[0].slice(0,i))
}
longestCommonString() 
--------------------------------------------------------------------
function longestCommonString(){
 let array=["go","google","gosh"]
  var arr = array.sort((a,b)=>a.length-b.length)
  let result =""
  for(let i=0; i<arr[0].length; i++){
    if(arr[0][i]===arr[arr.length-1][i]){
      result+=arr[0][i]
    }
  }
  return result
}
console.log(longestCommonString())
================================================================================================================================================================================
Code 17: To find vowels and its count in a given string
function vowelCounts(){
  vowels=["a","i","e","o","u"]
  var str ="priya"
  count=0;
  for(var letter of str.toLowerCase())
  {
    if(vowels.includes(letter))
    {
      count++;
      console.log(letter)
    }
  }
  console.log(count)
  return count
}
vowelCounts()
================================================================================================================================================================================
Code 18:To find character occurance fro the string
function characterOccurance(str,letter){
   let count =0;
  for(var i=0; i<str.length-1; i++){
    if(str.charAt(i)===letter)
      {
        count++
      }
  }
  console.log(count)
  return count
}
characterOccurance("priyapri", "p")
================================================================================================================================================================================
Code 19: To find a first pair whose sum is zero
function getSumPairZero(array)
{
  for(let number of array)
  {
     for(let i=1; i<array.length; i++)
     {
         if(number+array[i]===0)
         {
            return [number, array[i]]
         }
     }
  }
}
const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])
console.log(result)
------------------------------------------------
function getSumPairZero(array)
{
  for(let j=0; j<array.length;j++)
  {
     for(let i=1; i<array.length; i++)
     {
         if(array[j]+array[i]===0)
         {
            return [array[j], array[i]]
         }
     }
  }
}
const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])
console.log(result)
================================================================================================================================================================================
Code 20: To find a first pair whose sum is zero using indexing //Firstly do a sort here
function getSumPairZero(array)
{
  let left = 0;
  let right = array.length-1;
  while(left<right)
  {
    sum = array[left]+array[right]
    if(sum===0){
       return [array[left],array[right]]
    }else if(sum>0){
      right--;
    }else{
      left++;
    }
  }
}
const result = getSumPairZero([-5,-4,-3,-2,-1,0,2,4,6,8])
console.log(result)
================================================================================================================================================================================
  
  
  //03/01/2023
  
  
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
  
