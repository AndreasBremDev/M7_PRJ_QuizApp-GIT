function getStartQuizHtml(){
    return `            
        <div class="card border-0 h-100 bg_img">
            <div class="card-body position-relative" >
                <h5 class="card-title text-center mt-4 fs-1 fs-md-3" style="font-family: 'PT Sans'; font-size: 3rem;">
                    <b>Welcome to<br>The Awesome HTML Quiz</b></h5>
                <h6 class="card-subtitle mb-5 text-center mt-3 fs-2" style="font-family: 'PT Sans'; font-size: 2rem;">Ready
                    for the Challenge?</h6>
                <button id="startBtn" tabindex="0" onclick="renderQuestions()" type="button" tabindex="-1"
                class="btn btn-primary border-0 position-absolute my_absolute_position w-50 mt-3 text-light" style="background-color: #FD4F10; max-width: 248px">
                    START NOW&nbsp;&nbsp;>>
                </button>
            </div>
        </div>`
}
function getQuestionsHtml(index){    
    return `
            <div class="container card-body ml-2">
                <h5 class="card-title py-3 text-center">${questions[index].question}</h5>
                <button tabindex="0" class="card mb-2 quiz-answer-card w-100 text-start" onclick="answer('answer_1')" role="button">
                    <div class="card-body" id="answer_1">
                        ${questions[index].answer_1}
                    </div>
                </button>
                <button tabindex="0" class="card mb-2 quiz-answer-card w-100 text-start" onclick="answer('answer_2')" role="button">
                    <div class="card-body" id="answer_2">
                        ${questions[index].answer_2}
                    </div>
                </button>
                <button tabindex="0" class="card mb-2 quiz-answer-card w-100 text-start" onclick="answer('answer_3')" role="button">
                    <div class="card-body" id="answer_3">
                        ${questions[index].answer_3}
                    </div>
                </button>
                <button tabindex="0" class="card mb-2 quiz-answer-card w-100 text-start" onclick="answer('answer_4')" role="button">
                    <div class="card-body" id="answer_4">
                        ${questions[index].answer_4}
                    </div>
                </button>
            </div>
            <div class="d-flex justify-content-between mx-3 mb-3">
                <div>
                <b>${[index + 1]}</b> von <b id="length">${questions.length}</b> Fragen
                </div>
                <button id="nextBtn" tabindex="-1" onclick="nextQuestion()"class="btn btn-primary" disabled >next \></button>
            </div>`
};

function getFinalResultsHtml(index){
    return `            
        <div class="card border border-0 rounded-end-4 mt-4 text-center" style="width: 100%;">
            <img src="./assets/img/brain_result.png" class="card-img-top mx-auto mt-3" alt="green-bordered app logo" style="width:6rem">
            <div class="card-body">
                <h5 class="card-title text-center mt-3 fs-5"><b>COMPLETE<br>HTML QUIZ</b></h5>
                <h5 class="card-text text-center mt-3 fs-5" style="color: #FD4F10;">YOUR SCORE &nbsp;&nbsp;&nbsp;<span style="color: #212529"><span id="correctAnswers">${counterRightAnswers}</span>/<span id="finalLength">${questions.length}</span></span></h5>
                <button type="button" class="btn btn-link w-100 mt-3" disabled><a href="#" class="btn btn-primary w-50">SHARE</a></button>
                <button onclick="restartQuiz()" type="button" class="btn btn-link w-100"><a href="#" class="btn btn-outline-primary w-50">REPLAY</a></button>
            </div>
        </div>`
}