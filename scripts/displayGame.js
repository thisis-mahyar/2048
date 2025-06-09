'use strict'

function display() {
    displayTiles()
    displayScore()
}

function displayTiles() {
    for (let row = 0; row < tiles.length; row++) {
        for (let col = 0; col < tiles[row].length; col++) {
            document.querySelector(`.r${row} .c${col}`).textContent = tiles[row][col] === 0 ? '' : tiles[row][col]
            document.querySelector(`.r${row} .c${col}`).style.color = 'white'
            document.querySelector(`.r${row} .c${col}`).style.backgroundColor = tiles[row][col] === 0 ? '#ECECEC' : tileColors[tiles[row][col]]
        }
    }
}

function displayScore() {
    document.querySelector('.score-val').innerHTML = score.toString()
}