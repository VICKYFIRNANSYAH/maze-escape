function randomFinish () {
    finishX = randint(0, 4)
    finishY = randint(0, 4)
    // Jangan sama dengan posisi player
    while (finishX == playerX && finishY == playerY) {
        finishX = randint(0, 4)
        finishY = randint(0, 4)
    }
}
let playerY = 0
let playerX = 0
let finishY = 0
let finishX = 0
randomFinish()
basic.forever(function () {
    basic.clearScreen()
    // Gerak kiri
    if (input.acceleration(Dimension.X) < -300) {
        if (playerX > 0) {
            playerX += -1
            basic.pause(150)
        }
    }
    // Gerak kanan
    if (input.acceleration(Dimension.X) > 300) {
        if (playerX < 4) {
            playerX += 1
            basic.pause(150)
        }
    }
    // Gerak atas
    if (input.acceleration(Dimension.Y) < -300) {
        if (playerY > 0) {
            playerY += -1
            basic.pause(150)
        }
    }
    // Gerak bawah
    if (input.acceleration(Dimension.Y) > 300) {
        if (playerY < 4) {
            playerY += 1
            basic.pause(150)
        }
    }
    // Player
    led.plot(playerX, playerY)
    // Finish
    led.plotBrightness(finishX, finishY, 50)
    // Menang
    if (playerX == finishX && playerY == finishY) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
        // Reset player
        playerX = 0
        playerY = 0
        // Finish baru random
        randomFinish()
    }
})
