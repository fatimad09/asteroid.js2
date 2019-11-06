
// game state
let ship = new Ship()
let lasers = []
let rocks = [
  new Rock(),
  new Rock(),
  new Rock(),
  new Rock(),
  new Rock(),
]
let keyPressed = {}

// track user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
})
window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
})

// game loop
function loop() {
  // check user input to change game state
  if (keyPressed['ArrowLeft']) {
    ship.rotateLeft()
  }
  if (keyPressed['ArrowRight']) {
    ship.rotateRight()
  }
  if (keyPressed['ArrowUp']) {
    ship.thrust()
  }
  if (keyPressed['Space']) {
    let newLaser = new Laser(ship.x, ship.y)
    lasers.push(newLaser)
  }

  // state steps through time
  ship.step()
  rocks.forEach(r => r.step())
  lasers.forEach (l => l.step()) 
  // draw all
  erase()
  ship.draw()
  rocks.forEach(r => r.draw())
  lasers.forEach(l => l.draw())
  // trigger loop
  setTimeout(() => loop(), 1000 / 60)
}

// wait for images to load
async function loadGame() {
  await shipSprite.loaded
  await rockSprite.loaded
  loop()
}
loadGame()
