const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const quizEl = document.querySelector('.quiz');

let curQuestionIdx = 0;
let score = 0;
let numberHasAnswer = 0;
let selectedAnswers = [];
let showAnswer = false;

function startQuiz(chuong, checkBox1, checkBox2) {
  curQuestionIdx = 0;
  score = 0;
  numberHasAnswer = 0;
  selectedAnswers = []
  showAnswer = false;
  nextButton.innerHTML = 'Next';
  nextButton.style.fontSize = "18px";

  replayButton.style.display = "block";
  showQuestion(chuong, checkBox1, checkBox2);

  setTotalAnswerCorrect(score, window._questions.length);
  setTotalAnswer(numberHasAnswer, window._questions.length);
}

function showQuestion(chuong, checkBox1, checkBox2) {
  resetState();

  if (checkBox2) {
    showAnswer = checkBox2;
  };
  
  if (parseInt(chuong)) {

    setChapter(parseInt(chuong));

    switch (parseInt(chuong)) {
      case 1:
        const newArray = [...CHUONG_1, ...CHUONG_2, ...CHUONG_3, ...CHUONG_4, ...CHUONG_5]
        newArray.forEach(item => {
            shuffleArray(item.answers);
        });

        window._questions = newArray;
      break;
      case 2:
        CHUONG_1.forEach(item => {
            shuffleArray(item.answers);
        });

        window._questions = CHUONG_1;
      break;
      case 3:
        CHUONG_2.forEach(item => {
          shuffleArray(item.answers);
        });

        window._questions = CHUONG_2;
      break;
      case 4:
        CHUONG_3.forEach(item => {
          shuffleArray(item.answers);
        });

        window._questions = CHUONG_3;
      break;
      case 5:
        CHUONG_4.forEach(item => {
          shuffleArray(item.answers);
        });

        window._questions = CHUONG_4;
      break;
      case 6:
        CHUONG_5.forEach(item => {
          shuffleArray(item.answers);
        });

        window._questions = CHUONG_5;
      break;
    };

    if (checkBox1) {
      shuffleArray(window._questions);
    };
  };

  let curQuestion = window._questions[curQuestionIdx];

  let questionNo = curQuestionIdx + 1;

  questionElement.innerHTML = questionNo + '. ' + curQuestion.question;

  curQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    switch (index) {
      case 0:
        button.innerHTML = `A. ${answer.text}`;
      break;
      case 1:
        button.innerHTML = `B. ${answer.text}`;
      break;
      case 2:
        button.innerHTML = `C. ${answer.text}`;
      break;
      case 3:
        button.innerHTML = `D. ${answer.text}`;
      break;
    };

    button.style.fontSize = "15px";
    button.classList.add('btn');
    answerButtons.appendChild(button);

    if (answer.correct) {
      if (showAnswer) {
        button.style.color = "#FF0000";
      };
      button.dataset.correct = answer.correct;
    }
    
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const selectedAnswerText = selectedBtn.innerText;

  const isCorrect = selectedBtn.dataset.correct === 'true';

  const selectedAnswer = {
    questionIndex: curQuestionIdx + 1,
    answerText: selectedAnswerText,
    isCorrect: isCorrect,
  };

  selectedAnswers.push(selectedAnswer);

  numberHasAnswer++;

  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
    setTotalAnswerCorrect(score, window._questions.length);
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'block';

  setTotalAnswer(numberHasAnswer, window._questions.length);
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${window._questions.length}! (${Math.ceil((score/window._questions.length) * 100)}%)`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.fontSize = "18px";
  nextButton.style.display = 'block';
  replayButton.style.display = "none";
}

function handleNextButton() {
  curQuestionIdx++;
  if (curQuestionIdx < window._questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (curQuestionIdx < window._questions.length) {
    handleNextButton();
  } 
  else {
    openPopup();
  }
});


//Utils
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
  };
};