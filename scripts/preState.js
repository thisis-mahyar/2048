'use strict'

let pre = []

function updatePre(matrix) {
    if (pre.length === 0) {
        pre = [[], [], [], []]
    }

    if (pre.length === 0 || pre.toString() !== matrix.toString()) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                pre[row][col] = matrix[row][col]
            }
        }
    }
}
