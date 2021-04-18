let img
let moon

let cur

var intro = "Memory"
var one = "58 28 01'N 00 15 36'E"
var two = "52 18 61'N 00 13 66'E"
var three = "03 18'W 54 31'N"
var four = "03 18'W 54 31'N"
var five = "03 19'W 54 31'N"
var six = "03 19'W 54 31'N"
var seven = "00 09'E 50 45'N"

var snd1
var snd2
var sounds = []

let ft

const PATH = 'assets/', FILE = 'riv', EXT = '.mp3'


function preload() {
  ft = loadFont('Cairo-Regular.ttf')
  img = loadImage('one.svg')
  moon = loadImage('moon.svg')

  snd1 = loadSound('riv.mp3')
  snd2 = loadSound('riv1.mp3')
  snd3 = loadSound('riv2.mp3')
  snd4 = loadSound('riv3.mp3')

  //for (var i = 0; i < 4; i++) {
  // sounds[i] = loadSound(PATH + FILE + ++i + EXT)
  // }
}

function setup() {

  createCanvas(windowWidth, windowHeight)
  background(255)
  textFont('Cairo')
  smooth()
  textSize(24)

  sounds = [snd1, snd2, snd3, snd4]
  txt = [one, two, three, four, five, six, seven]

  typeWriter(intro, 0, random(width / 2), height / 2, random(400))
  for (var i = 0; i < txt.length; i++) {
    typeWriter(txt[i], 1, random(width / 2), random(height) + 100, random(400))

  }


}

function draw() {
  stroke(0)
  line(width / 5, 0, width / 5, frameCount * 0.5)
}


function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    text(sentence.substring(0, n + 1), x, y);
    n++;
    setTimeout(function () {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}





function mousePressed() {

  randomSound = Math.floor(Math.random() * sounds.length)
  if (mouseButton === LEFT) {
    image(moon, mouseX, mouseY)
    sounds[randomSound].play()
    return randomSound
  }

}

function keyPressed() {

  if (keyCode === ENTER) {
    sounds[randomSound].stop()
  }
}
