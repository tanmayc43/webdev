# Projects related to DOM

## Project links:
[Click here](https://stackblitz.com/edit/stackblitz-starters-q5bejtcd?file=index.html)


# Solution code

## Project 1

```javascript
const allButtons = document.querySelectorAll('.button')
const body = document.querySelector('body')

allButtons.forEach((button)=>{
  //console.log(button)
  button.addEventListener('click', function(e){
    //console.log(e)
    //console.log(e.target)
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow'
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = 'white'
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue'
    }
    else if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
    }
  })
})
``` 

## Project 2

```javascript
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault();
  const weight = parseInt(document.querySelector('#weight').value)
  const height = parseInt(document.querySelector('#height').value)
  const result = document.querySelector('#results')

  if(height===0 || height==='' || isNaN(height)){
      result.innerHTML = "Enter a valid Height"
  }
  else if(weight===0 || weight==='' || isNaN(weight)){
      result.innerHTML = "Enter a valid Weight"
  }
  else{
    const bmi =(weight * 10000)/(height*height)
    result.innerHTML = `<span>${bmi.toPrecision(4)}</span>`

    if(bmi<18.6){
      const message = document.querySelector('#message')
      message.innerHTML = "<h3> Your BMI falls in the underweight range </h3>"
    }
    else if(bmi<=24.9){
      const message = document.querySelector('#message')
      message.innerHTML = "<h3> Your BMI falls in the normal range </h3>"
    }
    else{
      const message = document.querySelector('#message')
      message.innerHTML = "<h3> Your BMI falls in the overweight range </h3>"
    }
  }
})

```

## Project 3

``` javascript

const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString)
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## Project 4

``` javascript

let generatedNum = Math.round((Math.random()*100)) + 1

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuesses = []
let guessCnt = 1;

let playGame = true;


if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Enter a valid number.")
  }
  else if(guess<1){
    alert("Enter a number greater than or equal to 1.")
  }
  else if(guess>100){
    alert("Enter a number less than or equal to 100.")
  }
  else{
    prevGuesses.push(guess)
    if(guessCnt === 11){
      displayGuess(guess)
      displayMessage(`Game Over! Random number was ${generatedNum}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function displayGuess(guess){
  userInput.value = ''
  guesses.innerHTML += `${guess}, `
  guessCnt+=1;
  remaining.innerHTML = `${11-guessCnt}`
}

function checkGuess(guess){
  if(guess > generatedNum){
    displayMessage("Too high")
  }
  else if(guess < generatedNum){
    displayMessage("Too low")
  }
  else {
    displayMessage("Bingo!")
    endGame()
  }
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector("#newGame")

  newGameButton.addEventListener('click' ,function(e){
    //e.preventDefault()
    generatedNum =  parseInt((Math.random()*100) +1)
    prevGuesses = []
    guessCnt = 1
    guesses.innerHTML = ''
    remaining.innerHTML = `${11 - guessCnt}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  });
}









```
