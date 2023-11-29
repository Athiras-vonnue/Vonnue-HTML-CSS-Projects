const contents = document.querySelectorAll('.content')
const list_itms = document.querySelectorAll('nav ul li')

list_itms.forEach((itm, idx)=> {
    itm.addEventListener('click', ()=>{
        hideAllContents();
        hideAllItems();

        itm.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents(){
    contents.forEach(content => {
        content.classList.remove('show')
    })
}

function hideAllItems(){
    contents.forEach(content => {
        content.classList.remove('active')
    })
}