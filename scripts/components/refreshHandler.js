'use strict'

function refreshHandler() {
    for (let row = 0; row < data.tiles.length; row++) {
        for (let col = 0; col < data.tiles[row].length; col++) {
            data.tiles[row][col] = 0
        }
    }

    createNewTile()
    display()
}

document.querySelector('.refresh-icon').addEventListener('click', refreshHandler)