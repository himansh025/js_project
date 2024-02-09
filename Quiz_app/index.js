
const questions=[
    {
        question :"Grand Central Terminal, Park Avenue, New York is the world's",
        answer :[
            { text : "largest railway station", correct: true },
            { text : "longest railway station", correct: false },
            { text : "highest railway station", correct: false },
            { text : "None of the above", correct: false }
        ]
    },
    {
        question :"Entomology is the science that studies",
        answer:[
            { text : "Behavior of human beings", correct: false },
            { text : "Insects", correct: true },
            { text : "The origin and history of technical and scientific terms", correct: false },
            { text : "The formation of rocks", correct: false }
        ]
    },
    {
        question :"Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        answer:[
            { text : "Asia", correct: false },
            { text : "Africa", correct: true },
            { text : "Europe", correct: false },
            { text : "Australia", correct: false }
        ]
    },
    {
        question :"Garampani sanctuary is located at",
        answer:[
            { text : "Junagarh, Gujarat", correct: false },
            { text : "Diphu, Assam", correct: true },
            { text : "Kohima, Nagaland", correct: false },
            { text : "Gangtok, Sikkim", correct: false }
        ]
    },
]

const question= document.getElementById("question");
const answerbtn= document.getElementById("answer");
const nextbtn= document.getElementById("Nxt-btn");


function startquiz(){


let currentQuestionindex=0;
let score =0;;
nextbtn.innerHTML="Next"
ShowQuesitons();

}

function ShowQuesitons(){

    let currentquestion= questions[currentQuestionindex];
    let questionno= currentQuestionindex +1;
    question.innerHTML=questionno + " . " + currentquestion.question;
    
}

