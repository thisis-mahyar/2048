let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
let pre = []
let flag = false

let tileColors = {
    2: '#FF6B6B',
    4: '#FFD93D',
    8: '#6BCB77',
    16: '#4D96FF',
    32: '#F9A826',
    64: '#FF66C4',
    128: '#00C2A8',
    256: '#A66DD4',
    512: '#FFA07A',
    1024: '#FFB347',
    2048: '#9AE66E',
    4096: '#FF8C42',
    8192: '#47B5FF'
}

function display(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            document.querySelector(`.r${i} .c${j}`).textContent = matrix[i][j] === 0 ? '' : matrix[i][j]
            document.querySelector(`.r${i} .c${j}`).style.color = 'white'
            document.querySelector(`.r${i} .c${j}`).style.backgroundColor = matrix[i][j] === 0 ? '#ECECEC' : tileColors[grid[i][j]]
        }
    }
}