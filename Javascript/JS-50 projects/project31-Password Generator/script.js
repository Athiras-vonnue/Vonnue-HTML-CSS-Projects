const resultEl=document.getElementById('result');
const lengthEl=document.getElementById('length');
const uppercase=document.getElementById('uppercase');
const lowercase=document.getElementById('lowercase');
const numbers=document.getElementById('numbers');
const symbols=document.getElementById('symbols');
const generateBtn=document.getElementById('generate');
const clipBoardElem=document.getElementById('clipboard');

const randomFunc = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbol
}

generateBtn.addEventListener('click',()=>{
    const hasLength = +lengthEl.value;
    const hasUpperCase = uppercase.checked;
    const hasLowerCase = lowercase.checked;
    const hasNumbers = numbers.checked;
    const hasSymbol = symbols.checked;
    console.log(hasLength, hasUpperCase, hasLowerCase, hasNumbers, hasSymbol)
 
    resultEl.innerHTML = generatePassword(hasLowerCase, hasUpperCase, hasNumbers, hasSymbol, hasLength)
    
})
clipBoardElem.addEventListener('click', ()=> {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText

    if(!password)
    {return}

    textarea.value = password;
    document.body.appendChild(textarea)
    textarea.select()
     document.execCommand('copy')
     textarea.remove()
     alert('Password copied to clipboard!')
    //navigator.clipboard.writeText('text to be copied');

})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = '';
    const typescount = lower + upper + number + symbol 
    console.log(typescount);
    const typeArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
if(typescount === 0){
    return '';
}
for(let i = 0; i < length; i += typescount){
    typeArr.forEach(type => {
        const funcName  = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]()
    })
}
const finalPassword = generatedPassword.slice(0, length)

return finalPassword;
}

 


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)

    //charCode of "a" start from 97
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)

    //charCode of "A" start from 65
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)

    //charCode of "0" start from 48
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]<>=/,.'
    return symbols[Math.floor(Math.random()*symbols.length)]

}