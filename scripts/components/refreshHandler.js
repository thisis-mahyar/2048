'use strict'

function refreshHandler() {
    for (let row = 0; row < tiles.length; row++) {
        for (let col = 0; col < tiles[row].length; col++) {
            tiles[row][col] = 0
        }
    }

    createNewTile()
    display()
}

document.querySelector('.refresh-icon').addEventListener('click', refreshHandler)