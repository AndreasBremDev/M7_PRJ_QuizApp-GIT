let currentQuestion = 0;
let counterRightAnswers = 0;
let counterWrongAnswers = 0;

function init() {
    renderQuestions()
}

function renderQuestions() {
    let index = currentQuestion
    let quizRef = document.getElementById('quiz');
    quizRef.innerHTML = '';
    quizRef.innerHTML = getQuestionsHtml(index);
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = parseInt(selection.slice(-1));
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber === question.right_answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success', 'text-light');
        counterRightAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger', 'text-light');
        document.getElementById(idOfRightAnswer).classList.add('bg-success', 'text-light');
        counterWrongAnswers++;
    }
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    renderQuestions();
}