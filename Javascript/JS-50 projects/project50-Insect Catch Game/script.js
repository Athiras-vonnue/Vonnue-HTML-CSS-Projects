const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const game = document.getElementById('game')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const time = document.getElementById('time')

let selected_insect = {}
//console.log(insect_btn);
let seconds = 0;
let score = 0;

start_btn.addEventListener('click',()=>{
   // alert("game")
    screens[0].classList.add('up')
    });

    choose_insect_btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
           // alert("insect btn")
            const imges = btn.querySelector('img')
            const src = imges.getAttribute('src')
            const alt = imges.getAttribute('alt')
            //console.log(imges,src,alt)
            selected_insect = {src,alt}
            console.log(selected_insect.src)
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
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src ="${selected_insect.src}" alt = ${selected_insect.alt}
    style = "transform: rotate(${Math.random()* 360}deg)"/>`
    game_container.appendChild(insect)

    insect.addEventListener('click',catchInsect)
   }

function getRandomLocation(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x= Math.random() * (width - 200) + 100
    const y= Math.random() * (height - 200) + 100
    return {x,y}
}
    
//insect.addEventListener('click',catchInsect)
function catchInsect(){
    increaseScore();
//alert('caught')
this.classList.add('caught');
setTimeout(()=>this.remove(), 2000)
addInsects();
}

function addInsects(){
   setTimeout (createInsect, 1000)
   setTimeout (createInsect, 1500)
}

function startGame(){
    setInterval(increaseTime, 1000)
}
function increaseTime(){
  let m = Math.floor(seconds/60)  ;
  let s = seconds % 60;
  m = m < 10 ? `0${m}`:m
  s = s < 10 ? `0${s}`:s
  time.innerHTML = `Time: ${m}:${s}`
  seconds++;

  //console.log(m)
}
function increaseScore(){
    score++;
    if(score > 19){
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}
