require('dotenv').config();

const express = require('express');
const app = express();
const port = 32100;

const blinkstick = require('./plugins/blinkstick/blinkstick');
const slack = require('./plugins/slack/slack');

// --- STATUS ------------------------------------------

app.get('/status/off', (req, res) => {
  blinkstick.turnOff();

  slack.setSlackPresenceAway();
  slack.setSlackStatusReset();

  res.send('Status: Off');
});

app.get('/status/available', (req, res) => {
  blinkstick.turnOn();

  slack.setSlackPresenceAuto();
  slack.setSlackStatusAvailable();

  res.send('Status: Available');
});

app.get('/status/in-meeting', (req, res) => {
  blinkstick.turnOnRed();

  slack.setSlackPresenceAuto();
  slack.setSlackStatusInMeeting();

  res.send('Status: In Meeting');
});

app.get('/status/lunch', (req, res) => {
  blinkstick.turnOnYellow();

  slack.setSlackPresenceAuto();
  slack.setSlackStatusLunch();

  res.send('Status: Lunch');
});

app.get('/status/away', (req, res) => {
  blinkstick.turnOff();

  slack.setSlackPresenceAuto();
  slack.setSlackStatusAway();

  res.send('Status: Away');
});

app.get('/status/brb', (req, res) => {
  blinkstick.turnOnYellow();

  slack.setSlackPresenceAuto();
  slack.setSlackStatusBRB();

  res.send('Status: BRB');
});



// --- BLINKSTICK ------------------------------------------

app.get('/blinkstick/off', (req, res) => {
  blinkstick.turnOff();

  res.send('Blinkstick: Off');
});

app.get('/blinkstick/on', (req, res) => {
  blinkstick.turnOn();

  res.send('Blinkstick: On');
});

app.get('/blinkstick/red', (req, res) => {
  blinkstick.turnOnRed();

  res.send('Blinkstick: Red On');
});

app.get('/blinkstick/green', (req, res) => {
  blinkstick.turnOnGreen();

  res.send('Blinkstick: Green On');
});

app.get('/blinkstick/yellow', (req, res) => {
  blinkstick.turnOnYellow();

  res.send('Blinkstick: Yellow On');
});


// ---------------------------------------------

app.listen(port, () => {
  console.log(`Streamdeck HTTP Request server running... Port ${port}`)
});
