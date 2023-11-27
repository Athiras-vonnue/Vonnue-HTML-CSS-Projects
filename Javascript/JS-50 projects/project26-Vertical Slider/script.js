const slider_container=document.querySelector('.slider-container')
const left_slide=document.querySelector('.left-slide')
const right_slide=document.querySelector('.right-slide')
const down_button=document.querySelector('.down-button')
const up_button=document.querySelector('.up-button')
const slidesLength=right_slide.querySelectorAll('div').length

let activeSlideIndex=0;

left_slide.style.top=`-${(slidesLength - 1) * 100}vh`

up_button.addEventListener('click',()=>{
changeSlide('up')
})
down_button.addEventListener('click',()=>{
    changeSlide('down')
    })

function changeSlide(direction){

    const sliderHeight = slider_container.clientHeight
    console.log(sliderHeight)
    if(direction==='up'){
        activeSlideIndex++;

        if(activeSlideIndex > slidesLength - 1 ){
            activeSlideIndex = 0;
        }

    }
     right_slide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
     left_slide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


