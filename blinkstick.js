// States
var _state = 'off';
var _tmrBlinker;
var _isBlinkingOn = false;
var _blinkingStateOn = false;

// Functions
module.exports = {

    turnOn: function() {

        _state = 'available';

        if (blinkstickDevice) {
            blinkstickDevice.setColor('green');
        }

    },

    turnOff: function() {

        _state = 'off';

        if (blinkstickDevice) {
            blinkstickDevice.setColor('black');
        }

    },

    turnBusy: function() {

        _state = 'busy';

        if (blinkstickDevice) {
            blinkstickDevice.setColor('red');
        }

    },

    turnOnBusyBlink: function() {

        // Start blink

        _isBlinkingOn = true;

        _tmrBlinker = setInterval(function(){

            console.log(_blinkingStateOn ? 'on' : 'off');

            if (blinkstickDevice) {
                console.log('has device')

                if (_blinkingStateOn) {
                    blinkstickDevice.setColor('red');
                }
                else {
                    blinkstickDevice.setColor('black');
                }

            }

            _blinkingStateOn = !_blinkingStateOn; // toggle


        }, 1000); // 1 sec

    },

    turnOffBusyBlink: function() {

        // Stop blinking
        _blinkingStateOn = false;
        _isBlinkingOn = false;
        clearInterval(_tmrBlinker);

        blinkstickDevice.setColor('black');

    },

    toggleBusyBlink: function() {

        // Toggle Busy Blinking
        if (_isBlinkingOn) {
            module.exports.turnOffBusyBlink();
        }
        else {
            module.exports.turnOnBusyBlink();
        }

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
