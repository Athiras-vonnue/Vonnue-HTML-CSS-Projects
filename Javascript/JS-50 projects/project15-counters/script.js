let counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerText=0;


    const  updateCounter=()=>{
    const target=+counter.getAttribute("data-target");
    const c=+counter.innerText
    //+==>convert to number
    // console.log(target)
    let increment=target/100;
    
    if(c<target){
        counter.innerText=`${Math.ceil(c+increment)}`
        setTimeout(updateCounter,1)
    }
    //ceil==>round off number
    // console.log(res)
    }
    updateCounter()
})