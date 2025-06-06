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