function CW () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P16, index)
        control.waitMicros(20000)
    }
}
function CCW () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P16, 180 - index)
        control.waitMicros(20000)
    }
}
pins.servoWritePin(AnalogPin.P16, 0)
CW()
CCW()
