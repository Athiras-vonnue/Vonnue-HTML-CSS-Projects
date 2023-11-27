const textEl = document.getElementById('text')
const speed = document.getElementById('speed')

const text= 'We Love Programming!'
let idx = 1;
let speedVal = 300 / speed.value;
writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)
    idx++;
    
    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speedVal)
}


speed.addEventListener('input',(e)=>{
    speedVal=300/ e.target.value
})