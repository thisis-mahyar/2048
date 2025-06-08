'use strict'

let canRevert = false

function revertHandler(matrix) {
    if (canRevert) {
        // somehow, using map() doesn't work properly here
        // if you move, undo, move, undo, it won't return the right state
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = pre[i][j]
            }
        }

        pre.length = 0 // empty the array

        canRevert = false
        display(matrix)
    }
}

document.querySelector('.revert-icon').addEventListener('click', () => revertHandler(tiles))