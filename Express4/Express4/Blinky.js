'use strict';

var uwp = require("uwp");
uwp.projectNamespace("Windows");

var Blinky = function (gpioPinNo) {
    
    //var gpioCtrl = Windows.Devices.Gpio.GpioController.getDefault();

    var gpioController = Windows.Devices.Gpio.GpioController.getDefault();
    //var pin = gpioController.openPin(5);
    //var currentValue = Windows.Devices.Gpio.GpioPinValue.high;
    //pin.write(currentValue);
    //pin.setDriveMode(Windows.Devices.Gpio.GpioPinDriveMode.output)

    GpioPin = gpioController.openPin(gpioPinNo);   
    GpioPin.setDriveMode(Windows.Devices.Gpio.GpioPinDriveMode.output);
    
    currentGpioValue = Windows.Devices.Gpio.GpioPinValue.high;
    GpioPin.write(currentGpioValue);
};

Blinky.prototype.isOn = function () {
    // when pin value is low, the light is on
    return (this.currentGpioValue == Windows.Devices.Gpio.GpioPinValue.low);
}

Blinky.prototype.On = function () {
    currentGpioValue = Windows.Devices.Gpio.GpioPinValue.low;
    GpioPin.write(currentGpioValue);
};

Blinky.prototype.Off = function () {
    currentGpioValue = Windows.Devices.Gpio.GpioPinValue.high;
    BlinkyGpioPin.write(currentGpioValue);
};

Blinky.prototype.DoBlink = function () {
    if (currentGpioValue == Windows.Devices.Gpio.GpioPinValue.low) {
        Off();
    } else {
        On();
    }
};

/*
var gpioController = Windows.Devices.Gpio.GpioController.getDefault();
var pin = gpioController.openPin(5);
var currentValue = Windows.Devices.Gpio.GpioPinValue.high;
pin.write(currentValue);
pin.setDriveMode(Windows.Devices.Gpio.GpioPinDriveMode.output)


http.createServer(function (req, res) {
    if (currentValue == Windows.Devices.Gpio.GpioPinValue.high) {
        currentValue = Windows.Devices.Gpio.GpioPinValue.low;
    } else {
        currentValue = Windows.Devices.Gpio.GpioPinValue.high;
    }
    pin.write(currentValue);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('LED value: ' + currentValue + '\n');
}).listen(1337);

 *  */

module.exports = Blinky;
