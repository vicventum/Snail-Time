export class Game {
    rootStyles = document.documentElement.style
    modalStart = document.getElementById('modalStart')
    counter = document.getElementById('counter')
    score = document.getElementById('score')
    maxScore = document.getElementById('maxScore')

    count = 0
    finalCount

    blurModal() {
        setTimeout(() => {
            this.rootStyles.setProperty('--visibleModalStart', 0)
        }, 2500)

        this.modalStart.addEventListener('transitionend', () => this.rootStyles.setProperty('--displayModalStart', 'none'))
    }

    sumCounter(id) {
        if (id === 'canvas') {
            
            this.count++
    
            this.counter.textContent = this.count
        }
    }

    endGame() {
        this.finalCount = this.count

        this.score.textContent = this.finalCount
    }

    restartGame(id) {
        if (id === 'btnYes') location.reload()
        else if (id === 'btnNo') this.rootStyles.setProperty('--scaleModalEnd', 0)
        console.log(id)
    }

    
}