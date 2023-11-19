

// var counter=document.getElementById("count").innerText
// let count=8;
console.log(counter);

// let fBatch=1;
// let sBatch=2;
// let sum=fBatch+sBatch
// console.log(sum);

// //prob-2
// var myAge=10;
// var humanDogRatio=3;
// var myDogAge=myAge*humanDogRatio;
// console.log(myDogAge);


// //Problem-3
// var bonusPoints=50;
// console.log(bonusPoints);
// bonusPoints=bonusPoints+50;
// console.log(bonusPoints);
// bonusPoints=bonusPoints-75
// console.log(bonusPoints);
// bonusPoints=bonusPoints+45
// console.log(bonusPoints)

 
function increment(){
    console.log("button clicked");
        counter=Number(counter+1)
        document.getElementById("count").innerText=counter
        // counter=0
    
}
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
//create a function that logs 42

function callFun(){
    console.log(42)
}
 
callFun();

//create a function to find sum of a numbers
function sum(){
var n1=10;
var n2=20;
var n3=15;
var sum=n1+n2+n3
console.log(sum)
}
sum();

//Document Object Model(DOM)
//create save button which logs out the count when its called

function save(){
    console.log(counter)
    // let countStr=counter+"-"
}
//create a variable that stores a string

let username="Athira";
let message="Yo have three notifications"
console.log(message+","+username)

//creat a variable message to user, that contains the message you have logged
 
var msgtoUser=message+","+username;
console.log(msgtoUser)

//create a third variable that contatemnates the two strings
//log my Greetings to the console

let names="Athira"
let greetings="Hi, my name is"
let myGreetings=greetings+" "+names;
console.log(myGreetings);

//coersion

let n1=4;
let n="apple"
console.log(n1+n)// 4apple
console.log(4+5)//9
console.log("2"+"4")//24
console.log("5"+1)//51
console.log(100+"100")//100100

//Render the welcome message

var welcome=document.getElementById("welcome");
console.log(welcome);
welcome.innerText=myGreetings; 

//increment and save previous records

var save_btn=document.getElementById("entries");
console.log(save_btn)

function save(){
    var countstr=counter+"-";
    console.log(countstr)
    save_btn.textContent+=countstr;
    counter=0;
    // save_btn.innerText+=countstr;// save previous entries
    // save previous entries
} 

//create two varables and concatenate and save it in new
var fName="Athira";
var lName="Suresh";
var fullNmae=fName+" "+lName
console.log(fullNmae)

//incrementing and Decrementing
let myPoints=3;

function add3Points(){
 myPoints+=3;

}
function removePoints(){
    myPoints-=1
}
add3Points();
add3Points();
removePoints();
console.log(myPoints)

//Strings and Numbers
console.log("2"+2)//22
console.log(11+7)//18
console.log(6+"5");//65
console.log("my points:"+5+9);//my points:59
console.log(2+2);//4
console.log("11"+"14")//1114
