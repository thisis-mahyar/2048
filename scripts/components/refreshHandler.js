'use strict'

import {data} from "../data.js"
import {createNewTile} from "../moves/tileGenerator.js"
import {display} from "../displayGame.js"

export function refreshHandler() {
    for (let row = 0; row < data.tiles.length; row++) {
        for (let col = 0; col < data.tiles[row].length; col++) {
            data.tiles[row][col] = 0
        }
    }

    createNewTile()
    display()
}

document.querySelector('.refresh-icon').addEventListener('click', refreshHandler)