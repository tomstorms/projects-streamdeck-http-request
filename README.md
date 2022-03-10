# Project StreamDeck - HTTP Request

Node script that creates local endpoints to support triggering
a 'HTTP Request' action from your Stream Deck.

Currently supports:
- Changing colours of a USB connected [Blinkstick](https://www.blinkstick.com/).


## Getting Start

- `npm run start` - Run the terminal in the background

Alternatively, install [pm2](https://www.npmjs.com/package/pm2) to run the script in the background forever

- `pm2 start index.js --name "project-streamdeck-http-request"`


## Blinkstick

- Access the following URLs in your browser to test:

http://localhost:32100/blinkstick/on - Turn on your blinkstick (Green)
http://localhost:32100/blinkstick/off - Turn off your blinkstick (Black)

- Setup the following 'HTTP Request' buttons in your Stream Deck:

URL: `http://localhost:32100/blinkstick/off`
Icon: Use `./images/blinkstick-off.png`
Method: GET

URL: `http://localhost:32100/blinkstick/on`
Icon: Use `./images/blinkstick-available.png`
Method: GET

URL: `http://localhost:32100/blinkstick/busy`
Icon: Use `./images/blinkstick-busy.png`
Method: GET

URL: `http://localhost:32100/blinkstick/busy/blink-on`
Icon: Use `./images/blinkstick-busy-blink.png`
Method: GET
