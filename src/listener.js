// only when the page loads, init the game
window.addEventListener('load', init)
window.addEventListener('keydown', handleKeydown)

function init() {
    createNewTile(grid)
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

    if (didWin(grid)) {
        document.querySelector('.game-state').style.display = 'block'
        document.querySelector('.game-state').textContent = 'You win!'
        window.removeEventListener('keydown', handleKeydown)
    }
}
