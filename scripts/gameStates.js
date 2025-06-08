'use strict'

function didWin(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 2048) {
                return true
            }
        }
    }

    return false
}

function didLose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let self = matrix[i][j]
            let left = i > 0 ? matrix[i - 1][j] : -1
            let right = i < matrix.length - 1 ? matrix[i + 1][j] : -1
            let top = j > 0 ? matrix[i][j - 1] : -1
            let down = j < matrix[i].length - 1 ? matrix[i][j + 1] : -1

            if (left === 0 || right === 0 || top === 0 || down === 0)
                return false

            if (self === left || self === right || self === top || self === down)
                return false
        }
    }

    return true
}
