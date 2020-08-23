import { Jake } from "./Jake";
const _Jake = new Jake()

export class Snail {
    sizeSnail = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--sizeSnail"))
    rootStyles = document.documentElement.style
    

    snail
    xSnail
    ySnail

    createSnail(e) {
        const snail = document.createElement('img')

        // Insert classes and attributes
        snail.classList.add('snail')
        snail.id = 'snail'
        snail.setAttribute('src', 'snail.13182426.png')
        e.target.body.appendChild(snail)

        // Locate snail
        this.locateSnail()        
    }

    locateSnail() {
        let min = 0,
            maxX = window.innerWidth,
            maxY = window.innerHeight

        do {
            this.xSnail = Math.round(Math.random() * (maxX - min) + min)
            this.ySnail = Math.round(Math.random() * (maxY - min) + min)

            console.log(`x: ${this.xSnail}`)
            console.log(`y: ${this.ySnail}`)
        } while ((
            ! ((this.xSnail < (_Jake.sizeFace.x - this.sizeSnail)) 
            || (this.xSnail > _Jake.sizeFace.right))) 
            && (!((this.ySnail < (_Jake.sizeFace.y - this.sizeSnail)) 
            || (this.ySnail > _Jake.sizeFace.bottom))))

        if ((this.xSnail + this.sizeSnail) > maxX) this.xSnail -= this.sizeSnail
        if ((this.ySnail + this.sizeSnail) > maxY) this.ySnail -= this.sizeSnail
        console.log(`x = ${this.xSnail}`)
        console.log(`y = ${this.ySnail}`)

        this.rootStyles.setProperty('--snailX', this.xSnail)
        this.rootStyles.setProperty('--snailY', this.ySnail)
    }

    findSnail(snail) {
        console.log('=>');
        console.log(this.rootStyles);
        this.rootStyles.setProperty('--visible', 1)
        this.rootStyles.setProperty('--scaleSnail', 1.2)
        snail.addEventListener('transitionend', () => this.rootStyles.setProperty('--scaleSnail', 1))

        setTimeout(() => {
            // this.rootStyles.setProperty('--displayModalFin', 'flex')
            this.rootStyles.setProperty('--scaleModalEnd', 1)
        }, 1000)
    }
}