const boxes=document.querySelectorAll(".box");

window.addEventListener('scroll',checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBottom=window.innerHeight/5*4
    console.log(triggerBottom)//1179

    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top

        //getBoundingClientRect=>To get the element size and position
       
        // console.log(boxTop)

        if(boxTop < triggerBottom){
            //67<1179
            box.classList.add("show")

        }
        else{
            box.classList.remove('show')
        }
    })

}



s
