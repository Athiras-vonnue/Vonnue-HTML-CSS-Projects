let serachbar=document.querySelector(".search");
let searchBtn=document.querySelector('.btn')
let input=document.querySelector('.input')

let clickCount=1;
searchBtn.addEventListener("click",()=>{
    //way 1
    // clickCount++;
    // if(clickCount%2===0){
    // serachbar.classList.add("active")
    // }else{
    //     serachbar.classList.remove('active') 
    // }
    
    //way 2
    serachbar.classList.toggle('active')
    input.focus()
})
