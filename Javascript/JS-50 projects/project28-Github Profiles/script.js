const API_URL='https://api.github.com/users/'

const search_ele=document.getElementById('search')
const main=document.getElementById('main')
console.log(search_ele)
const form=document.getElementById('form')
const card=document.querySelector('.card');


//getUser('Athiras-vonnue')

async function getUser(username){
    try{
    const {data} = await axios(API_URL + username)
    console.log(data);
    createUserCard(data);
    getRepos(username)
}

catch(err){
    console.log(err);
    if(err.response.status == 404){
        createErrorCard('No profile with this username'); 
    }
   // createErrorCard(err);
}
}

function createUserCard(data){
    main.innerHTML=`<div class="card">
    <div>
    <img src="${data.avatar_url}" alt="" class="avatar">
</div>
<div class="user-info">
    <h2>${data.login}</h2>
    <p>${data.bio}</p>
    <ul>
        <li>${data.followers}<strong>Followers</strong>
        </li>
        <li>${data.following}<strong>Following</strong>
        </li>
        <li>${data.public_repos}<strong>Repos</strong>
        </li>
    </ul>

    <div id="repos">
       
    </div>
</div></div>` 
}

function createErrorCard(msg){
main.innerHTML=`
<div class="card">
<h1>${msg}</h1>
</div>
`
}

async function getRepos(username){
    try{
    const {data} = await axios(API_URL + username + '/repos?sort=created')
    console.log("this is repo");
    addReposToCard(data);
}

catch(err){
    //console.log(err);
    if(err.response.status == 404){
        createErrorCard('Problem fetching repos'); 
    }
}
}
function addReposToCard(repos){
const reposeEl = document.getElementById('repos')
repos.slice(0, 10).forEach(repo => {
    const repoLink = document.createElement('a')
    repoLink.classList.add('repo');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank'
    repoLink.innerText = repo.name
    reposeEl.appendChild(repoLink)
})
}

form.addEventListener('submit',(e)=>{
e.preventDefault()
console.log(search_ele.value)
const input_val=search_ele.value;

if(input_val){
    getUser(input_val);
    search_ele.value=''
}
})