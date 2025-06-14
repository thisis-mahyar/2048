'use strict'

import {data} from "../data.js"

// two approaches to choose a random tile among empty tiles
// 1. choose a random tile, if it is empty, create a new number there
// 2. store all the empty tiles in an array, choose a random one and create a new number in it
// the first approach isn't guaranteed to be efficient, because randomly finding an empty tile may take too long
// so, the second approach is better
function getEmptyTiles() {
    // I decided not to declare a global emptyTiles and keep it in function scopes
    let emptyTiles = []

    for (let row = 0; row < data.tiles.length; row++) {
        for (let col = 0; col < data.tiles[row].length; col++) {
            if (data.tiles[row][col] === 0) {
                emptyTiles.push({row: row, col: col})
            }
        }
    }

    return emptyTiles
}

export function spawnTile() {
    // prevent generating inappropriate numbers
    if (data.previousState.toString() !== data.tiles.toString()) {
        let emptyTiles = getEmptyTiles()

        let random = Math.floor(Math.random() * emptyTiles.length)
        let emptyTile = emptyTiles[random]

        // there's a %17 chance that 4 gets generated
        const dice = Math.floor(Math.random() * 6)
        data.tiles[emptyTile.row][emptyTile.col] = dice === 1 ? 4 : 2

        data.canRevert = true
    }
}