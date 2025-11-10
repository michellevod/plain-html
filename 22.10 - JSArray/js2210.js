const songs = [
  ' Dynamite - Taio Cruz ',
  ' Atemlos - Helene Fischer',
  ' Birds of a feather - Billie Eilish ',
  ' Bye - Susi ',
  ' Tschuess - Daniel',
  ' Ciao - Michelle '
]

document.getElementById('playList').innerHTML = songs

let text = ''
let ranking

for (let i = 0; i < songs.length; i++) {
  ranking = i
  text +=
    '<span class`songRanked`>' +
    ranking +
    "." +
    ') Song Name: ' +
    songs[i] +
    '<br>'
}

document.getElementById('playList2').innerHTML = text

// -----------

var changeBox = document.getElementById('changeMe')
var changeButton = document.getElementById('buttonChangeMe')

changeButton.onclick = function changeColor () {
  changeBox.style.background = 'red'
}

var toggleBox = document.getElementById('toggleMe')
var toggleButton = document.getElementById('buttonToggleMe')

toggleButton.onclick = function toggleColor () {
  if (toggleBox.style.background === 'yellow') {
    toggleBox.style.background = 'green'
  } else {
    toggleBox.style.background = 'yellow'
  }
}

var switchBox = document.getElementById('switchMe')
switchBox.style.background = 'black';
var switchButton = document.getElementById('buttonSwitch')

function switchColor() {
  switch (switchBox.style.background) {
    case 'black':
    switchBox.style.background = 'orange';
    break;

    case 'orange':
      switchBox.style.background = 'aqua';
      break;

      case 'aqua':
      switchBox.style.background = 'green';
      break;

      case 'green':
        switchBox.style.background = 'black';
        break;
  }
}

switchButton.onclick = switchColor;

// ---------

