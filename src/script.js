import renderLoop from './lib/renderLoop.js'

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = (canvas.width = 600)
const CANVAS_HEIGHT = (canvas.height = 600)

const playerImage = new Image()
playerImage.src = './assets/shadow_dog.png'

const spriteWidth = 575
const spriteHight = 523
let frameX = 0
let frameY = 0

let gameFrame = 0
const staggeredFrames = 5

renderLoop(() => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // staggering -> we're dividing by 5 so the first 5 are zero (because of Math.floor) then 1
  // staggeredFrames = 5 -> 5 times each frame below (0..6)
  // 0%7=0, 1%7=1, 2%7=2, 3%7=3, 4%7=4, 5%7=5 6%7=6
  // then again 7%7=0 8%7=1, 9%7=2... 0..6... 0..6... 0..6 looping
  const position = Math.floor(gameFrame / staggeredFrames) % 7 // 7 to have 7 frames - 0..6
  frameX = spriteWidth * position

  ctx.drawImage(
    playerImage,
    frameX,
    spriteHight * frameY,
    spriteWidth,
    spriteHight,
    0,
    0,
    spriteWidth,
    spriteHight,
  )

  gameFrame += 1
})
