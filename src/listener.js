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
            moveRight()
            break

        case 'ArrowLeft':
            moveLeft()
            break

        case 'ArrowUp':
            moveUp()
            break

        case 'ArrowDown':
            moveDown()
            break
    }
}
