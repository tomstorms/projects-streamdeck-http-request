const express = require('express');
const app = express();
const port = 32100;

const blinkstickLib = require('./lib/blinkstick');
global.blinkstickDevice = blinkstickLib.findFirst();

const blinkstick = require('./blinkstick');

app.get('/on', (req, res) => {
  res.send('Blinkstick On');
  blinkstick.turnOn();
});

app.get('/off', (req, res) => {
  res.send('Blinkstick off');
  blinkstick.turnOff();
});

app.get('/busy', (req, res) => {
  res.send('Blinkstick Busy On');
  blinkstick.turnBusy();
});

app.get('/busy/blink-on', (req, res) => {
  res.send('Blinkstick Busy Blinking On');
  blinkstick.turnOnBlink();
});

app.get('/busy/blink-off', (req, res) => {
  res.send('Blinkstick Busy Blinking Off');
  blinkstick.turnOffBlink();
});

app.listen(port, () => {
  console.log(`Blinkstick server running... Port ${port}`)
});
