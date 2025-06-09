'use strict'

function updatePreviousState() {
    if (data.previousState.length === 0) {
        data.previousState = [[], [], [], []]
    }

    if (data.previousState.length === 0 || data.previousState.toString() !== data.tiles.toString()) {
        for (let row = 0; row < data.tiles.length; row++) {
            for (let col = 0; col < data.tiles[row].length; col++) {
                data.previousState[row][col] = data.tiles[row][col]
            }
        }
    }
}
