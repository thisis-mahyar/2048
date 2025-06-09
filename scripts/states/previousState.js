'use strict'

function updatePreviousState() {
    if (previousState.length === 0) {
        previousState = [[], [], [], []]
    }

    if (previousState.length === 0 || previousState.toString() !== tiles.toString()) {
        for (let row = 0; row < tiles.length; row++) {
            for (let col = 0; col < tiles[row].length; col++) {
                previousState[row][col] = tiles[row][col]
            }
        }
    }
}
