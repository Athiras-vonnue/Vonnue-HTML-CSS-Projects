const panels=document.querySelectorAll('.panel')
console.log(panels)

//For each

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeClassItem()
panel.classList.add('active')
    })
})

function removeClassItem(){
    panels.forEach(panel=>{
    panel.classList.remove('active')
    
})
}