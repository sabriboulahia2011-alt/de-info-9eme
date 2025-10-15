let nnumber = randint(1, 6)
basic.forever(function () {
    input.onGesture(Gesture.Shake, function () {
        if (nnumber == 1) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        } else if (nnumber == 2) {
            basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
        } else if (nnumber == 3) {
            basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        } else if (nnumber == 4) {
            basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        } else if (nnumber == 5) {
            basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        } else if (nnumber == 6) {
            basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        }
        basic.pause(100)
        basic.clearScreen()
    })
    nnumber = 0

})
