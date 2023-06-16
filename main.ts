// Sender micro:bit sends temperature and wind movement data.
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    serial.writeValue(name, value)
})
radio.setGroup(11)
