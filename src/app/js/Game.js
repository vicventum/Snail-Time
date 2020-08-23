export class Game {
    rootStyles = document.documentElement.style
    modalStart = document.getElementById('modalStart')


    blurModal() {
        setTimeout(() => {
            this.rootStyles.setProperty('--visibleModalStart', 0)
        }, 2500)

        this.modalStart.addEventListener('transitionend', () => this.rootStyles.setProperty('--displayModalStart', 'none'))
    }

    restartGame(e) {
        if (e.target.id === 'btnYes') location.reload()
        else if (e.target.id === 'btnNo') this.rootStyles.setProperty('--scaleModalEnd', 0)
        console.log(e.target.id)
    }

}