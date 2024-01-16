// Required
const blinkstickLib = require('../../lib/blinkstick');
global.blinkstickDevice = blinkstickLib.findFirst();

// States
var _state = 'off';
var _discoInterval = null;

// Functions
module.exports = {
    turnOff: function() {
        _state = 'off';
        if (_discoInterval) {
            clearInterval(_discoInterval);
            _discoInterval = null;
        }
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

    turnOnDisco: function() {
        if (_state === 'on' && _discoInterval) {
            module.exports.turnOff();
            return;
        }
        
        _state = 'on';
        var colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'white'];
        var currentColorIndex = 0;

        _discoInterval = setInterval(function() {
            blinkstickDevice.pulse(colors[currentColorIndex], { 'duration': 500, 'steps': 10 }, function() {
                currentColorIndex++;
                if (currentColorIndex >= colors.length) {
                    currentColorIndex = 0;
                }
            });
        }, 600); // Adjust timing for disco effect
        
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
