function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};

function closePopup() {
    const selectedChapter = document.getElementById('chapterSelect').value;
    const shuffle = document.getElementById('shuffle').checked;
    const showAnswers = document.getElementById('showAnswers').checked;

    startQuiz(selectedChapter, shuffle, showAnswers);

    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

openPopup();
