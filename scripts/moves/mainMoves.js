'use strict'

function moveRight() {
    updatePreviousState()

    for (let i = 0; i < data.tiles.length; i++) {
        data.tiles[i] = mergeRight(data.tiles[i])
    }

    createNewTile()
    display()
}

function moveLeft() {
    updatePreviousState()

    for (let i = 0; i < data.tiles.length; i++) {
        data.tiles[i] = mergeLeft(data.tiles[i])
    }

    createNewTile()
    display()
}

function moveUp() {
    updatePreviousState()

    for (let col = 0; col < data.tiles.length; col++) {
        let column = [data.tiles[0][col], data.tiles[1][col], data.tiles[2][col], data.tiles[3][col]]

        column = mergeLeft(column)

        for (let row = 0; row < data.tiles[col].length; row++)  {
            data.tiles[row][col] = column[row]
        }
    }

    createNewTile()
    display()
}

function moveDown() {
    updatePreviousState()

    for (let col = 0; col < data.tiles.length; col++) {
        let column = [data.tiles[0][col], data.tiles[1][col], data.tiles[2][col], data.tiles[3][col]]

        column = mergeRight(column)

        for (let row = 0; row < data.tiles[col].length; row++) {
            data.tiles[row][col] = column[row]
        }
    }

    createNewTile()
    display()
}
