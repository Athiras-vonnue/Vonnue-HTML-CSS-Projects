let container=document.querySelector(".container")
let closeBtn=document.getElementById("close")
let openBtn=document.getElementById("open")
console.log(openBtn)


openBtn.addEventListener('click',()=>{
    // alert("btn clicked")
    container.classList.add('show-nav')
})
closeBtn.addEventListener('click',()=>{
    container.classList.remove('show-nav')
})
