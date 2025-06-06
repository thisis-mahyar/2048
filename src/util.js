let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

function display(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            document.querySelector(`.r${i} .c${j}`).textContent = matrix[i][j] === 0 ? '' : matrix[i][j]
            document.querySelector(`.r${i} .c${j}`).style.color = 'white'
            document.querySelector(`.r${i} .c${j}`).style.backgroundColor = matrix[i][j] === 0 ? 'lightgray' : 'black'
        }
    }
}

function newNum(matrix) {
    let randI = Math.floor(Math.random() * matrix.length);
    let randJ = Math.floor(Math.random() * matrix[randI].length);

    // there's a %17 chance that 4 gets generated
    const dice = Math.floor(Math.random() * 6)
    matrix[randI][randJ] = dice === 1 ? 4 : 2
}