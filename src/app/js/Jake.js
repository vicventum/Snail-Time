export class Jake {
    rootStyles = document.documentElement.style
    getRootStyles = window.getComputedStyle(document.documentElement)
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

    jumpEyes(e, xSnail, ySnail, sizeSnail) {
        const distance = this.distanceTwoPoints((xSnail + (sizeSnail / 2)), (ySnail + (sizeSnail / 2)), e.x, e.y)
        console.log(distance, xSnail, ySnail)

        const widthScreen = window.innerWidth
        let d1 = 73,
            d2 = 195, 
            d3 = 320
        
        if (widthScreen >= 768 && widthScreen < 1024) {
            d1 = 105
            d2 = 340
            d3 = 700
        } else if (widthScreen >= 1024 && widthScreen < 1280) {
            d1 = 110
            d2 = 420
            d3 = 850
        } else if (widthScreen > 1280) {
            d1 = 115
            d2 = 490
            d3 = 1000
        }
        console.log(d1, d2, d3);
        console.log(distance + ' <> ' + d1);

        if (distance < d1) this.rootStyles.setProperty('--scale', 1.7)
        else if (distance < d2) this.rootStyles.setProperty('--scale', 1.25)
        else if (distance < d3) this.rootStyles.setProperty('--scale', 1.07)
        else if (distance > d3) this.rootStyles.setProperty('--scale', 1.015)

        this.eyes.addEventListener('transitionend', () => this.rootStyles.setProperty('--scale', 1))
        this.eyes.addEventListener('transitioncancel', () => this.rootStyles.setProperty('--scale', 1))

    }


    distanceTwoPoints(x1, y1, x2, y2) {
        // return Math.floor((Math.floor(Math.sqrt(Math.pow((x2-x1), 2)) + Math.pow((y2-y1), 2))))
        return Math.sqrt(Math.abs((((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))))
    }

    turn(id) {
        const nTurns = this.numberTurns()

        if (id === 'nose') {
            if (this.getRootStyles.getPropertyValue('--topTongue') !== '30%')
                this.rootStyles.setProperty('--topTongue', `30%`)
            else
                this.rootStyles.setProperty('--topTongue', `82%`)

        } else this.rootStyles.setProperty('--turnsFace', `${nTurns}turn`)
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