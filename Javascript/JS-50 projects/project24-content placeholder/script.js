const header=document.getElementById("header")
const title=document.getElementById("title")
const excerpt=document.getElementById("excerpt")
const profile_img=document.getElementById("profile-img")
const names=document.getElementById("name")
const date=document.getElementById("date")

const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bg_texts=document.querySelectorAll('.animated-bg-text')

setTimeout(getData,2500)
function getData(){
    header.innerHTML=`<img src="bg.avif" alt="cat-image">`
    title.innerHTML="Lorem ipsum dolor sit amet"
    excerpt.innerHTML="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A neque,"
    profile_img.innerHTML=`<img src="image.avif" alt="image">`
     names.innerHTML="John Doe"
     date.innerHTML="Oct 08, 2020"

     animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))
     animated_bg_texts.forEach(bg=>bg.classList.remove('animated-bg-text'))
}