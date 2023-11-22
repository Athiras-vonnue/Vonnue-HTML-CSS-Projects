var joke_ele=document.getElementById('jokes');
var joke_btn=document.getElementById('joke-btn')

joke_btn.addEventListener('click',generateJoke)

generateJoke();
function generateJoke(){
    const config={
        heaers:{
            Accept:'application/json',
        },
    }

    fetch('https://jsonplaceholder.typicode.com/todos/1',config)
    .then((res)=>res.json())
    .then((data)=>{
        joke_ele.innerHTML=data.title
    })
}