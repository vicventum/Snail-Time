export class Game {
    rootStyles = document.documentElement.style
    modalStart = document.getElementById('modalStart')
    counter = document.getElementById('counter')
    score = document.getElementById('score')
    maxScoreElement = document.getElementById('maxScore')

    count = 0
    finalCount

    checkStorage() {
        if (!localStorage.maxScore) localStorage.maxScore = 999999999999
    }

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

        if (this.finalCount < localStorage.maxScore) {
            localStorage.maxScore = this.finalCount
            this.maxScoreElement.textContent = `${localStorage.maxScore}!!`
        } else 
            this.maxScoreElement.textContent = localStorage.maxScore
    }

    restartGame(id) {
        if (id === 'btnYes') location.reload()
        else if (id === 'btnNo') this.rootStyles.setProperty('--scaleModalEnd', 0)
        console.log(id)
    }

    
}