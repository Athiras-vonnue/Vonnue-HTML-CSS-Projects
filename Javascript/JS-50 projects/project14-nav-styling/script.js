const toggles=document.getElementById('toggle');
const nav=document.getElementById("nav")

toggles.addEventListener('click',()=>{
    // alert("evnet")
    nav.classList.toggle('active')  
})