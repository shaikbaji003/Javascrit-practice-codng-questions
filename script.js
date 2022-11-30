// //apply,call,bind methods
// let data={
//     employeename:'Priya',
//     employeeid:"FDS2703",
// }

// let employeedetails = function(City, District){
//     console.log(this.employeename+" "+this.employeeid+'From'+" " +City+" "+District)
// }

// let data1={
//     employeename:'Priya',
//     employeeid:"FDS2703",
// }

// //call

// employeedetails.call(data, "Viz", "Arlapadu");
// //apply
// employeedetails.apply(data1, ['Vij', 'Ntr']);
// //bind
// let myemp = employeedetails.bind(data);
// // myemp();


// //slice(),splice()

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let selected =arr.splice(0,5);//12345
// let selected1 =arr.slice(0,2);//1,2
// // let selected2 =arr.slice(0,8);//12345678
// // let selected3 =arr.slice(8,9);//8


// console.log(selected);
// console.log(selected1);
// console.log(arr)


// //currying

// const mul = (a)=>(b)=> a*b

// console.log(mul(5)(6));

// //pure vs impure

// var x=10;

// function add(x){
//     console.log(x+1)
//     return x+1
// }

// add(20);
// add(10);
// add(40);

// //im[pure]

// function addd(){
//     console.log(x+1)
//     x++
// }
// addd()
// addd()

// addd()
// addd()
// addd()



// //destrcturing

// const obj = {
// 	a: "hello world", // property
// 	b: 42,
// 	c: true
// };
// const {a}= obj

// // console.log(obj)

// //higher order function

// function higherorder(){
//     return function(){
//         return 'this is higher order function'
//     }

// }

// let ab=higherorder()

// console.log(ab);




// let newobj={
//     email:'shaikbaji@gmail.com',
//     name:'baji',
//     id:'d54',
//     address: {
//         city: 'vijayawada',
//         state: 'AP'
//     }
// }

// let {email,name,address:{city}}= newobj

// console.log(city,name,email);
// // let c=Date()
// // console.log(c);


// //push

// let w=[1,5,7,89,45,25];
// let baji=w.splice(0,2);
// console.log("this is line 122", w);

// console.log(baji)



// const sub= (a)=>(b)=> a-b
// console.log(sub(4)(5))



// let fizbuz=(n)=>{
//     for(i=1; i<=n; i++){
//         if(i %3 ===0 && i%5 ===0){
//             console.log('fizbuz')
//         }else if(i%3===0){
//             console.log("fiz");
//         }else if(i%5 ===0){
//             console.log('buzz')
//         }else{
//             console.log(i);
//         } 
//     }
// }
// // fizbuz(15);


// //reverse string
// function reverse(str){
//     let reverse =str.split('').reverse().join('')
//     return reverse;
// }

// console.log(reverse("Baji"));



// let fizzbuz=(n)=>{
//     for(i=1; i<=n; i++){
//         if(i%3 ===0 && i%5 ===0){
//             console.log('fizbuz')
//         }else if(i%3 ===0){
//             console.log('fiz')
//         }else if(i%5 ===0){
//             console.log('buzz')
//         }else{
//             console.log(i)
//         }
        

//     }
// }

// // fizzbuz(18)


// let fizzu=(n)=>{
//     for(i=1; i<=n; i++){
//         if(i%3 ===0 && i%5 ===0){
//             console.log('fizu buzu')
//         }else if(i%3 ===0){
//             console.log('fiz')
//         }else if(i%5 ===0){
//             console.log('buz')
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzu(15);




// //pandrome

// function plaindrome(str){
//    let  plaindrome=str.split('').reverse().join('') === str;
//    return plaindrome;
// }

// console.log(plaindrome("mam"));


// function baaji(){
//     for(i=1; i<=5; i++){
//         console.log('baji')
//     }
// }

// baaji();


// const delay= (n)=>{
//     for(let i=1; i<=n; i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i * 2000);

//     }
// }
// // delay(10);



// const addd2 =(a)=>(b)=> a*b

// console.log(addd2(4)(7))



// const printbaji=(n)=>{
//     for(let i=1; i<=n; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*5000)
//     }
// }

// printbaji(5)

// let delaynum=(n)=>{
//     for(let i=1; i<=n; i++){

//         setTimeout(()=>{
//             console.log('this is line 247',i)
//         },i*5000)
//     }
// }
// // delaynum(5)


// //reverse numbers


// function reversenum(num){
//     return(
//         parseFloat(
//             num.toString().split('').reverse().join('')
//         )*Math.sign(num)
//     )
// }
// // console.log(reversenum(123456789))


// //logical outputbased questions

// //1
// // let abc=[];
// // let def=[];

// // console.log(abc==def);
// // console.log(abc===def);

// //2

// // let abc=[];
// // let def=abc;
// // console.log(abc==def);
// // console.log(abc===def);

// //3
// // let a=[20];
// // let b=[20];

// // console.log(a[0]==b[0]);
// // console.log(a[0]===b[0]);

// //4
// // let z=[1,2,3,4];
// // let a={name:'baji'}
// // console.log(...z);

// //5
// // console.log(typeof NaN);

// //6
// // let data=10 - -10;
// // console.log(data);

// //7
// // const set=new Set([1,1,2,3,4,4,5,2]);
// // console.log(set);

// //8
// // let data={name:'baji'};
// // console.log(delete data.name);

// //9
// // let data={name:'baji'};
// // console.log(delete data);

// //10
// // const data=['peter', 'hari', 'samantha'];
// // const[y]=data;
// // console.log(y);

// //11

// // const data=['peter', 'hari', 'samantha'];
// // const[y]=data; //hoe to get secong element
// // console.log(y);

// //12
// // const data={name:'baji', age:23, skill:'react'}
// // const{age}=data
// // console.log(age);

// //13
// // const data={name:'baji', age:23, skill:'react'}
// // const info={city:'vijayawada', mail:'shaikbaji@gmail.com'}

// // data={...data,...info}
// // console.log(data)//merge two objects

// //14

// // const data={name:'baji', age:23, skill:'react'}
// // const info={city:'vijayawada', mail:'shaikbaji@gmail.com', skill:'js'}
// // //skill is same which skill is print?
// // data={...data,...info}
// // console.log(data)

// //15
// // const name="anil";
// // console.log(name());

// //16
// // const results=false||{}||null;
// // console.log(results);

// //17
// // const result= null||false||' ';
// // console.loglog(result);

// //18
// // const result=[]||0||true;
// // console.log(resultt);

// //19
// // console.log(Promise.resolve(5));

// //20
// // let name='jahir'

// // function getName(){
// //     let name='baji'
// // }
// // getName();

// //21
// // let name='jahir'

// // function getName(){
// //     console.log(name);
// // }
// // getName();

// //22
// // const name='srihan';
// // const age=22;

// // console.log(isNaN(name));
// // console.log(isNaN(age));



// function fix(n){
//     for(i=0; i<=n; i++){
//         if(i%3===0 && i%5===0){
//             console.log('fiz buz')
//         }else if(i%3===0){
//             console.log('fizz');
//         }else if(i%5===0){
//             console.log('buzz')
//         }else(console.log(i))
//     }
// }

// // fix(15);


// function reverseNumber(nummm){
//     return(
//     parseFloat(
//         nummm.toString().split('').reverse().join('')
//     )*Math.sign(nummm)
//     )
// }

// console.log(reverseNumber(7095227142))



// const arrayy=[
    
//     ['name','baji'],
//     ['age','23'],
    
// ]
 

// const out1=Object.fromEntries(arrayy)
// console.log(out1)

// //keeys

// let obj22={}

// // let key='age';

// // obj22[key]= 22;
// //or

// obj22['age']=22;
// console.log(obj22)


// let chars = ['A', 'B', 'A', 'C', 'B'];

// chars.forEach((c,index)=>{
   
//       console.log(`${c}-${index}-${chars.indexOf(c)} `)
// })



// document.querySelector('#grandparent').addEventListener('click',(e)=>{
//     // console.log('grand parent clicked')
//     if(e.target.id === 'child'){
//         console.log("child is clicked")
//     }else  if(e.target.id === 'parent'){
//         console.log("parent is clicked")
//     }else  if(e.target.id === 'grandparent'){
//         console.log("grandparent is clicked")
//     }

// },false)


// // document.querySelector('#parent').addEventListener('click',(e)=>{
// //     console.log('parent is clicked')
// //     e.stopPropagation()

// // },true)


// // document.querySelector('#child').addEventListener('click',()=>{
// //     console.log('child is clicked')

// // },true)



// let newarray=[1,2,3,4,5,6,7]

// for(let i=0; i<=newarray.length; i++){
//     if(newarray[i] === 4){
//        newarray.splice(i,1)
//     }
    
// }
// console.log("this is delete array",newarray);


// //get even num

// let output= newarray.filter((e)=> e %2);
// console.log(output)



// const numofone=(x)=>{

// for(let i=1; i<=x; i++){
//     console.log('baji')
// }


// }

// numofone(15)

// //find each index vlue

// let chars123 = ['A', 'B', 'A', 'C', 'B'];

//              chars123.forEach((c, index)=>{
  
// console.log(`${c}-${index}-${chars123.indexOf(c)}`)
                
// })


// // let chars = ['A', 'B', 'A', 'C', 'B'];

// // chars.forEach((c, index) => {
// //     console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
// // });




// // let uniqueChars = chars.filter((c, index) => {
// //     return chars.indexOf(c) === index;
// // });


// // function num222{
// //     for (let i =1; i <=10 ; i++) {
// //   console.log(i)
// //   }
// //   num2222()

// var input = 10;
// while (input >= 0) {
//  console.log(input);
//  input++;
// }







  //true

  // const veg=passengers.map((pass)=> pass.isVegetarianOrVegan)

  // console.log(veg)

  let chars = ['A', 'B', 'A', 'C', 'B'];
 


  let data=(chars.length = [0]);
  // console.log(data);
  

  //cut array length
  let arr=[4,7,1,4,7,5,1,4,6,8,9]
  // arr.length=5;
  // console.log(arr)


  // console.log(output);

  //remove duplicate

let uniqq= arr.filter((e,index)=>{
   return arr.indexOf(e)=== index
})
// console.log(uniqq.sort((a,b)=> a-b));


//each index value

   arr.forEach((c, index)=>
     console.log(`${c}-${index}- ${arr.indexOf(c)}`)
)




let uniq = ['A', 'B', 'A', 'C', 'B','D','E','E','F'];

let ott= uniq.filter((e, index)=>{

        return uniq.indexOf(e)=== index

})

console.log(ott)
//coma operator



let diff = ['A', 'B', 'A', 'C', 'B','D','E','E','F'];
diff.length=4    

let filtereddata=diff.filter((e, index)=>{
  return   diff.indexOf(e)=== index
})

console.log(filtereddata)
console.log(diff)


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

// //names
// // const detailss=passengers123.map((e)=> e.passengerName);
// // console.log(detailss)






//sum

const sun=(a)=>(b)=>(c)=>a*b/c

console.log(sun(4)(2)(4));

//print 0 to 5

function pri(n){
  for(let i=1; i<=n; i++){
    setTimeout(()=>{
      console.log(i)

    },i*5000)
  }
}
pri(5)

//print 0 to 10

function pret(n){
  for(let i=0; i<=n; i++){
    console.log(i)
  }
}
pret()

const odd=[5,4,2,3]
const ads=odd.filter((x)=> x%2==0)

console.log(ads);


var a=[1,2,3]
a[8]=11;
console.log(a.length)












//interview






function cell(n){
  for(let i=0; i<=n; i++){
    console.log(i)
  }

}
cell(10)

console.log(1-'2'+3); 
console.log('1'+2+3); 


//2
//123


// let fruits=['orange','apple','mango']

// let outputt= fruits.map((item)=> item.fruits)

// console.log(outputt)

//convert array to object
const arrayy = [
    ["name", "baji"],
    ["age", "23"]
   ];
console.log(Object.fromEntries(arrayy));

//print name 10 times  whith each print take 5 sec delay
const printname=(n)=>{
  for(let i=0; i<=n; i++){
      setTimeout(()=>{
          console.log(i)
      },i*5000)
  }
}
printname(10)

//Deelete one item in array
let newarray=[1,2,3,4,5,6,7]

for(let i=0; i<=newarray.length; i++){
  if(newarray[i]===4){
  newarray.splice(i,1)
  }
}
console.log(newarray)

//print numbers without delay
const num=(m)=>{
   for(let i=1; i<=m; i++){
    console.log(i)
   }
}
num(10)


//Sort out the array assinding orser and desending order
let array=[2, 13, 4, 20, 5, 1, 7]
let outputt=ar.sort((a,b)=> a-b);
console.log(outputt);

//Transporm values
let g=5;
let f=4;

[g,f]=[f,g]
console.log(g);
console.log(f);

//apply,call,bind methods
let dat={
  employeename:'Priya',
  employeeid:"FDS2703",
}
let dat1={
employeename:'kareem',
employeeid:"FDS2703",
}

let alldetails= function(city, state){
console.log('Hi'+" "+this.employeename+" "+"from"+" "+city+" "+state)
}

alldetails.call(dat,'vij','ap');
alldetails.apply(dat1,['hyd','ts']);

//duble

let z=[1,2,3,4,5];

let double=z.map((e)=> e*2)

console.log(double);

// reverse a String

function reve(str){
  return str.split('').reverse().join('')
}
console.log(reve('baji'));

//value swaping using destructuring

let x=20, y=30;

[x,y]=[y,x]
console.log(x,y);

//print repeted elements in array
// let diff = ['A', 'B', 'A', 'C', 'B','D','E','E','F'];
    
// let filtered1=diff.filter((e, index)=>{
//   return   diff.indexOf(e) != index
// })

console.log(filtered1);

  //sum each element in array
let a=[1,2,4,5,7,9]
  let output=a.reduce((x,y)=>x+y);


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



  // //logical outputbased questions

// 1
// let abc=[];
// let def=[];

// console.log(abc==def);
// console.log(abc===def);

// 2

// let abc=[];
// let def=abc;
// console.log(abc==def);
// console.log(abc===def);

// 3
// let a=[20];
// let b=[20];

// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);

// 4
// let z=[1,2,3,4];
// let a={name:'baji'}
// console.log(...z);

// 5
// console.log(typeof NaN);

// 6
// let data=10 - -10;
// console.log(data);

// 7
// const set=new Set([1,1,2,3,4,4,5,2]);
// console.log(set);

// 8
// let data={name:'baji'};
// console.log(delete data.name);

// 9
// let data={name:'baji'};
// console.log(delete data);

// 10
// const data=['peter', 'hari', 'samantha'];
// const[y]=data;
// console.log(y);

// 11

// const data=['peter', 'hari', 'samantha'];
// const[y]=data; //hoe to get secong element
// console.log(y);

// 12
// const data={name:'baji', age:23, skill:'react'}
// const{age}=data
// console.log(age);

// 13
// const data={name:'baji', age:23, skill:'react'}
// const info={city:'vijayawada', mail:'shaikbaji@gmail.com'}

// data={...data,...info}
// console.log(data)//merge two objects

// 14

// const data={name:'baji', age:23, skill:'react'}
// const info={city:'vijayawada', mail:'shaikbaji@gmail.com', skill:'js'}
// //skill is same which skill is print?
// data={...data,...info}
// console.log(data)

// 15
// const name="anil";
// console.log(name());

// 16
// const results=false||{}||null;
// console.log(results);

// 17
// const result= null||false||' ';
// console.loglog(result);

// 18
// const result=[]||0||true;
// console.log(resultt);

// 19
// console.log(Promise.resolve(5));

// 20
// let name='jahir'

// function getName(){
//     let name='baji'
// }
// getName();

// 21
// let name='jahir'

// function getName(){
//     console.log(name);
// }
// getName();


