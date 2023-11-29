const container= document.getElementById('container')
const colors = ['#e74cec', '#8e44ad', '#3498db', '#e67e22','#2ecc71']
const SQUARES = 500;

for(let i=0; i<SQUARES;
  i++){
    createSquare();
  }

function createSquare(){
const box = document.createElement('div');
box.classList.add('square');
container.appendChild(box)

box.addEventListener('mouseover', ()=>{
  setColor(box)
})
box.addEventListener('mouseout', ()=>{
  removeColor(box)
})
}

function setColor(element){
  const color = getRandomColor();
  console.log(color)
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}
function removeColor(element){
  element.style.backgroundColor =`#1d1d1d`;
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor(){
  return colors[Math.floor(Math.random()*colors.length)]
}