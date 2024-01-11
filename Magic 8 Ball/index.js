//First two functions ask for name, and when it is submitted by the user, the next section will show.
document.querySelector('#usernameSubmit').addEventListener('click', () => {
 showAndHide();
 askQuestion();
});

function showAndHide(){
  const eightBallSectionShow = document.querySelector('#eightBallSection');
  if (eightBallSectionShow.style.display == 'none') {
  eightBallSectionShow.style.display = 'block';
  } else {
  eightBallSectionShow.style.display = 'none';
  }
}

function askQuestion() {
   //get username from input value and let equal username
  let userNameInput = document.querySelector('#username').value
  //eightball h2 will equal welcome... w/ username included
  document.querySelector('#eightBallWelcome').innerText = `Welcome, ${userNameInput}.`
}


//This function will display an answer for the user after submitted
document.querySelector('#answerQuestion').addEventListener('click', () => {
  answerQuestion()
});
    
function answerQuestion() {
  
  const userQuestion = document.querySelector('#userQuestion').value
  let answerFromEightBall = document.querySelector('#eightBallAnswer')
  const randomNumber = Math.floor(Math.random() * 8);
  // const questionMark = "?"

    switch (randomNumber) {
    case 0:
      answerFromEightBall.innerText = `${userQuestion}? It is certain.`
      break;
    case 1:
      answerFromEightBall.innerText = `${userQuestion}? It is decidedly so.`
      break;
    case 2:
      answerFromEightBall.innerText = `${userQuestion}? Reply hazy, try again.`
      break;
    case 3:
      answerFromEightBall.innerText = `${userQuestion}? Cannot predict now.`
      break;
    case 4:
      answerFromEightBall.innerText = `${userQuestion}? Do not count on it.`
      break;
    case 5:
      answerFromEightBall.innerText = `${userQuestion}? My sources say no.`
      break;
    case 6:
      answerFromEightBall.innerText = `${userQuestion}? Outlook not so good.`
      break;
    case 7:
      answerFromEightBall.innerText = `${userQuestion}? Signs point to yes.`
      break;
  }
}

//make it look like an actual eight ball obvi, id's yadda yadda
//u need input field for user question, and user name 
//so first function will be something like... hello user what is ur name? they input the name. Hello {user}, what is ur question? 
//they input question, and the magic eightball will answer.
//when they put the username and click submit, the eightBallSection h2 will pop up with name and what ur question?
//they ttype question and submit, prompting the answer. make answer jump and down slowly in css.
//only have bottom section appear once name is provided.


// function checkString(){
//   if (userQuestion.includes(questionMark)) {
//     return false
//   } else {
//     return true
//   }