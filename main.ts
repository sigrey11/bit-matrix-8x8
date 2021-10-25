max7219_matrix.setup(
4,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
basic.forever(function () {
    max7219_matrix.scrollText(
    "Hello world!",
    0,
    500
    )
})
