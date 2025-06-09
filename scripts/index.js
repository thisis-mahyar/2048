'use strict'

import {spawnTile} from "./functions/spawner.js"
import {displayGame} from "./functions/display.js"
import {moveDown, moveLeft, moveRight, moveUp} from "./functions/moves.js"
import {didLose, didWin} from "./functions/states.js"
import {refreshHandler, revertHandler} from "./functions/handlers.js"

// only when the page loads, init the game
document.addEventListener('DOMContentLoaded', initGame)
document.addEventListener('keydown', handleKeydown)

document.querySelector('.revert-icon').addEventListener('click', revertHandler)
document.querySelector('.refresh-icon').addEventListener('click', refreshHandler)

function initGame() {
    spawnTile()
    displayGame()
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