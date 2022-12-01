
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






