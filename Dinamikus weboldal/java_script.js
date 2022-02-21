const quizData = 
[
    {
    question: "Mi a számítógép agya?",
    a: "CPU",
    b: "GPU",
    c: "RAM",
    d: "HDD",
    correct: "a",
    },
    {
    question: "Mik találhatóak az alaplapon?",
    a: "CPU foglalat, órajel generátor, tintapatron",
    b: "CPU foglalat, USB csatlakozó, monitor",
    c: "RAM foglalat, jack csatlakozó, PCI csatlakozó",
    d: "CPU foglalat, memóriahelyek, PCI csatlakozók",
    correct: "d",   
    },
    {
    question: "Felsoroltak közül melyik periféria?",
    a: "Egér",
    b: "RAM",
    c: "HDD",
    d: "Gombelem",
    correct: "a",   
    },
    {
    question: "Melyik adattároló eszköz?",
    a: "Egér",
    b: "HDD",
    c: "Monitor",
    d: "Gépház",
    correct: "b",   
    },
    {
    question: "Mi a memória?",
    a: "Adatbeviteli eszköz",
    b: "Adatátvitelre szolgáló alkatrész",
    c: "Adattároló",
    d: "Adatmegjelenítő",
    correct: "c",   
    },
    {
    question: "Mitől NEM függ a felbontás?",
    a: "A monitor típusától",
    b: "A videókártya típusától",
    c: "A videókártyán lévő memória nagyságától",
    d: "A monitor fogyasztása",
    correct: "d",   
    },        
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() 
{
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() 
{
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() 
{
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h3>Az kérdőívben elért eredményed: ${score}/${quizData.length}</h3>

            <button onclick="location.reload()">Reload</button
            `
        }
    }
})