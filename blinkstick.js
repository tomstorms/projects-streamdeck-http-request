// States
var _state = 'off';
var _tmrBlinker;
var _isBlinkingOn = false;
var _blinkingStateOn = false;

// Functions
module.exports = {

    turnOn: function(keyIndex) {

        _state = 'available';

        if (blinkstickDevice) {
            blinkstickDevice.setColor('green');
        }

    },

    turnOff: function(keyIndex) {

        _state = 'off';

        if (blinkstickDevice) {
            blinkstickDevice.setColor('black');
        }

    },

    turnBusy: function(keyIndex) {

        _state = 'busy';

        if (blinkstickDevice) {
            blinkstickDevice.setColor('red');
        }

    },

    turnOnBlink: function(keyIndex) {

        // Start blink

        _isBlinkingOn = true;

        _tmrBlinker = setInterval(function(){

            console.log(_blinkingStateOn ? 'on' : 'off');

            if (_blinkingStateOn) {
                
                if (_state == 'busy') {
                    if (blinkstickDevice) {
                        blinkstickDevice.setColor('red');
                    }
                }
                else if (_state == 'available') {
                    if (blinkstickDevice) {
                        blinkstickDevice.setColor('green');
                    }
                }
                else {
                    blinkstickDevice.setColor('black');
                }

            }
            else {
                if (blinkstickDevice) {
                    blinkstickDevice.setColor('black');
                }
            }


            _blinkingStateOn = !_blinkingStateOn; // toggle


        }, 1000); // 1 sec

    },

    turnOffBlink: function(keyIndex) {

        // Stop blinking
        _blinkingStateOn = false;
        _isBlinkingOn = false;
        clearInterval(_tmrBlinker);

        if (_state == 'busy') {
            if (blinkstickDevice) {
                blinkstickDevice.setColor('red');
            }
        }
        else if (_state == 'available') {
            if (blinkstickDevice) {
                blinkstickDevice.setColor('green');
            }
        }
        else {
            blinkstickDevice.setColor('black');
        }

    },

    toggleOn: function(keyIndex) {

        if (_state == 'off') {
            module.exports.turnOn(keyIndex);
        }
        else {
            module.exports.turnOff(keyIndex);
        }

    },

};
