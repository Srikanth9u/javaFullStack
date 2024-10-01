let val = setInterval(settime,3000);
function settime(){
    alert("hello evry 3 secs");

}

setInterval(val);

// rest parameter

function sumAll(...args){
    let mul =1;
    for (let arg of args){
         mul *= arg;
    }
    return mul;
}

console.log(sumAll(1,2,3));

// spread operator
let user={
    name:"srikanth",
    age:"21",
    weight:50
};

let fun=(...val)=>{
    for (let  key of val){
        console.log(key);
    }
};

fun(user);

function outerFunction(){
    let outer = "i am outside"
    function innerFunction(){
        console.log("i am inside");
    }
    return innerFunction;
}
// outerFunction();
// console.log(outerFunction());
const inner = outerFunction(); 
inner();

// prototype

let cartoon={
    show:"ben 10",
    display(){
        console.log("ben 10 playing");
    }
};

let animi={
    favourite:"pokemon",
    __proto__:cartoon
};
animi.display()
console.log(animi.favourite);

// invite apply bind

function dataaa(greeting,ques){
    console.log(greeting+" i am is srikanth "+ ques);
}

dataaa.call(dataaa,"hello","call method")

dataaa.apply(dataaa,["hello","apply method"])   

let why=dataaa.bind(dataaa,"hello i am srikanth","bind method")
why()
