'use strict'

// only when the page loads, init the game
document.addEventListener('DOMContentLoaded', initGame);
document.addEventListener('keydown', handleKeydown)

function initGame() {
    createNewTile()
    display()
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

    if (didWin()) {
        document.querySelector('.game-state').style.display = 'block'
        document.querySelector('.game-state').textContent = 'You win!'
        document.removeEventListener('keydown', handleKeydown)
    }

    if (didLose()) {
        document.querySelector('.game-state').style.display = 'block'
        document.querySelector('.game-state').textContent = 'You lose!'
        document.removeEventListener('keydown', handleKeydown)
    }
}
