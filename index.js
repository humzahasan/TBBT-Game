//Selector
const element = document.querySelectorAll('.hand');
const btn = document.querySelectorAll('button');
const headGreet = document.getElementById('game__head');
let myscore = parseInt(document.getElementById('myscore').innerText);
let compscore = parseInt(document.getElementById('compscore').innerText);

//Function

function play(select) {
  element.forEach((el) => el.classList.add('hand-animate'));
  setTimeout(() => {
    gameStart(select);
  }, 1000);
}

function gameStart(select) {
  var options = ['lizard', 'paper', 'rock', 'scissors', 'spock'];
  var comphand = Math.floor(Math.random() * 5);
  document.getElementById('comphand').src = `../img/${options[comphand]}.png`;
  document.getElementById('myhand').src = `../img/${select}.png`;
  element.forEach((el) => el.classList.remove('hand-animate'));

  switch (select) {
    case 'scissors':
      if (options[comphand] == 'paper' || options[comphand] == 'lizard')
        myscore++;
      else if (options[comphand] == 'scissors') {} else if (
        !(options[comphand] == 'paper' || options[comphand] == 'lizard')
      )
        compscore++;
      break;
    case 'paper':
      if (options[comphand] == 'rock' || options[comphand] == 'spock')
        myscore++;
      else if (options[comphand] == 'paper') {} else if (!(options[comphand] == 'rock' || options[comphand] == 'spock'))
        compscore++;
      break;
    case 'rock':
      if (options[comphand] == 'lizard' || options[comphand] == 'scissors')
        myscore++;
      else if (options[comphand] == 'rock') {} else if (
        !(options[comphand] == 'lizard' || options[comphand] == 'scissors')
      )
        compscore++;
      break;
    case 'lizard':
      if (options[comphand] == 'paper' || options[comphand] == 'spock')
        myscore++;
      else if (options[comphand] == 'lizard') {} else if (
        !(options[comphand] == 'paper' || options[comphand] == 'spock')
      )
        compscore++;
      break;
    case 'spock':
      if (options[comphand] == 'rock' || options[comphand] == 'scissors')
        myscore++;
      else if (options[comphand] == 'spock') {} else if (
        !(options[comphand] == 'rock' || options[comphand] == 'scissors')
      )
        compscore++;
      break;

    default:
      break;
  }

  document.getElementById('compscore').innerText = compscore;
  document.getElementById('myscore').innerText = myscore;

  if (myscore == '10' || compscore == '10') {
    endgame(myscore, compscore);
  }
}

function endgame(myscore, compscore) {
  btn.forEach(el => el.disabled = true);
  if (myscore > compscore)
    headGreet.innerText = 'You Win!';
  else
    headGreet.innerText = 'Dr. Cooper Win\'s!';
}