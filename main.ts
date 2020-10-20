input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    stepGoal += 100
    basic.showNumber(stepGoal)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    stepGoal += -100
    basic.showNumber(stepGoal)
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    basic.showNumber(stepGoal)
})
let stepGoal = 0
music.setVolume(127)
let step = 0
stepGoal = 0
basic.forever(function () {
    basic.showNumber(step)
    if (step > stepGoal) {
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        if (input.buttonIsPressed(Button.AB)) {
            led.stopAnimation()
            basic.clearScreen()
            music.setVolume(0)
        }
    }
})
