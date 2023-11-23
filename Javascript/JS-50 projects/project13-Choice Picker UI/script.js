 const textarea=document.getElementById('textarea');
 const tagsEl=document.getElementById('tags')

 textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);
    if(e.key==='Enter'){
        //alert(e.key)
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomSelect()
    }
 })
 function createTags(input){

   let tags= input.split(",").filter(tag=>
        tag.trim()!=='')

        tagsEl.innerHTML='';
        tags.forEach(tag=>{
            const tagEL=document.createElement("span")
            tagEL.classList.add('tag');
            tagEL.innerText=tag;
            tagsEl.appendChild(tagEL)
        })

    }

    function randomSelect(){
   const times=30
   const interval=setInterval(()=>{
    const randomTag=pickRandomTag();
    // alert(randomTag)
    highlightTag(randomTag)

    setTimeout(()=>{
        unHighlightTag(randomTag)
    },100)

   },100);

   setTimeout(()=>{
    clearInterval(interval)

    setTimeout(()=>{
        const randomTag=pickRandomTag()
        highlightTag(randomTag)
    },100)

   },times*100)
    }
    
function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
     return tags[Math.floor(Math.random()* tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHighlightTag(tag){
    tag.classList.remove('highlight')
}
