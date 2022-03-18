// Required
const blinkstickLib = require('../../lib/blinkstick');
global.blinkstickDevice = blinkstickLib.findFirst();

// States
var _state = 'off';

// Functions
module.exports = {
    turnOff: function() {
        _state = 'off';
        blinkstickDevice.setColor('black');
    },

    turnOn: function() {
        module.exports.turnOnGreen();
    },

    turnOnRed: function() {
        _state = 'on';
        blinkstickDevice.setColor('red');
    },

    turnOnGreen: function() {
        _state = 'on';
        blinkstickDevice.setColor('green');
    },

    turnOnYellow: function() {
        _state = 'on';
        blinkstickDevice.setColor('yellow');
    },

    toggleOn: function() {
        if (_state == 'off') {
            module.exports.turnOn();
        }
        else {
            module.exports.turnOff();
        }
    },
};
