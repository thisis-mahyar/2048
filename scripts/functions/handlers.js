'use strict'

import {data} from "../data.js"
import {spawnTile} from "./spawner.js"
import {displayGame} from "./display.js"

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
        displayGame()
    }
}

export function refreshHandler() {
    for (let row = 0; row < data.tiles.length; row++) {
        for (let col = 0; col < data.tiles[row].length; col++) {
            data.tiles[row][col] = 0
        }
    }

    spawnTile()
    displayGame()
}