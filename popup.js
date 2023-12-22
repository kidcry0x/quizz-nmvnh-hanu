function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};

function closePopup() {
    var selectedChapter = document.getElementById('chapterSelect').value;
    var checkboxValue = document.getElementById('morning').checked;

    startQuiz(selectedChapter, checkboxValue);

    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

openPopup();
