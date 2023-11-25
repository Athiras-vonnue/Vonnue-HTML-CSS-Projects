
//canvas API

//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API//

let canvas=document.getElementById('canvas');
let increaseBtn=document.getElementById('increase');
let decreaseBtn=document.getElementById('decrease');
let sizeEl=document.getElementById('size');
let colorEl=document.getElementById('color');
let clearEl=document.getElementById('clear');
const ctx=canvas.getContext('2d');

let size = 10;
let color = 'black'
let x;
let y;
let isPressed=false

canvas.addEventListener('mousedown',(e)=>{
    isPressed = true

    x = e.offsetX;
    y = e.offsetY;

    console.log(x,y)
    //offset=> co-ordinates based on parent
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed = false

    x = undefined;
    y = undefined;

    console.log(x,y)
    //offset=> co-ordinates based on parent
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
     const x2 = e.offsetX;
     const y2 = e.offsetY
    drawCircle(x2, y2);
    drawLine(x ,y, x2, y2)
    x=x2;
    y=y2
        // console.log(x2,y2)
    }
    //offset=> co-ordinates based on parent
})


//Drawing shapes with canvas-mdn docs-circle
function drawCircle(x ,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1 ,y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2 // to get the width of the circle to the line;
    ctx.stroke()
}
drawCircle(100,200)
drawLine(300, 300, 300, 500)


colorEl.addEventListener('change',(e)=>{
    // alert("color")
color=e.target.value
})

function updateSizeOnScreen(){
    sizeEl.innerText=size
}

increaseBtn.addEventListener('click',()=>{
    size+=5;
    if(size > 50){
        size = 50
    }
    updateSizeOnScreen()
   })

   decreaseBtn.addEventListener('click',()=>{
    size -= 5;
    if(size < 5){
        size = 5
    }
updateSizeOnScreen();
   });

   clearEl.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
   })