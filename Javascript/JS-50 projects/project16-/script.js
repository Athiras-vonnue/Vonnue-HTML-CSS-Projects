const smallCups=document.querySelectorAll('.cup-small')


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

}