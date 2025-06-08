'use strict'

function refreshHandler(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = 0
        }
    }

    createNewTile(matrix)
    display(matrix)
}

document.querySelector('.refresh-icon').addEventListener('click', () => refreshHandler(tiles))