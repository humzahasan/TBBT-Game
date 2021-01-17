function play(select) {
  var options = ['lizard', 'paper', 'rock', 'scissors', 'spock'];
  var comphand = Math.floor(Math.random() * 5);
  var myscore = parseInt(document.getElementById('myscore').innerText);
  var compscore = parseInt(document.getElementById('compscore').innerText);

  document.getElementById('comphand').src = `../img/${options[comphand]}.png`;
  document.getElementById('myhand').src = `../img/${select}.png`;
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
}