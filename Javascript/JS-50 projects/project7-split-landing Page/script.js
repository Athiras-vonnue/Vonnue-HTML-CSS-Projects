let left=document.querySelector('.left');
let right=document.querySelector('.right');
let splits=document.querySelectorAll('.split');
let container=document.querySelector('.container')


//way1
// left.addEventListener('click',()=>{
//     left.classList.add('hover-left');
//     right.classList.add('hover-left');
// })
// right.addEventListener('click',()=>{
//     left.classList.add('hover-right');
//     right.classList.add('hover-right');
// })
//way2
left.addEventListener('mouseenter',()=>{
    container.classList.add('hover-left');
})
left.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter',()=>{
    container.classList.add('hover-right');
})
right.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-right');
})

