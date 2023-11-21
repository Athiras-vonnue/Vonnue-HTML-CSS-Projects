//loops

for(let count=1;count<11;count+=2){
    console.log(count)
}
//problem
for(let i=0;i<=100;i+=10){
    console.log(i)
}
let array=["Hey, How is it going",
            " I'm Great! ",
            "All Good",  
            "same here"               
]
for(let i=0;i<=array.length-1;i++){
    console.log(array[i])
}


//Why random Numbers

// Math.random()=>it generates a random number between 0 and 1(not inclusive of 1)

//ranges from => 0.000-0.9999

//Math.floor=>removes decimal
 //1-6=>range
console.log(Math.floor(Math.random()*6)+1)

//Logical Operators
let likeDocumentaries=true;
let likeStartups=false
function recommendMovie(){
    console.log("Successfully selected movies")
}
if(likeDocumentaries===true || likeStartups===true){
    recommendMovie()
}else{
    console.log("Not selected any movie")
}
//Objects
//complex/composite data types
//key-value pairs

let course={
    title:"Learn css grid for free",
    lesson:16,
    created:"Per Harald Borgen",
    length:63,
    level:2,
    isFree:true,
    tags:["html","css"]

}
console.log(course.title)
console.log(course.lesson)

/*Objects and functions*/

var person={
    name:"John",
    Age:50,
    Country:"US"
}
function logData(){
    console.log(person.name+" is "+ person.Age+"  years  old and live in "+person.Country)}
    logData()

    /* Practise Problem*/

    let passengerAge=68;
    if(passengerAge<6){
        console.log("Free!, No charge requred");
    }
    else if(passengerAge>=6 &&passengerAge<=17){
        console.log("You are elegible for child discount")
    }
    else if(passengerAge>=18 && passengerAge<=26){
        console.log("You are elegible for student discount")
    }
    else if(passengerAge>=27 && passengerAge<=66){
        console.log("We are sorry! you are not elegible for the discounts")
    }
    else{
        console.log("You are elegible for senior citizen discount")
    }
 //problem for foor loop

 let countries=["China","India","USA","Indonesia","Pakistan"]
console.log("The fFive largest countries in the world:")
 for(let count=0;count<countries.length;count++){
    console.log(countries[count])
 }
 // push,pop,shift,unshift
 //Add china and Pakistan to the respective places

 let largeCountries=["Tuvalu","India","USA","Indonesia","Monaco"]
 largeCountries.pop();
 console.log(largeCountries)
 largeCountries.push("Pakistan")
 console.log(largeCountries)
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)
 
//logical operators
let dayOfWeek=13;
let weekDay="Monday"; 

if(dayOfWeek===13&& weekDay==="Friday"){
    console.log("Scary !!!!")
}
else{
    console.log("Smiley!!!")
}
//Rock paers and scissor game==>Random numbers

let hands=["rock","paper","scissor"]


function getHand(){
let randomIndex=Math.floor(Math.random()*3);
return hands[randomIndex]
}
console.log(getHand())

//Sorting...

let fruitsArray=["Apple","Orange","Apple","Orange","Apple","Orange"]
let apple_shelf=document.getElementById("apple-shelf")
let Orange_shelf=document.getElementById("orange-shelf");

for(let i=0;i<fruitsArray.length;i++){
    if(fruitsArray[i]==="Apple"){
        apple_shelf.textContent+=fruitsArray[i] 
    }else{
        Orange_shelf.textContent+=fruitsArray[i]
    }
}


//Functions
let greetings=document.getElementById("greet")

function greetUser(greet){
    greetings.textContent=greet +", Athira"
}
greetUser("Hello") 


function add(n1,n2){
    let sum=0;
    sum=n1+n2;
    return sum;

}
console.log(add(3,4))
console.log(add(9,102))

//Let & const practises

const player="per";
const opponen="Nick";
const game="AmazingFighter"
let points=0;
let hasWon=false

points+=100;
hasWon=true
if(hasWon){
  console.log(`${player} got ${points} points and won the ${game} game`)  
}
//function

let myCourses=["HTML","CSS","JS",'PYTHON']
function myCoursesFunction(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}
myCoursesFunction(myCourses)


//local storage

localStorage.setItem("courses",myCourses);
let corsedEt=localStorage.getItem("courses")
console.log(corsedEt)

//Event listeners

let data=[{
player:"Jane",
score:52
},
{
player:"Mark",
score:41
}
]
console.log(data[0].score)

let score_cont=document.getElementById("score-cont");
let score_data=document.getElementById("score-ele")
console.log(score_cont)

score_cont.addEventListener('click',function(){
   console.log( data[0].score+=1)

})

// score_data.textContent=data[0].score

//sentence generator

function generateSentence(desc,arr){
//    console.log(`The two ${desc} are ${arr}`)
    let baseString=`The ${arr.length} ${desc} are `
    const lastIndex=arr.length-1
    for(let i=0;i<arr.length;i++){
if(i===lastIndex){
        baseString+=arr[i]
}else{
    baseString+=arr[i]+","
}
    }
    console.log(baseString)
}
description="best Fruits";
array=["Apple","cherry"]
generateSentence(description,array)


//Render Images
const imgs=[
    "imoji1.jpeg",
    "imoji2.jpeg",
    "imoji3.jpeg"
]
console.log(imgs)
let container=document.getElementById("container")
console.log(container)
function renderImages(){
    let imgDom="";
for (let i=0;i<imgs.length;i++){
    console.log(imgs[i])
    imgDom+=`<img src="${imgs[i]}">`
}
container.innerHTML=imgDom
}

renderImages()
