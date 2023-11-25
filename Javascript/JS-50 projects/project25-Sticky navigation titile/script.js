const nav=document.querySelector('.nav')
window.addEventListener('scroll',fixNav)
console.log(nav.offsetHeight)
console.log(window.scrollY)
//window.scrollY==0(top of the page)
//nav.offsetHeight=67 for this nav, 67+150
function fixNav(){
if(window.scrollY > nav.offsetHeight+150){
    nav.classList.add('active')
}else{
    nav.classList.remove('active')
}


}