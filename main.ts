input.onButtonPressed(Button.A, function () {
    tall += 1
})
let tall = 0
basic.showNumber(tall)
basic.forever(function () {
    if (tall >= 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showNumber(tall)
    }
})
