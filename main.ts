basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
})
