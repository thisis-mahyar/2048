'use strict'

let canRevert = false

function revertHandler(matrix) {
    if (canRevert) {
        // somehow, using map() doesn't work properly here
        // if you move, undo, move, undo, it won't return the right state
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[row][col] = pre[row][col]
            }
        }

        pre.length = 0 // empty the array

        canRevert = false
        display(matrix)
    }
}

document.querySelector('.revert-icon').addEventListener('click', () => revertHandler(tiles))