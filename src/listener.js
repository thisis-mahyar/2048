// only when the page loads, init the game
window.addEventListener('load', init)
window.addEventListener('keydown', handleKeydown)

function init() {
    newNum(grid)
    display(grid)
}

function handleKeydown(e) {
    switch (e.key) {
        case 'ArrowRight':
            moveRight(grid)
            break

        case 'ArrowLeft':
            moveLeft(grid)
            break

        case 'ArrowUp':
            moveUp(grid)
            break

        case 'ArrowDown':
            moveDown(grid)
            break
    }
}
