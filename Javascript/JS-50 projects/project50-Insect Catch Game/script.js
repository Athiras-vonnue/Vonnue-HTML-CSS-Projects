const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const game = document.getElementById('game')
const score = document.getElementById('score')
const message = document.getElementById('message')
let selected_insect = {}
//console.log(insect_btn);

start_btn.addEventListener('click',()=>{
    alert("game")
    screens[0].classList.add('up')
    });


    choose_insect_btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            alert("insect btn")
            const img = btn.querySelector('img')
            const src = img.getAttribute('src')
            const alt = img.getAttribute('alt')
            selected_insect = {src,alt}
            screens[1].classList.add('up')
            setTimeout(createInsect, 1000)
            startGame()
        })

    })
    
function createInsect(){
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const{x,y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    
}
function getRandomLocation(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x= Math.random() * (width - 200) + 100
    const y= Math.random() * (height - 200) + 100
    return {x,y}
}