export class Jake {
    rootStyles = document.documentElement.style
    sizeFace = face.getBoundingClientRect()
    halfPoint = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--halfPoint"))
    
    eyes = document.getElementById('eyes')

    pupilLeft = document.getElementById('pupilLeft')
    pupilRight = document.getElementById('pupilRight')
    posPupilLeft = this.pupilLeft.getBoundingClientRect()
    posPupilRight = this.pupilRight.getBoundingClientRect()

    distXLeft  = 0
    distYLeft  = 0
    distXRight = 0
    distYRight = 0

    nLast

    moveEyes(e) {

        this.distXLeft = (this.posPupilLeft.x + this.halfPoint) - e.x
        this.distYLeft = (this.posPupilLeft.y + this.halfPoint) - e.y
        this.distXRight = (this.posPupilRight.x + this.halfPoint) - e.x
        this.distYRight = (this.posPupilRight.y + this.halfPoint) - e.y

        if (e.x > this.posPupilLeft.x + this.halfPoint) this.rootStyles.setProperty('--xL', this.distXLeft * -0.1)
        else this.rootStyles.setProperty('--xL', this.distXLeft * -0.1)

        if (e.y > this.posPupilLeft.y + this.halfPoint) this.rootStyles.setProperty('--yL', this.distYLeft * -0.1)
        else this.rootStyles.setProperty('--yL', this.distYLeft * -0.1)


        if (e.x > this.posPupilRight.x + this.halfPoint) this.rootStyles.setProperty('--xR', this.distXRight * -0.1)
        else this.rootStyles.setProperty('--xR', this.distXRight * -0.1)

        if (e.y > this.posPupilRight.y + this.halfPoint) this.rootStyles.setProperty('--yR', this.distYRight * -0.1)
        else this.rootStyles.setProperty('--yR', this.distYRight * -0.1)


    }

    jumpEyes(e, xSnail, ySnail) {
        // FIXME: el 50 que se le suma a la distancia debe de ser la mitad del tamanio del snail, por lo que debe de ser calculado dinamicamente
        const distance = this.distanceTwoPoints((xSnail + 50), (ySnail + 50), e.x, e.y)
        console.log(distance, xSnail, ySnail)

        if (distance < 120) this.rootStyles.setProperty('--scale', 1.6)
        else if (distance < 500) this.rootStyles.setProperty('--scale', 1.25)
        else if (distance < 1000) this.rootStyles.setProperty('--scale', 1.13)
        else if (distance > 1000) this.rootStyles.setProperty('--scale', 1.03)

        this.eyes.addEventListener('transitionend', () => this.rootStyles.setProperty('--scale', 1))
        this.eyes.addEventListener('transitioncancel', () => this.rootStyles.setProperty('--scale', 1))

    }


    distanceTwoPoints(x1, y1, x2, y2) {
        // return Math.floor((Math.floor(Math.sqrt(Math.pow((x2-x1), 2)) + Math.pow((y2-y1), 2))))
        console.log('->');
        console.log(x1, y1, x2, y2)
        return Math.sqrt(Math.abs((((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))))
    }

    turn(id) {
        const nTurns = this.numberTurns()
        console.log(this.sizeFace)

        if (id === 'nose') 
             this.rootStyles.setProperty('--turnsNose', `${nTurns}turn`)
        else this.rootStyles.setProperty('--turnsFace', `${nTurns}turn`)
    }

    numberTurns() {
        let n,
            min = -2,
            max = 2

        n = Math.round(Math.random() * (max - min) + min)
        // console.log(this.rootStylesGet.getPropertyValue('--vueltasBigote'))
        if (n === this.nLast) n++
        this.nLast = n
        return n
    }
}