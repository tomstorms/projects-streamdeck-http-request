# Project StreamDeck - Blinkstick

Node script that creates local endpoints to support triggering
a 'HTTP Request' action from your Stream Deck to change the 
colours of a USB connected Blinkstick.

## Getting Start

- `npm run start` - Run the terminal in the background

Alternatively, install [pm2](https://www.npmjs.com/package/pm2) to run the script in the background forever

- `pm2 start index.js --name "project-streamdeck-blinkstick"`
- Access the following URLs in your browser to test:

http://localhost:32100/on - Turn on your blinkstick (Green)
http://localhost:32100/off - Turn off your blinkstick (Black)

- Setup the following 'HTTP Request' buttons in your Stream Deck:

URL: `http://localhost:32100/off`
Icon: Use `./images/blinkstick-off.png`
Method: GET

URL: `http://localhost:32100/on`
Icon: Use `./images/blinkstick-available.png`
Method: GET

URL: `http://localhost:32100/busy`
Icon: Use `./images/blinkstick-busy.png`
Method: GET

URL: `http://localhost:32100/busy/blink-on`
Icon: Use `./images/blinkstick-busy-blink.png`
Method: GET
