// let firstCard=getRandomCard();
// let secondCard=getRandomCard();
let cards=[]
let sum=0;  
let hasBlackJack=false;
let isAlive=false;
let message="";

let message_el=document.getElementById("message-el");
let card_el=document.getElementById("card-el");
let sum_el=document.getElementById("sum-el");

//create the getRandomCard function, that return number between 1 to 13(cards)
function getRandomCard(){
let randomNumber=Math.floor(Math.random()*13)+1;
if(randomNumber>10){
    return 10
}
else if(randomNumber===1){
    return 1
}
else{
    return randomNumber;
}
}


function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
 let secondCard=getRandomCard();
 cards=[firstCard+secondCard]
 sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    card_el.textContent="cards: "
    for(let i=0;i<cards.length;i++){
        card_el.textContent+=cards[i]+" "
          
    }
    sum_el.textContent="Sum: "+ sum
    if(sum<=20){
        message="Do you want to Draw anew card?"

    }else if(sum<=20){
        message="You've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="You're out of the game"
        isAlive=false
    } 
    message_el.textContent=message
}
function newCard(){
     console.log("Drawing a new card from the Deck")
     let card=getRandomCard()
     sum+=card;     
     cards.push(card)
     console.log(cards)
     renderGame()
}




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

if(likeDocumentaries===true || likeStartups===true){
    recommendMovie()
}