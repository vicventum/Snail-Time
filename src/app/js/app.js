// imports
import { Game } from "./Game";
import { Snail } from "./Snail";
import { Jake } from "./Jake";

// Objects instance 
const _Game = new Game();
const _Snail = new Snail();
const _Jake = new Jake();

// Variables ========================
const face = document.getElementById('face'),
    modalEnd = document.getElementById('modalEnd')

let snail

// Listeners ========================
addEventListener('DOMContentLoaded', blurModal)
addEventListener('DOMContentLoaded', createSnail)
addEventListener('DOMContentLoaded', checkStorage)
addEventListener('mousemove', moveEyes)
addEventListener('click', jumpEyes)
addEventListener('click', sumCounter)
face.addEventListener('click', turn)
modalEnd.addEventListener('click', restartGame)

// Functions ========================
function checkStorage() {
    _Game.checkStorage()
}
function blurModal() {
    _Game.blurModal()
}
function restartGame(e) {
    _Game.restartGame(e.target.id)
}
function sumCounter(e) {
    console.log(e.target.id);
    _Game.sumCounter(e.target.id)
}
// -------------

function createSnail(e) {
    _Snail.createSnail(e)
    snail = document.getElementById('snail')
    snail.addEventListener('click', findSnail)
}
function findSnail() {
    _Snail.findSnail(snail)

    _Game.endGame()
}
// -------------

function moveEyes(e) {
    _Jake.moveEyes(e)
}
function jumpEyes(e) {
    _Jake.jumpEyes(e, _Snail.xSnail, _Snail.ySnail, _Snail.sizeSnail)
}
function turn(e) {
    _Jake.turn(e.target.offsetParent.id)
}