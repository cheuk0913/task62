let C = 0
let F = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    C = input.temperature()
    F = C * 1.8 + 32
    basic.showNumber(F)
})
