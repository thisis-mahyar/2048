function updatePre(matrix) {
    if (pre.length === 0 || pre.toString() !== matrix.toString()) {
        for (let i = 0; i < pre.length; i++) {
            for (let j = 0; j < pre[i].length; j++) {
                pre[i][j] = matrix[i][j]
            }
        }
    }
}

function refresh(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0
        }
    }

    createNewTile(pre, matrix)
    display(matrix)
}

function didWin(matrix) {
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++)
            if (matrix[i][j] === 2048)
                return true

    return false
}