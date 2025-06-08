// only when the page loads, init the game
window.addEventListener('load', init)
window.addEventListener('keydown', handleKeydown)

function init() {
    createNewTile(tiles)
    display(tiles)
}

function handleKeydown(e) {
    switch (e.key) {
        case 'ArrowRight':
            moveRight(tiles)
            break

        case 'ArrowLeft':
            moveLeft(tiles)
            break

        case 'ArrowUp':
            moveUp(tiles)
            break

        case 'ArrowDown':
            moveDown(tiles)
            break
    }

    if (didWin(tiles)) {
        document.querySelector('.game-state').style.display = 'block'
        document.querySelector('.game-state').textContent = 'You win!'
        window.removeEventListener('keydown', handleKeydown)
    }

    if (didLose(tiles)) {
        document.querySelector('.game-state').style.display = 'block'
        document.querySelector('.game-state').textContent = 'You lose!'
        window.removeEventListener('keydown', handleKeydown)
    }
}
