let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

function display(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            document.querySelector(`.r${i} .c${j}`).textContent = arr[i][j] === 0 ? '' : arr[i][j]
            document.querySelector(`.r${i} .c${j}`).style.color = 'white'
            document.querySelector(`.r${i} .c${j}`).style.backgroundColor = arr[i][j] === 0 ? 'lightgray' : 'black'
        }
    }
}

function newNum(arr) {
    let randI = Math.floor(Math.random() * arr.length);
    let randJ = Math.floor(Math.random() * arr[randI].length);

    arr[randI][randJ] = 2
}