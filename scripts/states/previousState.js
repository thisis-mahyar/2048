'use strict'

let previousState = []

function updatePreviousState(matrix) {
    if (previousState.length === 0) {
        previousState = [[], [], [], []]
    }

    if (previousState.length === 0 || previousState.toString() !== matrix.toString()) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                previousState[row][col] = matrix[row][col]
            }
        }
    }
}
