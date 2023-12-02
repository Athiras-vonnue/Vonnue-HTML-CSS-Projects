 /*
 stringify=>converts to string
 parse=>converts to an array
 */ 
 let my_leads=[];
 let oldLeads=[];
 const input_btn=document.getElementById("input-btn")
 let input_ele=document.getElementById("input-ele")
 const ul_ele=document.getElementById("ul-ele")
 const delete_btn=document.getElementById("delete-btn")
 const save_btn=document.getElementById("save-btn")
 
 const leadsFromLocal=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocal){  //checking leadsFromlocal is empty or not
    my_leads=leadsFromLocal;
    renderData(my_leads)
}
// const tabs=[{
//   url:"my_url"
// }]

input_btn.addEventListener("click",function(){
     my_leads.push(input_ele.value)
     input_ele.value="";
/*Local Storage*/ 
      localStorage.setItem('myLeads',JSON.stringify(my_leads))
      renderData(my_leads)   
    }
   ) 
   save_btn.addEventListener("click",function(){
    console.log("button-clicked");
    chrome.tabs.query({
      active:true,currentWindow:true
    },function(tabs){
      my_leads.push(tabs[0].url);
      localStorage.setItem('myLeads',JSON.stringify(my_leads))
      renderData(my_leads)   
    }
    )
  });
  
   delete_btn.addEventListener('click',function(){
     localStorage.clear();
     my_leads=[];
     renderData(my_leads)
   })

   function renderData(leads){
    let listItem="";
    for(let i=0;i<leads.length;i++){
   //template literals/template strings
    listItem+=`<li><a target='_blank' 
    href=${leads[i]}>${leads[i]}</a></li>`
    
    }
    ul_ele.innerHTML=listItem
    }
  

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//const=>Not be reassigned

/* innerHTML*/
// let container=document.getElementById("container");
// container.innerHTML="<button>Click</button>"
 const recipients="James"
 const email=`Hey ${recipients}!,
  How is it going?`
 console.log(email)
 

 //truthy values
 //falsy values
 /*
 false
 0
 ""
 null;
 undefined
 NaN
 */