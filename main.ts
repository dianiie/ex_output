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
function door (action: string) {
    if (action == "o" || action == "O") {
        dgr = 0
        for (let index = 0; index < 60; index++) {
            pins.servoWritePin(AnalogPin.P12, dgr)
            dgr += 1
            control.waitMicros(20000)
        }
    } else if (action == "c" || action == "C") {
        dgr = 60
        for (let index = 0; index < 60; index++) {
            pins.servoWritePin(AnalogPin.P12, dgr)
            dgr += -1
            control.waitMicros(20000)
        }
    }
}
function window (action: string) {
    if (action == "O" || action == "o") {
        dgr = 10
        for (let index = 0; index < 80; index++) {
            pins.servoWritePin(AnalogPin.P16, dgr)
            dgr += 1
            control.waitMicros(20000)
        }
    } else if (action == "C" || action == "c") {
        dgr = 90
        for (let index = 0; index < 80; index++) {
            pins.servoWritePin(AnalogPin.P16, dgr)
            dgr += -1
            control.waitMicros(20000)
        }
    }
}
function CCW () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P16, 180 - index)
        control.waitMicros(20000)
    }
}
function cloths2 (action: string) {
    if (action == "O" || action == "o") {
        dgr = 120
        for (let index = 0; index < 100; index++) {
            pins.servoWritePin(AnalogPin.P8, dgr)
            dgr += -1
            control.waitMicros(20000)
        }
    } else if (action == "C" || action == "c") {
        dgr = 20
        for (let index = 0; index < 100; index++) {
            pins.servoWritePin(AnalogPin.P8, dgr)
            dgr += 1
            control.waitMicros(20000)
        }
    }
}
let dgr = 0
door("o")
basic.pause(1000)
door("c")
