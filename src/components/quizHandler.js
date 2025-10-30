let currentQuestion = ecData[0];

// Display a question or result at endpoint answers
const displayQuestion = (questionData) => {
  const questionEl = document.getElementById("question");
  const answerABtn = document.getElementById("answerABtn");
  const answerBBtn = document.getElementById("answerBBtn");
  const resultsEl = document.getElementById("results");
  const resultsText = document.getElementById("resultsText");

  // Reset visibility
  resultsEl.classList.add("hidden");
  questionEl.classList.remove("hidden");
  answerABtn.classList.remove("hidden");
  answerBBtn.classList.remove("hidden");

  questionEl.textContent = questionData.question;

  // If no answers available show result
  if (!questionData.answerA && !questionData.answerB) {
    showResults(questionData);
    return;
  }

  answerABtn.textContent = questionData.answerA;
  answerBBtn.textContent = questionData.answerB;

  answerABtn.onclick = () => handleAnswer(questionData.idNextQuestionA);
  answerBBtn.onclick = () => handleAnswer(questionData.idNextQuestionB);
};

// Handle answer and go to next question or result at endpoint answers
const handleAnswer = (idNextQuestion) => {
  const nextQuestion = ecData.find((q) => q.id === idNextQuestion);
  if (nextQuestion) {
    currentQuestion = nextQuestion;
    displayQuestion(nextQuestion);
  }
};

// Display results page 
const showResults = (questionData) => {
  const answerABtn = document.getElementById("answerABtn");
  const answerBBtn = document.getElementById("answerBBtn");
  const resultsEl = document.getElementById("results");
  const resultsText = document.getElementById("resultsText");

  // Hide the question and buttons
  answerABtn.classList.add("hidden");
  answerBBtn.classList.add("hidden");

  // Clear any previous result content
  // resultsText.innerHTML = "";

  if (questionData.resultA) {
    const linkBtn = document.createElement("a");
    linkBtn.href = questionData.resultA;
    linkBtn.textContent = `${questionData.linkText}`
    // linkBtn.target = "_blank";
    linkBtn.classList.add("quiz-btn", "result-link");
    resultsText.appendChild(linkBtn);
  }

  if (questionData.resultB) {
    const linkBtn = document.createElement("a");
    linkBtn.href = questionData.resultA;
    linkBtn.textContent = `${questionData.linkTextB}`
    // linkBtn.target = "_blank";
    linkBtn.classList.add("quiz-btn", "result-link");
    resultsText.appendChild(linkBtn);
  }

  resultsEl.classList.remove("hidden");
};

displayQuestion(currentQuestion);
