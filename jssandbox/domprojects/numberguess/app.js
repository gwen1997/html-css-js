//game values
let min = 1
let max = 10
let winningNum = getRandomNum(min, max)
let guessesLeft = 3

//UI Element
const game = document.querySelector('#game')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessBtn = document.querySelector('#guess-btn')
const guessInput = document.querySelector('#guess-input')
const message = document.querySelector('.message')

//assign min and max
minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener('click', function(){
  let guess = Number(guessInput.value)       //string to number; parseInt the same
  
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`please enter a number between ${min} and ${max},`, 'red')
  }

  if(guess === winningNum){
    gameOver(true, `${winningNum} is correct`)
    
  }else{
    guessesLeft = guessesLeft - 1

    if(guessesLeft === 0){
     gameOver(false, `game over. correct number was ${winningNum}`)

    }else{
      setMessage(`guess is not correct.  ${guessesLeft} guesses left`, 'red')

      guessInput.value = ''
    }
  }
})  


function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min)  
  //val3 = Math.floor(Math.random() * 20(= max-min +1) + 1)   //get a random num between 1 to 20
}


function gameOver(won, msg){
  let color
  won === true ? color = 'green' : color = 'red'

  guessInput.disabled = true

  guessInput.style.borderColor = color
  message.style.color = color
  setMessage(msg)

  guessBtn.value = 'play again'
  guessBtn.classList.add('play-again')
}


function setMessage(msg, color){
  message.style.color = color
  message.textContent = msg
}


game.addEventListener('mousedown', function(e){     //not click cuz when click, wont show play again but auto reload
  if(e.target.className === 'play-again'){
    window.location.reload()
  }
})
