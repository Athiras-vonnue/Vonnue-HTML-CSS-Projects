const lovMe=document.querySelector('.loveMe')
const times=document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

lovMe.addEventListener('click',(e)=>{
    if(clickTime === 0){
        clickTime=new Date().getTime();
    
    }else{
        if((new Date().getTime() - clickTime) < 800){
            createHeart(e)
            clickTime = 0;
            console.log(123)
        }else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart=(e) => {
    const heart = document.createElement('i');
    heart.classList.add ('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY
    //return the co-ordinates

    console.log(x,y);

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    console.log(leftOffset,topOffset)
    //The offsetLeft property returns the left position (in pixels) relative to the parent.
 const xInside = x - leftOffset;
 const yInside = y - topOffset;

 heart.style.top=`${yInside}px`
 heart.style.left=`${xInside}px`
 
 lovMe.appendChild(heart)

 times.innerHTML = ++timesClicked;

 setTimeout(() => heart.remove(),1000)
}