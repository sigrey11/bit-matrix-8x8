max7219_matrix.setup(
4,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.clockwise,
false
)
basic.forever(function () {
    max7219_matrix.scrollText(
    "бебра",
    0,
    500
    )
    music.playMelody("F B - F A E C E ", 162)
})
