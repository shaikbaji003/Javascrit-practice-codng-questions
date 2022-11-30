
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


