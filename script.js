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
    if (index == questions.length) {
        progressBarUpdate();
        quizRef.innerHTML = getFinalResultsHtml(index);
        if (counterRightAnswers === questions.length) {
            document.getElementById('winning').classList.remove('d_none');
        }
    } else {
        progressBarUpdate();
        quizRef.innerHTML = getQuestionsHtml(index);
    }
}

function progressBarUpdate(){
    let percent = parseInt(currentQuestion / questions.length * 100)
    let progressBarRef = document.getElementById('progress');
    progressBarRef.innerHTML = '';
    progressBarRef.innerHTML = percent + " %"
    progressBarRef.style = `width: ${percent}%`
    

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

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    renderQuestions();
}

function restartQuiz(){
    currentQuestion = 0;
    counterRightAnswers = 0;
    counterWrongAnswers = 0;
    document.getElementById('winning').classList.add('d_none')
    init();
}