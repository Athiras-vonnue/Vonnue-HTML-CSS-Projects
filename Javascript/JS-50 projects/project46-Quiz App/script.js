const quizData =[
    {
    question: "Which language runs in a web browser?",
    a:"java",
    b:"C",
    c:"Python",
    d:"JavaScript",
    correct:"d"
    },
    {
    question: "What does CSS stand for?",
    a:"Centeral Style Sheets",
    b:"Cascading Style Sheets",
    c:"Cascading Simple Sheets",
    d:"Cars SUV Sailboats",
    correct:"b"
    },
    {
    question: "What does HTML stand for?",
    a:"Hypertext Markup Language",
    b:"Hypertext Markdown Language",
    c:"Hyperloop Machine Language",
    d:"Helicopters Terminals Motorboats Lamborginis",
    correct:"a"
    },
    {
    question: "What year was Javascript launched?",
    a:"1996",
    b:"1995",
    c:"1994",
    d:"none of the above",
    correct:"b"
    }
    ];
    const quiz_container = document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const submit_btn = document.getElementById('submit')

    let currentQuiz = 0;
    let score = 0;

    loadQuiz()

    function loadQuiz(){

        deSelectAnswers();
const currentQuizData = quizData[currentQuiz]
questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
//deSelectAnswers();
    }

function deSelectAnswers(){
   // alert('deselected')
    answerEls.forEach(answerEl=>{
        answerEl.checked = false
    })
}  

function getSelected(){
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
return answer;
}
submit_btn.addEventListener('click',()=>{
    let answer = getSelected();
   // console.log(answer)
   if(answer){
   if(answer === quizData[currentQuiz].correct){
    //console.log(answer)
    score++;
    
   }
   currentQuiz++
   if(currentQuiz < quizData.length){

    loadQuiz()

   }else{

    quiz_container.innerHTML = `
    <h2>You answered correctly at ${score} / ${quizData.length} questions</h2>
    <button onclick = "location.reload()">Reload</button>
    
    `

   }
}
})
