const button=document.getElementById('button');
const toasts=document.getElementById('toasts');
const messages=['message1','message2','message3','message4','message5']
const types=['info','success','error']
button.addEventListener('click',()=>createNotification())

function createNotification(message = null, type = null){
    // alert('notificaton')
const notif=document.createElement('div');
notif.classList.add('toast');
notif.classList.add(type ? type : getRandomTypes())
notif.innerText = message ? message : getRandomMessage()
toasts.appendChild(notif)

setTimeout(()=>{
    notif.remove()
}, 3000)

//Element.remove()==>removes first occurance of the element
}

function getRandomMessage(){
  return messages[Math.floor(Math.random() * messages.length)]
   // console.log(msg)
}

function getRandomTypes(){
    console.log("types")
    return types[Math.floor(Math.random() * types.length)]
  }