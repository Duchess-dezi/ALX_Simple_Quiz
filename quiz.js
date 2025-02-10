// function
function checkAnswer() {
    const correctAnswer = "4";
    // Retrieve the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedRadio ? selectedRadio.value : null;


    const feedback = document.querySelector('#feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct! Well done.';
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

};


document.getElementById('submit-answer').addEventListener('click', checkAnswer);


