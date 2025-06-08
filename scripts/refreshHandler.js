function refreshHandler(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0
        }
    }

    createNewTile(matrix)
    display(matrix)
}

document.querySelector('.refresh-icon').addEventListener('click', () => refreshHandler(tiles))