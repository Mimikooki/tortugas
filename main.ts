basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 25) {
        basic.showIcon(IconNames.Tortoise)
    }
})
