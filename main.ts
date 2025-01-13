radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -95) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -75) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.clearScreen()
})
radio.setGroup(53)
basic.forever(function () {
	
})
