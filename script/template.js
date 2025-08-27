function getQuestionsHtml(index){    
    return `
            <div class="card-body ml-2">
                <h5 class="card-title mt-1 mb-2 text-center">${questions[index].question}</h5>

                <div class="card mb-2 quiz-answer-card" onclick="answer('answer_1')">
                    <div class="card-body" id="answer_1">
                        ${questions[index].answer_1}
                    </div>
                </div>
                <div class="card mb-2 quiz-answer-card" onclick="answer('answer_2')">
                    <div class="card-body" id="answer_2">
                        ${questions[index].answer_2}
                    </div>
                </div>
                <div class="card mb-2 quiz-answer-card" onclick="answer('answer_3')">
                    <div class="card-body" id="answer_3">
                        ${questions[index].answer_3}
                    </div>
                </div>
                <div class="card mb-2 quiz-answer-card" onclick="answer('answer_4')">
                    <div class="card-body" id="answer_4">
                        ${questions[index].answer_4}
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mx-3 mb-3">
                <div>
                <b>${[index + 1]}</b> von <b id="length">${questions.length}</b> Fragen
                </div>
                <button onclick="nextQuestion()"class="btn btn-primary" disabled id="nextBtn">next \></button>
            </div>`
};

function getFinalResultsHtml(index){
    return `            
        <div class="card border border-0 rounded-end-4 mt-4 text-center" style="width: 100%;">
            <img src="./assets/img/brain_result.png" class="card-img-top mx-auto mt-3" alt="green-bordered app logo" style="width:6rem">
            <div class="card-body">
                <h5 class="card-title text-center mt-3 fs-5"><b>COMPLETE<br>HTML QUIZ</b></h5>
                <h5 class="card-text text-center mt-3 fs-5" style="color: #FD4F10;">YOUR SCORE &nbsp;&nbsp;&nbsp;<span style="color: #212529"><span id="correctAnswers">${counterRightAnswers}</span>/<span id="finalLength">${questions.length}</span></span></h5>
                <button type="button" class="btn btn-link w-100 mt-3"><a href="#" class="btn btn-primary w-50">SHARE</a></button>
                <button onclick="restartQuiz()" type="button" class="btn btn-link w-100"><a href="#" class="btn btn-outline-primary w-50">REPLAY</a></button>
            </div>
        </div>`
}