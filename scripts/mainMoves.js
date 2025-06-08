'use strict'

function moveRight(matrix) {
    updatePre(matrix)

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = mergeRight(matrix[i])
    }

    createNewTile(matrix)
    display(matrix)
}

function moveLeft(matrix) {
    updatePre(matrix)

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = mergeLeft(matrix[i])
    }

    createNewTile(matrix)
    display(matrix)
}

function moveUp(matrix) {
    updatePre(matrix)

    for (let col = 0; col < matrix.length; col++) {
        let column = [matrix[0][col], matrix[1][col], matrix[2][col], matrix[3][col]]

        column = mergeLeft(column)

        for (let row = 0; row < matrix[col].length; row++)  {
            matrix[row][col] = column[row]
        }
    }

    createNewTile(matrix)
    display(matrix)
}

function moveDown(matrix) {
    updatePre(matrix)

    for (let col = 0; col < matrix.length; col++) {
        let column = [matrix[0][col], matrix[1][col], matrix[2][col], matrix[3][col]]

        column = mergeRight(column)

        for (let row = 0; row < matrix[col].length; row++) {
            matrix[row][col] = column[row]
        }
    }

    createNewTile(matrix)
    display(matrix)
}
