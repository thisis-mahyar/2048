'use strict'

function moveRight() {
    updatePreviousState()

    for (let i = 0; i < tiles.length; i++) {
        tiles[i] = mergeRight(tiles[i])
    }

    createNewTile()
    display()
}

function moveLeft() {
    updatePreviousState()

    for (let i = 0; i < tiles.length; i++) {
        tiles[i] = mergeLeft(tiles[i])
    }

    createNewTile()
    display()
}

function moveUp() {
    updatePreviousState()

    for (let col = 0; col < tiles.length; col++) {
        let column = [tiles[0][col], tiles[1][col], tiles[2][col], tiles[3][col]]

        column = mergeLeft(column)

        for (let row = 0; row < tiles[col].length; row++)  {
            tiles[row][col] = column[row]
        }
    }

    createNewTile()
    display()
}

function moveDown() {
    updatePreviousState()

    for (let col = 0; col < tiles.length; col++) {
        let column = [tiles[0][col], tiles[1][col], tiles[2][col], tiles[3][col]]

        column = mergeRight(column)

        for (let row = 0; row < tiles[col].length; row++) {
            tiles[row][col] = column[row]
        }
    }

    createNewTile()
    display()
}
