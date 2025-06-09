'use strict'

// only when the page loads, init the game
document.addEventListener('DOMContentLoaded', initGame);
document.addEventListener('keydown', handleKeydown)

function initGame() {
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
        document.removeEventListener('keydown', handleKeydown)
    }

    if (didLose(tiles)) {
        document.querySelector('.game-state').style.display = 'block'
        document.querySelector('.game-state').textContent = 'You lose!'
        document.removeEventListener('keydown', handleKeydown)
    }
}
