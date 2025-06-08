// two approaches to choose a random tile among empty tiles
// 1. choose a random tile, if it is empty, create a new number there
// 2. store all the empty tiles in an array, choose a random one and create a new number in it
// the first approach isn't guaranteed to be efficient, because randomly finding an empty tile may take too long
// so, the second approach is better
function getEmptyTiles(matrix) {
    // I decided not to declare a global emptyTiles and keep it in function scopes
    let emptyTiles = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0)
                emptyTiles.push({i, j})
        }
    }

    return emptyTiles
}

function createNewTile(matrix) {
    // prevent generating inappropriate numbers
    if (pre.toString() !== matrix.toString()) {
        let emptyTiles = getEmptyTiles(tiles)

        let random = Math.floor(Math.random() * emptyTiles.length)
        let emptyTile = emptyTiles[random]

        // there's a %17 chance that 4 gets generated
        const dice = Math.floor(Math.random() * 6)
        matrix[emptyTile.i][emptyTile.j] = dice === 1 ? 4 : 2

        canRevert = true
    }
}