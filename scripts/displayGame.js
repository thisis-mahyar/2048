'use strict'

function display() {
    displayTiles()
    displayScore()
}

function displayTiles() {
    for (let row = 0; row < data.tiles.length; row++) {
        for (let col = 0; col < data.tiles[row].length; col++) {
            document.querySelector(`.r${row} .c${col}`).textContent = data.tiles[row][col] === 0 ? '' : data.tiles[row][col]
            document.querySelector(`.r${row} .c${col}`).style.color = 'white'
            document.querySelector(`.r${row} .c${col}`).style.backgroundColor = data.tiles[row][col] === 0 ? '#ECECEC' : data.tileColors[data.tiles[row][col]]
        }
    }
}

function displayScore() {
    document.querySelector('.score-val').innerHTML = data.score.toString()
}