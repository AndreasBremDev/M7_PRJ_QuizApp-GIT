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