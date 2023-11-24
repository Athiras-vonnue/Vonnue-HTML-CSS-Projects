const body=document.body
const slides=document.querySelectorAll(".slide");
const left=document.getElementById("left")
const right=document.getElementById("right")


let activeSlide=0;

setBgColor();
setActiveSlide()

right.addEventListener('click',()=>{
    activeSlide++;
    if(activeSlide>slides.length-1){
        activeSlide=0;
    }


setBgColor();
setActiveSlide()
})
left.addEventListener('click',()=>{
    activeSlide--;
    if(activeSlide<=0){
        activeSlide=slides.length-1;
    }


setBgColor();
setActiveSlide()
})
function setBgColor(){
body.style.backgroundImage=slides[activeSlide].style.backgroundImage
}
// slsetActiveSlideides[activeSlide].classList.add('active')
// right.addEventListener('click',()=>{
//     activeSlide++;
//     slides[activeSlide].classList.add('active')
// setBgColor()

// })  

// left.addEventListener('click',()=>{
//     slides[activeSlide].classList.add('active');
//     activeSlide--
// setBgColor()

// })  

function setActiveSlide(){
    slides.forEach((slide)=>slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}