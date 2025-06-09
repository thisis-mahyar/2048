'use strict'

function didWin() {
    for (let row = 0; row < tiles.length; row++) {
        for (let col = 0; col < tiles[row].length; col++) {
            if (tiles[row][col] === 2048) {
                return true
            }
        }
    }

    return false
}

function didLose() {
    for (let row = 0; row < tiles.length; row++) {
        for (let col = 0; col < tiles[row].length; col++) {
            let self = tiles[row][col]
            let left = row > 0 ? tiles[row - 1][col] : -1
            let right = row < tiles.length - 1 ? tiles[row + 1][col] : -1
            let top = col > 0 ? tiles[row][col - 1] : -1
            let down = col < tiles[row].length - 1 ? tiles[row][col + 1] : -1

            if (left === 0 || right === 0 || top === 0 || down === 0)
                return false

            if (self === left || self === right || self === top || self === down)
                return false
        }
    }

    return true
}
