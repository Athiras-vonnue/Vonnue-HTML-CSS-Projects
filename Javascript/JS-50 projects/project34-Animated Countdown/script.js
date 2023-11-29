const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')
console.log(replay)

 runAnimation()

function resetDom(){
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num)=>{
     num.classList.value=''
    })
    //console.log(nums[0])
    nums[0].classList.add('in')
}

 function runAnimation(){
     //alert('run animation-replay')
    nums.forEach((num, idx) => {
     // console.log(num,idx)
      const nextToLast = nums.length - 1
//console.log(nextToLast)
      num.addEventListener('animationend', (e) => {
     //alert('animation')
        if(e.animationName == 'goIn' && idx !== nextToLast){
          console.log(e.animationName,nextToLast )
            num.classList.remove('in')
            num.classList.add('out')
            //console.log("inside animation")
        }
        else if(e.animationName === 'goOut' && num.nextElementSibling){
            num.nextElementSibling.classList.add('in')
      }else{
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
     })
      })
    
 }
replay.addEventListener('click', ()=>{
    //alert('start')
    resetDom();
    runAnimation();
    
})