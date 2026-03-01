function Stop_NoCross () {
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function Down () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    75
    )
    basic.pause(1000)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    basic.pause(1000)
}
sensors.DDMmotor(
AnalogPin.P15,
0,
AnalogPin.P16,
0
)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    70
    )
    basic.showNumber(1)
    basic.pause(2000)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    70
    )
    basic.showNumber(0)
    basic.pause(2000)
})
