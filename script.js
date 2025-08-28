let currentQuestion = 0;
let counterRightAnswers = 0;
let counterWrongAnswers = 0;
let quizRef = document.getElementById('quiz');
let audio_success = new Audio("./assets/audio/success.mp3");
let audio_fail = new Audio("./assets/audio/fail.mp3");
let audio_win = new Audio("./assets/audio/win.mp3");

document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
});

function startQuiz() {
    updateProgressBar();
    quizRef.classList.add('bg_img')
    quizRef.innerHTML = '';
    quizRef.innerHTML = getStartQuizHtml();
    let startBtnRef = document.getElementById('startBtn');
    startBtnRef.focus();
}

function renderQuestions() {
    quizRef.classList.remove('bg_img');
    let index = currentQuestion;    
    quizRef.innerHTML = '';
    if (gameIsOver(index)) {
        showEndScreen(index);
    } else {
        updateProgressBar();
        updateToNextQuestion(index);
    }
}

function gameIsOver(index){
    return index == questions.length;
}

function updateToNextQuestion(index) {
    quizRef.innerHTML = getQuestionsHtml(index);
}

function showEndScreen(index) {
    updateProgressBar();
    quizRef.innerHTML = getFinalResultsHtml(index);
    if (counterRightAnswers === questions.length) {
        document.getElementById('winning').classList.remove('d_none');
        audio_win.play();
    }
}

function updateProgressBar() {
    let percent = parseInt(currentQuestion / questions.length * 100)
    let progressBarRef = document.getElementById('progress');
    let progressContainer = document.getElementById('progressContainer');
    progressBarRef.innerHTML = '';
    progressBarRef.innerHTML = percent + " %";
    progressBarRef.style = `width: ${percent}%`;
    progressContainer.ariaValueNow = percent;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = parseInt(selection.slice(-1));
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    selectedQuestionNumber === question.right_answer ? rightAnswer(selection) : wrongAnswer(selection, idOfRightAnswer);
    document.getElementById('nextBtn').disabled = false;
    document.getElementById('nextBtn').focus();
}

function rightAnswer(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success', 'text-light');
    audio_success.volume = 0.2;
    audio_success.play();
    counterRightAnswers++;
    
}

function wrongAnswer(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger', 'text-light');
    document.getElementById(idOfRightAnswer).classList.add('bg-success', 'text-light');
    audio_fail.volume = 0.1;
    audio_fail.play();
    counterWrongAnswers++;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    renderQuestions();
}

function restartQuiz() {
    currentQuestion = 0;
    counterRightAnswers = 0;
    counterWrongAnswers = 0;
    document.getElementById('winning').classList.add('d_none')
    startQuiz();
}