function moveRight(matrix) {
    updatePre(matrix)

    for (let i = 0; i < matrix.length; i++)
        matrix[i] = mergeRight(matrix[i])

    createNewTile(matrix)
    display(matrix)
}

function moveLeft(matrix) {
    updatePre(matrix)

    for (let i = 0; i < matrix.length; i++)
        matrix[i] = mergeLeft(matrix[i])

    createNewTile(matrix)
    display(matrix)
}

function moveUp(matrix) {
    updatePre(matrix)

    for (let i = 0; i < matrix.length; i++) {
        let column = [matrix[0][i], matrix[1][i], matrix[2][i], matrix[3][i]]

        column = mergeLeft(column)

        for (let j = 0; j < matrix[i].length; j++)
            matrix[j][i] = column[j]
    }

    createNewTile(matrix)
    display(matrix)
}

function moveDown(matrix) {
    updatePre(matrix)

    for (let i = 0; i < matrix.length; i++) {
        let column = [matrix[0][i], matrix[1][i], matrix[2][i], matrix[3][i]]

        column = mergeRight(column)

        for (let j = 0; j < matrix[i].length; j++)
            matrix[j][i] = column[j]
    }

    createNewTile(matrix)
    display(matrix)
}
