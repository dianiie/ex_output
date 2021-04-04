function CW () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P16, index)
        control.waitMicros(20000)
    }
}
function Window_Close () {
    dgr = 90
    for (let index = 0; index < 80; index++) {
        pins.servoWritePin(AnalogPin.P16, dgr)
        dgr += -1
        control.waitMicros(20000)
    }
}
function Window_Open () {
    dgr = 10
    for (let index = 0; index < 80; index++) {
        pins.servoWritePin(AnalogPin.P16, dgr)
        dgr += 1
        control.waitMicros(20000)
    }
}
function CCW () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P16, 180 - index)
        control.waitMicros(20000)
    }
}
let dgr = 0
Window_Close()
basic.pause(1000)
Window_Open()
