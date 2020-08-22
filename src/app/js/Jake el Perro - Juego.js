/**
 * Idea: Hacer una juego donde a Jake se le agranden cada vez mas los ojos al hacer 'clik' en un elemento que estará oculto al usuario
 * Algoritmo:
 *      - Funcion para crear el caracolito
 *      - Funcion para hacer que aparezca cuando se haga click sobre él
 *      - Modificar funcion para que los ojos de Jake indiquen que tan cerca se está del caracolito
 * 
 * Ideas:
 *      - Que se indique donde quiere que esté Jake, si en el centro o abajo
 *      - Agregar numero de intentos
 *      - Que se indique con qué dificultad se quiere jugar:
 *          - Facil: numero de intentos elevados, se agranda un poco la cara de Jake 
 *          - Medio: numero de intentos moderado, se mantiene el tamaño de la cara de Jake 
 *          - Dificil: numero de intentos reducido, se achica la cara de Jake 
 * 
 *      - Hacer que los ojos parpadeen
 */

// Variables ----------------------------------------------------------------------------------------------
const rootStyles = document.documentElement.style,
    rootStylesGet = window.getComputedStyle(document.documentElement),
    modalInicio = document.getElementById('modal-inicio'),
    modalFin = document.getElementById('modal-fin')
    body = document.querySelector('body'),
    cara = document.getElementById('cara'),
    ojos = document.getElementById('ojos'),
    bigotes = document.getElementById('bigote'),
    pupilaIzq = document.getElementById('pupila-izq'),
    pupilaDer = document.getElementById('pupila-der'),
    posicionPupilaIqz = pupilaIzq.getBoundingClientRect(),
    posicionPupilaDer = pupilaDer.getBoundingClientRect()
    

    // console.log(caracolito)
    {/**
     * NOTA: Por alguna razon la forma para hacer referencia a las variables CSS con "document.documentElement.style" no funciona para optener el valor de una variable CSS, por lo qu ese usa el forma "window.getComputedStyle(document.documentElement).getPropertyValue()" que es la que funciona
     */
    }
const puntoMedio = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--puntoMedio")),
    tamanioCaracolito = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--tamanioCaracolito"))
const h = cara.getBoundingClientRect()
let distXIzq=0,
    distYIzq=0,
    distXDer=0,
    distYDer=0
let xCaracolito,
    yCaracolito
let nAnterior



// Event Listeners --------------------------------------------------------------------------------------------
eventListeners()

function eventListeners() {
    addEventListener('DOMContentLoaded', difuminarModal)
    addEventListener('DOMContentLoaded', crearCaracolito)
    addEventListener('mousemove', moverOjos)
    addEventListener('click', saltoOjos)
    cara.addEventListener('click', girar)
    modalFin.addEventListener('click', reiniciarJuego)
}

// Funciones --------------------------------------------------------------------------------------------------
function difuminarModal() {
    setTimeout(() => {
        rootStyles.setProperty('--visibleModalInicio', 0)
    }, 2500)
    modalInicio.addEventListener('transitionend', () => rootStyles.setProperty('--displayModalInicio', 'none'))
}

function reiniciarJuego(e) {
    if (e.target.id === 'btnSi') location.reload()
    else if (e.target.id === 'btnNo') rootStyles.setProperty('--escalaModalFin', 0)
    console.log(e.target.id)
}

function crearCaracolito(e) {
    // Creando caracolito
    const caracolito = document.createElement('img')
    // Insertando clases
    caracolito.classList.add('caracolito')
    caracolito.id = 'caracolito'
    caracolito.setAttribute('src', 'img/caracolito.png')
    e.target.body.appendChild(caracolito)
    
    // Ubicando caracolito
    ubicarCaracolito()
}

function ubicarCaracolito() {
    let min=0, maxX=window.innerWidth, maxY=window.innerHeight

    do {
        xCaracolito = Math.round(Math.random() * (maxX - min) + min)
        yCaracolito = Math.round(Math.random() * (maxY - min) + min)
        // console.log("entra")
        
        console.log(`x: ${xCaracolito}`)
        console.log(`y: ${yCaracolito}`)
    } while ((!((xCaracolito < (tamanioCara.x - tamanioCaracolito)) || (xCaracolito > tamanioCara.right)))
        &&   (!((yCaracolito < (tamanioCara.y - tamanioCaracolito)) || (yCaracolito > tamanioCara.bottom))))

    if ((xCaracolito + tamanioCaracolito) > maxX) xCaracolito -= tamanioCaracolito
    if ((yCaracolito + tamanioCaracolito) > maxY) yCaracolito -= tamanioCaracolito
    console.log(`x = ${xCaracolito}`) 
    console.log(`y = ${yCaracolito}`) 
        
    rootStyles.setProperty('--caracolitoX', xCaracolito)
    rootStyles.setProperty('--caracolitoY', yCaracolito)

    const caracolito = document.getElementById('caracolito')
    caracolito.addEventListener('click', encontrarCaracolito)
}

function encontrarCaracolito() {
    
    rootStyles.setProperty('--visible', 1)
    rootStyles.setProperty('--escalaCaracolito', 1.2)
    caracolito.addEventListener('transitionend', () => rootStyles.setProperty('--escalaCaracolito', 1))
    console.log("entra en encontrar")

    setTimeout(() => {
        // rootStyles.setProperty('--displayModalFin', 'flex')
        rootStyles.setProperty('--escalaModalFin', 1)
    }, 1000)
}

function moverOjos(e) {

    distXIzq = (posicionPupilaIqz.x + puntoMedio) - e.x
    distYIzq = (posicionPupilaIqz.y + puntoMedio) - e.y
    distXDer = (posicionPupilaDer.x + puntoMedio) - e.x
    distYDer = (posicionPupilaDer.y + puntoMedio) - e.y

    if (e.x > posicionPupilaIqz.x + puntoMedio) rootStyles.setProperty('--xIzq',distXIzq * -0.1) 
    else rootStyles.setProperty('--xIzq', distXIzq * -0.1)

    if (e.y > posicionPupilaIqz.y + puntoMedio) rootStyles.setProperty('--yIzq',distYIzq * -0.1) 
    else rootStyles.setProperty('--yIzq', distYIzq * -0.1)


    if (e.x > posicionPupilaDer.x + puntoMedio) rootStyles.setProperty('--xDer',distXDer * -0.1) 
    else rootStyles.setProperty('--xDer', distXDer * -0.1)

    if (e.y > posicionPupilaDer.y + puntoMedio) rootStyles.setProperty('--yDer',distYDer * -0.1) 
    else rootStyles.setProperty('--yDer', distYDer * -0.1)


}

function saltoOjos(e) {
    let distancia = distaciaDosPuntos((xCaracolito + 50), (yCaracolito + 50), e.x, e.y) 
    console.log(distancia)

    if (distancia < 120) rootStyles.setProperty('--escala', 1.6)
    else if (distancia < 500) rootStyles.setProperty('--escala', 1.25)
    else if (distancia < 1000) rootStyles.setProperty('--escala', 1.13)
    else if (distancia > 1000) rootStyles.setProperty('--escala', 1.03)
    ojos.addEventListener('transitionend', () => rootStyles.setProperty('--escala', 1))
    ojos.addEventListener('transitioncancel', () => rootStyles.setProperty('--escala', 1))
    
}


function distaciaDosPuntos(x1,y1,x2,y2) {
    // return Math.floor((Math.floor(Math.sqrt(Math.pow((x2-x1), 2)) + Math.pow((y2-y1), 2))))
    return Math.sqrt(Math.abs((((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)))))
}

function numeroVueltas() {
    let n, min=-2, max=2

    n = Math.round(Math.random() * (max - min) + min)
    // console.log(rootStylesGet.getPropertyValue('--vueltasBigote'))
    if (n === nAnterior) n++
    nAnterior = n
    return n
}

function girar(e) {
    const nVueltas = numeroVueltas()
    console.log(tamanioCara)
    
    if (e.target.offsetParent.id === 'bigote') rootStyles.setProperty('--vueltasBigote', `${nVueltas}turn`)
    else rootStyles.setProperty('--vueltasCara', `${nVueltas}turn`)
}