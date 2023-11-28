const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
console.log(cheap,fast)

toggles.forEach(toggle => toggle.addEventListener('change',(e) => {
   // console.log(e.target)
    doTheTrick(e.target)

}))

function doTheTrick(theClickedOne){
    //console.log(good.checked,cheap.checked,fast.checked)
    if(good.checked && cheap.checked && fast.checked){
       // console.log(good,cheap,fast)

        if(good === theClickedOne ){
            fast.checked = false
        }

        if(cheap === theClickedOne){
            good.checked = false
        }

        if(fast === theClickedOne){
            cheap.checked = false
        }
    }
}
