// console.log("abhi");
// let a=5;
// a=6;
// let c;
// console.log(c);
// console.log(a);
// console.log(b);


// var d=5;
//  d=6;
// console.log(d);


// let myArray=["abhi","lash","avlash","nandu"];
// console.log(myArray);
// console.log(myArray.length);
// console.log(typeof myArray);
// for(let i=0;i<myArray.length;i++){
// console.log(myArray[i]);
// }



//arrayloop instead of avove loop
//  for(x of myArray){
//      console.log(x);
//  }


//array methods
// let variable="DEBUG M M";
// console.log(variable.length);
// console.log(variable.indexOf('M'));
// console.log(variable.lastIndexOf('M'));
// console.log(variable.includes("Debug"));
// console.log(variable.includes("DEBUG"));
// console.log(variable.search("Debug"));
// console.log(variable.search("DEBUG"));
// console.log(variable.includes("Debug"));
// console.log(variable.slice(0,3));
// console.log(variable.slice(0,-5));


//arrowfunctions

// myFunction=val=>val;
// console.log(myFunction(10));

// myFunction=(val)=>val;
// console.log(myFunction(10));
//  function myFunction1(z){
//      return z;
//  }
//  console.log(myFunction1(20));

//object
// let user={
//     name:"abhi",
//     last:"lash"
// };
// console.log(typeof user);
// console.log(user.last);


//array
// let myArray=["A","B"];
// console.log(myArray[1]);


//numbermethods
// let a="5";
// let b=6;
// console.log(typeof(a));
// console.log(typeof(parseInt(a)));
// console.log(typeof(toString(b)));

//arraymethods
// let myArray=["a","b","c","d"];
// myArray.push("e");
// console.log(myArray);
// myArray.unshift("F");
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
// myArray.splice(2,0,"z","y","w");
// console.log(myArray);



//object looping
// let myObj={
//     name:"abhi",
//     last:"last"

// };
// for(x in myObj){
//     console.log(myObj[x]);
// }
// console.log(myObj);


//json conversion to string and object
// let text={
//     first:"abhi",
//     last:"lash"
// };
// console.log(typeof text);

// let stringText=JSON.stringify(text);
// console.log(stringText);
// console.log(typeof stringText);

// let object=JSON.parse(stringText);
// console.log(object);
// console.log(typeof object);



//spreadoperators passing copy of text to variable
// let text={
//     "first":"abhi",
//     "last":"last"
// };
// let variable={...text};
// variable.no=5;
// console.log(text);
// console.log(variable);
// variable.dept="science";
// console.log(text);
// console.log(variable);
// document.write(variable.dept);



//spreadoperatorws another method
// let text={
//     "first":"abhi",
//     "last":"last"
// };
// let variable=Object.assign({},text);
// variable.no=5;
// console.log(text);
// console.log(variable);
// variable.dept="science";
// console.log(text);
// console.log(variable);
// document.write(variable.dept);



//concat and push using spread operators

//const globalPlayer1=["ramu","gopu","sanju"];
//const globalPlayer2=["lash","mash","ash"];
//const globalPlayer=globalPlayer1.concat(globalPlayer2);
//console.log(globalPlayer);
//const globalPlayer=[...globalPlayer1,...globalPlayer2];
//console.log(globalPlayer);
// const globalPlayer=globalPlayer1.concat(globalPlayer2);
//const globalPlayer=[...globalPlayer1,...globalPlayer2];
//console.log(globalPlayer);


//destructuring and rest operators
// //objectdestructiong
// const myObject={
//     id:0,
//     name:"abhi",
//     company:"techversant"
// };
// const {id,name,company}=myObject;
// console.log(name);

//arraydestructuring
// const myArray=["abhi","lash","av"];
// const[first,second,third]=myArray;
// console.log(second);

//rest
// const myObject={
//        id:0,
//         name:"abhi",
//         company:"techversant"
//     };
//     const{id,...rest}=myObject;
//     console.log(rest);
//     console.log(id);



//foreach method highermethod in array of objectsa
// const myObject = [{
//         id: 0,
//         name: "abhi",
//         company: "techversant"
//     },
//     {
//         id: 1,
//         name: "lash",
//         company: "techversant"
//     }
// ];
// const object = myObject.forEach((value, index, array) => {
//     console.log(value);
// });
// const object1=myObject.forEach(function(value,index,array){console.log(value);});
// const object2=myObject.forEach(function(value,index,array){console.log(index);});
// const object3=myObject.forEach(function(value,index,array){console.log(array);});

// const object=myObject.map((value)=>(value));
// console.log(object);
// const object1=myObject.map((value)=>(value.name));
// console.log(object1);

// const object=myObject.filter((value)=>value.id==0);
// console.log(object);



//array reduce
// const array=[15,10,20,22,25,50];
// const newArray=array.reduce((total,value,index,array)=>value=total+value,0);
// console.log(newArray);



// const myObject=[{
//                id:0,
//                name:"abhi",
//                  company:"techversant"
//             },
//                 {
//                     id:1,
//                     name:"lash",
//                     company:"techversant"
//                 }];
//                 const object=myObject.find((value)=>value.name=="lash");
//                 console.log(object);




// const newArray=[12,20,22,32,45,65,43,[23,34,34,23]];
// console.log(newArray.flat(Infinity));
// const array=newArray.sort((a,b)=>a-b);
// const array1=newArray.sort((a,b)=>b-a);
// console.log(array);



// const newArray=[12,20,22,32,45,65,43,[23,34,34,23]];
// const array=newArray.reduce((total,value)=>total+value,0);
// console.log(array);

// let obj = {
//     name: "abhi",
//     no: "lash",
// };
// console.log(typeof (obj));
// for (x in obj) {
//     document.write(obj[x] + "<br>");
// }
// let array = ["abhi", "lash"];
// for (let y of array) {
//     document.write(y + "<br>")
// }

// let obj = [{
//     name: "abhi",
//     id: 0
// }, {
//     name: "lash",
//     id: 1
// }];
// const out = console.log((obj.map((value) => value)));

// console.log(typeof (out));



// obj.forEach(function (value, index, array) {
//     console.log(value.name);
//     console.log(index);
//     console.log(array);
// });

/*let obj = [{
    name: "abhi",
    id: 0
}, {
    name: "lash",
    id: 1
}];
const arr = obj.map((value, index, array) => value.name);
console.log(arr);*/


// localStorage.setItem("name", "abhi");

// let obj = {
//     name: "abhi",
//     id: 0
// };
// localStorage.setItem("data", JSON.stringify(obj));
// document.write(JSON.parse(localStorage.getItem("data")));
// const globalPlayer = {
//     id: 0,
//     company: "techversant"
// };
// // const player1 = {
// //     ...globalPlayer
// // };
// const player1 = Object.assign({}, globalPlayer);
// globalPlayer.company = "infosys";
// console.log(globalPlayer, player1);