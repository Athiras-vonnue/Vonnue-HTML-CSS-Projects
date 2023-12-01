const result = document.querySelector('#result')
const filter = document.querySelector('#filter')
const listItem = [];

getData()


filter.addEventListener('input',(e)=>{
    filterData(e.target.value)
})

async function getData(){
    const res = await fetch('https://randomuser.me/api/?results=50')
    const data = await res.json();
    //way 2
    //const {results} = await res.json();
    console.log(data)

    //clear results
    result.innerHTML = ''
data.results.forEach(user => {
    const li = document.createElement('li');
    listItem.push(li)

    li.innerHTML =`
    <img src="${user.picture.large}">
                <div class="user-info">
                    <h4>${user.name.first}  ${user.name.last}</h4>
                     <p>${user.location.city}, ${user.location.country}</p>
                </div>
    
    `
    result.appendChild(li)
});

//result.appendChild(li)

}
//getData()

function filterData(searchTerm){
console.log(searchTerm)

listItem.forEach(item =>{
if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
{
    item.classList.remove('hide')
}else{
    item.classList.add('hide')  
}
})
}