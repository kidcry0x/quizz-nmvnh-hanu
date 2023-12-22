const chapter = document.getElementById('chapter');
const totalAnswer = document.getElementById('total-answer');
const totalAnswerCorrect = document.getElementById('total-answer-correct');
const replayButton = document.getElementById('replay-btn');

replayButton.addEventListener('click', () => {
    openPopup();
});

function setChapter(numberChapter) {
    switch (numberChapter) {
        case 1:
            chapter.innerHTML = `Tổng hợp tất cả các chương!`;
            break;
        case 2:
            chapter.innerHTML = `Chương 1. Khái quát về lịch sử và quá trình phát triển Tiếng Việt`;
            break;
        case 3:
            chapter.innerHTML = `Chương 2. Ngữ âm`;
            break;
        case 4:
            chapter.innerHTML = `Chương 3. Từ vựng - Ngữ nghĩa`;
            break;
        case 5:
            chapter.innerHTML = `Chương 4. Ngữ pháp (Từ loại)`;
            break;
        case 6:
            chapter.innerHTML = `Chương 4. Ngữ pháp (Câu)`;
            break;
    }
};

function setTotalAnswer(numAnswer, totalAns) {
    totalAnswer.innerHTML = `Số câu đã trả lời:  ${numAnswer}/${totalAns}`;
};

function setTotalAnswerCorrect(numCorrect, totalAns) {
    totalAnswerCorrect.innerHTML = `Số câu trả lời đúng:  ${numCorrect} (${Math.ceil((numCorrect/totalAns) * 100)}%)`;
};