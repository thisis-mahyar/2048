'use strict'

import {data} from "../data.js"
import {display} from "../displayGame.js"

export function revertHandler() {
    if (data.canRevert) {
        // somehow, using map() doesn't work properly here
        // if you move, undo, move, undo, it won't return the right state
        for (let row = 0; row < data.tiles.length; row++) {
            for (let col = 0; col < data.tiles[row].length; col++) {
                data.tiles[row][col] = data.previousState[row][col]
            }
        }

        data.previousState.length = 0 // empty the array

        data.canRevert = false
        display()
    }
}

document.querySelector('.revert-icon').addEventListener('click', revertHandler)