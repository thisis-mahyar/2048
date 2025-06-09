'use strict'

function revertHandler() {
    if (canRevert) {
        // somehow, using map() doesn't work properly here
        // if you move, undo, move, undo, it won't return the right state
        for (let row = 0; row < tiles.length; row++) {
            for (let col = 0; col < tiles[row].length; col++) {
                tiles[row][col] = previousState[row][col]
            }
        }

        previousState.length = 0 // empty the array

        canRevert = false
        display()
    }
}

document.querySelector('.revert-icon').addEventListener('click', revertHandler)