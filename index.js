require('dotenv').config();

const express = require('express');
const app = express();
const port = 32100;

const blinkstickLib = require('./lib/blinkstick');
global.blinkstickDevice = blinkstickLib.findFirst();

const slackLib = require('./lib/slack');

const blinkstick = require('./plugins/blinkstick/blinkstick');

app.get('/blinkstick/on', (req, res) => {
  blinkstick.turnOffBusyBlink();
  blinkstick.turnOn();
  // slackLib.setSlackStatusAvailable();
  res.send('Blinkstick On');
});

app.get('/blinkstick/off', (req, res) => {
  blinkstick.turnOffBusyBlink();
  blinkstick.turnOff();
  res.send('Blinkstick off');
});

app.get('/blinkstick/busy', (req, res) => {
  blinkstick.turnOffBusyBlink();
  blinkstick.turnBusy();
  res.send('Blinkstick Busy On');
});

// app.get('/blinkstick/lunch', (req, res) => {
//   // blinkstick.turnOffBusyBlink();
//   // blinkstick.turnBusy();
//   // res.send('Blinkstick Busy On');
// });

// app.get('/blinkstick/busy/blink-toggle', (req, res) => {
//   blinkstick.turnOffBusyBlink();
//   blinkstick.toggleBusyBlink();
//   res.send('Blinkstick Busy Blinking Toggling');
// });


// ---------------------------------------------

// app.get('/slack/available', (req, res) => {
//   slackLib.setSlackStatusAvailable();  
//   res.send('Slack - set available');
// });

// app.get('/slack/away', (req, res) => {
//   slackLib.setSlackStatusAway();  
//   res.send('Slack - set away');
// });

// app.get('/slack/lunch', (req, res) => {
//   slackLib.setSlackStatusLunch();  
//   res.send('Slack - set at launch');
// });

// app.get('/slack/away', (req, res) => {
//   slackLib.setSlackPresenceAway();  
//   res.send('Slack - set away');
// });

// app.get('/slack/online', (req, res) => {
//   slackLib.setSlackPresenceAuto();  
//   res.send('Slack - set auto');
// });


// ---------------------------------------------

app.listen(port, () => {
  console.log(`Streamdeck HTTP Request server running... Port ${port}`)
});
