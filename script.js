// Sets default value.
let thirdAnswer = 0

// Connects button that allows users to submit their answers to JavaScript.
document.getElementById('third-submit').addEventListener('click', thirdSubmit)
// Connects button that allows users to reveal a hint to JavaScript.
document.getElementById('third-hint').addEventListener('click', thirdHint)

// Creates function that activates when the user clicks on "Submit" for the third riddle.
function thirdSubmit () {
  thirdAnswer = document.getElementById('third-answer').value
  if (thirdAnswer === 'green') {
    document.getElementById('third-outcome').innerHTML = ('Correct, please proceed.')
  } else {
    document.getElementById('third-outcome').innerHTML = ('Incorrect, try again.')
  }
}

// Creates function that reveals an image when the user clicks on "Hint" for the third riddle.
function thirdHint () {
  document.getElementById('third-picture').style.display = 'block'
}
