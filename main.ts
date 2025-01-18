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
    	
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60) {
    	
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -50) {
    	
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -40) {
    	
    } else {
    	
    }
    basic.clearScreen()
})
radio.setGroup(53)
basic.forever(function () {
	
})
