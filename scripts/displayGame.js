'use strict'

const tiles = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
let score = 0
const tileColors = {
    2: '#FF6B6B',
    4: '#FFD93D',
    8: '#6BCB77',
    16: '#4D96FF',
    32: '#F9A826',
    64: '#FF66C4',
    128: '#00C2A8',
    256: '#A66DD4',
    512: '#FFA07A',
    1024: '#FFB347',
    2048: '#9AE66E',
    4096: '#FF8C42',
    8192: '#47B5FF'
}

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