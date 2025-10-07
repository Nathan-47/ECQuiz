// find data 
let currentQuestion = ecData[0];

// Question handler function
const displayQuestion = (questionData) => {    
    
// Display question text
document.getElementById("question").textContent = questionData.question;

// Button A
const answerABtn = document.getElementById("answerABtn");
answerABtn.textContent = questionData.answerA;
if(questionData.answerA) {
    answerABtn.onclick = () => {
        handleAnswer(questionData.idNextQuestionA);
    }
}

// Button B
const answerBBtn = document.getElementById("answerBBtn");
answerBBtn.textContent = questionData.answerB;
if(questionData.answerB) {
    answerBBtn.onclick = () => {
        handleAnswer(questionData.idNextQuestionB);
    }
}
}

// Handle answer function
const handleAnswer = (idNextQuestion) => {
    // find next question via id tag
    const nextQuestion = ecData.find(q => q.id === idNextQuestion);
    if (nextQuestion) {
        currentQuestion = nextQuestion;
        displayQuestion(nextQuestion); 
    }
}

displayQuestion(currentQuestion);