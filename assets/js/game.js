var height = 0
var width = 0
var lives = 1
var time = 15

var createMosquitoTime = 1500
var level = window.location.search
level = (level.replace('?', ''))
// change game mode
if (level === 'normal') {
    // time 1500
    createMosquitoTime = 1500
}

else if (level === 'hard') {
    // time 1000
    createMosquitoTime = 1000
}
else if (level === 'chuckNorris') {
    // time 750
    createMosquitoTime = 750
}

// Screen adjustment
function screenSize() {
    height = window.innerHeight
    width = window.innerWidth
    console.log(width, height);
}

screenSize()

// victory
var stopWatch = setInterval(function () {
    time -= 1
    if (time < 0) {
        clearInterval(stopWatch)
        clearInterval(createMosquito)
        window.location.href = 'victory.html'
    }
    // defeat
    else {
        document.getElementById('stopWatch').innerHTML = time
    }

}, 1000)
    // Create random positions
    function randomPosition() {
        // remove the previous mosquito (if exists)
        if (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove()
            if (lives > 3) {
                window.location.href = 'end_of_game.html'
            }
            else {
                document.getElementById('l' + lives).src = "assets/img/coracao_vazio.png"
                lives++
            }
        }


    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    // if position  is less than 0 it gets 0 otherwise it gets itself
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY);

    // HTML element
    var mosquito = document.createElement('img')
    mosquito.src = "assets/img/mosca.png"
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = positionY = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }
    // creates a child for body
    document.body.appendChild(mosquito)
    console.log(randomSide());
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0: return 'mosquito1'
        case 1: return 'mosquito2'
        case 2: return 'mosquito3'
    }
}
function randomSide() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0: return 'sideA'
        case 1: return 'sideB'

    }
}