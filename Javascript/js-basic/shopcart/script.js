
//problem
//When the user clicks the purchase button, render out
// "something went wrong, please try again" in the paragraph that has the id="error"

var errorText=document.getElementById("error")
function purchase(){
console.log("btn clicked");
errorText.textContent="Something went wrong, please try again"
}

//Calculator Challenge
let number1=8;
let number2=4;
document.getElementById("num1").textContent=number1
document.getElementById("num2").textContent=number2
var result=document.getElementById("result")
// number1.innerText=8;
// number2.innerText=4;

var res=0;
function add(){
    res=number1+number2;
    console.log(res)
    result.textContent=res
}
function subtract(){
    res=number1-number2
    result.textContent=res
}
function division(){
    res=number1/number2
    result.textContent=res
}
function multiply(){
res=number1*number2
result.textContent=res
}

//Building BlackJack App

let firstCard=1;
let secondCard=12;
let sum=firstCard+secondCard;
var hasBlackJack=false;
var isAlive=true
let messgae=""
if(sum<21){
    message="Do you want to draw a new card?";
    }
    else if(sum===21){
        messgae="Wohoo! You've got a Black jack";
        hasBlackJack=true
    }
    else{
        message="You're out of the game!";
        isAlive=false
    } 
    console.log(message)
console.log("BlackJAck:",hasBlackJack)
console.log("Alive:",isAlive)

    //problem-check if the person is old enough to attend night club
    //log suitable messages 

     let age=18;
    if(age>=21){
        console.log("You are welcome!")
    }else{
        console.log("You cannot enter the club")
    } 
//check if the person is eligible for getting the birthday card from the King

var personAge=12;
if(personAge<100){
    console.log("You're not eligible to the card")
}
else if(personAge===100){
    console.log("Here is your Birthday card fron King!")
}
else{
    console.log("Not-elegible, you have already gotten one")
}
//Comparison skills

console.log(4===3)//false
console.log(5>2)//true
console.log(12>12)//false
console.log(3<0)//false
console.log(3>=3)//true
console.log(11<=11)//true
console.log(3<=2)//false


 



