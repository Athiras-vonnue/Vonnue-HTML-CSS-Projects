var joke_ele=document.getElementById('jokes');
var joke_btn=document.getElementById('joke-btn')

joke_btn.addEventListener('click',generateJoke)

generateJoke();

//way 1:using .then

// function generateJoke(){
//     const config={
//         heaers:{
//             Accept:'application/json',
//         },
//     }

//     fetch('https://official-joke-api.appspot.com/random_joke',config)
//     .then((res)=>res.json())
//     .then((data)=>{
//         joke_ele.innerHTML=data.setup
//     })
// }

//way2==>Async & Await

async function generateJoke(){
        const config={
            heaers:{
                Accept:'application/json',
            },
        }
        const res= await fetch ('https://official-joke-api.appspot.com/random_joke',config)
            const data=await res.json();
            joke_ele.innerHTML=data.setup
    }