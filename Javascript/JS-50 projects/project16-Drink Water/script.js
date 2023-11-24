const smallCups=document.querySelectorAll('.cup-small');
let percentage=document.getElementById('percentage');
let remained=document.getElementById('remained');
let liters=document.getElementById('liters');


smallCups.forEach((cup, idx)=> {
console.log("hi")
    cup.addEventListener('click',()=>{
    highLightCups(idx)
})
})
function highLightCups(idx){

    if(smallCups[idx].classList.contains('full')&&!smallCups[idx]
    .nextElementSibling.classList.contains('full')){
        idx--;
    }

    smallCups.forEach((cup, idx2)=>{
        // console.log(idx,idx2)
if(idx2<=idx){
    cup.classList.add('full')
}else{
    cup.classList.remove('full')
}
    }
    )
fillBigCup();
}


function fillBigCup(){
let fullCups=document.querySelectorAll('.cup-small.full').length
const totalCups=smallCups.length
console.log(fullCups);
if(fullCups==0){
    percentage.style.visibility="hidden"
    percentage.style.height=0
}
else{
    percentage.style.visibility="visible" 
    percentage.style.height=`${fullCups/totalCups*330}px`
    percentage.innerText=`${fullCups/totalCups*100}%`
}
if(fullCups===totalCups){
    remained.style.visibility="hidden";
    remained.style.height=0
}else{
    remained.style.visibility="visible";
    liters.innerText=`${2-(250*fullCups/1000)}`
}
}


