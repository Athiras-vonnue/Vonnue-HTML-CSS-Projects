const buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
button.addEventListener('click',(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    console.log(x,y)

    //clientX--> horizontal client co-ordinates
    //clientY--> Vertical client co-ordinates

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    //The offsetTop property returns the top position (in pixels) relative to the parent

    console.log(buttonTop,buttonLeft)

    const xInside = x-buttonLeft
    const yInside = y-buttonTop
    console.log(xInside,yInside)

    const circle=document.createElement('span');
    circle.classList.add('circle')
    circle.style.top = yInside +' px'
    circle.style.left = xInside + 'px'
    button.appendChild(circle)

    setTimeout(()=>circle.remove(),500)
   })
})