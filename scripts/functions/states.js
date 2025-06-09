'use strict'

import {data} from "../data.js"

export function updatePreviousState() {
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

export function didWin() {
    for (let row = 0; row < data.tiles.length; row++) {
        for (let col = 0; col < data.tiles[row].length; col++) {
            if (data.tiles[row][col] === 2048) {
                return true
            }
        }
    }

    return false
}

export function didLose() {
    for (let row = 0; row < data.tiles.length; row++) {
        for (let col = 0; col < data.tiles[row].length; col++) {
            let self = data.tiles[row][col]
            let left = row > 0 ? data.tiles[row - 1][col] : -1
            let right = row < data.tiles.length - 1 ? data.tiles[row + 1][col] : -1
            let top = col > 0 ? data.tiles[row][col - 1] : -1
            let down = col < data.tiles[row].length - 1 ? data.tiles[row][col + 1] : -1

            if (left === 0 || right === 0 || top === 0 || down === 0) {
                return false
            }

            if (self === left || self === right || self === top || self === down) {
                return false
            }
        }
    }

    return true
}