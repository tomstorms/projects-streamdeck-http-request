const express = require('express');
const app = express();
const port = 32100;

const blinkstickLib = require('./lib/blinkstick');
global.blinkstickDevice = blinkstickLib.findFirst();

const blinkstick = require('./blinkstick');

app.get('/on', (req, res) => {
  res.send('Blinkstick On');
  blinkstick.turnOffBusyBlink();
  blinkstick.turnOn();
});

app.get('/off', (req, res) => {
  res.send('Blinkstick off');
  blinkstick.turnOffBusyBlink();
  blinkstick.turnOff();
});

app.get('/busy', (req, res) => {
  res.send('Blinkstick Busy On');
  blinkstick.turnOffBusyBlink();
  blinkstick.turnBusy();
});

app.get('/busy/blink-toggle', (req, res) => {
  res.send('Blinkstick Busy Blinking Toggling');
  blinkstick.turnOffBusyBlink();
  blinkstick.toggleBusyBlink();
});

app.listen(port, () => {
  console.log(`Blinkstick server running... Port ${port}`)
});
