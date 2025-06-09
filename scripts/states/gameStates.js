'use strict'

function didWin(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 2048) {
                return true
            }
        }
    }

    return false
}

function didLose(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let self = matrix[row][col]
            let left = row > 0 ? matrix[row - 1][col] : -1
            let right = row < matrix.length - 1 ? matrix[row + 1][col] : -1
            let top = col > 0 ? matrix[row][col - 1] : -1
            let down = col < matrix[row].length - 1 ? matrix[row][col + 1] : -1

            if (left === 0 || right === 0 || top === 0 || down === 0)
                return false

            if (self === left || self === right || self === top || self === down)
                return false
        }
    }

    return true
}
