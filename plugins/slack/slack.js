// Required
const slackLib = require('../../lib/slack');

// Functions
module.exports = {
  setSlackPresenceAway: function() {
    const params = {
       presence: "away"
    };
    slackLib.updateSlackPresence(params);
  },

  setSlackPresenceAuto: function() {
    const params = {
       presence: "auto"
    };
    slackLib.updateSlackPresence(params);
  },

  setSlackStatusAvailable: function() {
    const params = {
       profile: {
        "status_text": "",
        "status_emoji": "",
        "status_expiration": 0
      }
    };
    slackLib.updateSlackStatus(params);
  },

  setSlackStatusReset: function() {
    const params = {
       profile: {
        "status_text": "",
        "status_emoji": "",
        "status_expiration": 0
      }
    };
    slackLib.updateSlackStatus(params);
  },

  setSlackStatusAway: function() {
    const params = {
       profile: {
        "status_text": "Away from my desk",
        "status_emoji": ":timer_clock:",
        "status_expiration": 0
      }
    };
    slackLib.updateSlackStatus(params);
  },

  setSlackStatusBRB: function() {
    const timeInThirtyMins = new Date();
    timeInThirtyMins.setMinutes(timeInThirtyMins.getMinutes() + 30);
    const thirtyMinExpiration = timeInThirtyMins.getTime() / 1000;

    const params = {
       profile: {
        "status_text": "Be Right Back",
        "status_emoji": ":timer_clock:",
        "status_expiration": thirtyMinExpiration
      }
    };
    slackLib.updateSlackStatus(params);
  },

  setSlackStatusInMeeting: function() {
    const params = {
       profile: {
        "status_text": "On a call",
        "status_emoji": ":studio_microphone:",
        "status_expiration": 0
      }
    };
    slackLib.updateSlackStatus(params);
  },

  setSlackStatusLunch: function() {
    const timeInOneHour = new Date();
    timeInOneHour.setHours(timeInOneHour.getHours() + 1);
    const oneHourExpiration = timeInOneHour.getTime() / 1000;

    const foodEmojis = [
      ':tea:',
      ':sake:',
      ':baby_bottle:',
      ':beer:',
      ':beers:',
      ':cocktail:',
      ':tropical_drink:',
      ':wine_glass:',
      ':fork_and_knife:',
      ':pizza:',
      ':hamburger:',
      ':fries:',
      ':poultry_leg:',
      ':meat_on_bone:',
      ':spaghetti:',
      ':curry:',
      ':fried_shrimp:',
      ':bento:',
      ':sushi:',
      ':fish_cake:',
      ':rice_ball:',
      ':rice_cracker:',
      ':rice:',
      ':ramen:',
      ':stew:',
      ':oden:',
      ':dango:',
      ':egg:',
      ':bread:',
      ':doughnut:',
      ':custard:',
      ':icecream:',
      ':ice_cream:',
      ':shaved_ice:',
      ':birthday:',
      ':cake:',
      ':cookie:',
      ':chocolate_bar:',
      ':candy:',
      ':lollipop:',
      ':honey_pot:',
      ':apple:',
      ':green_apple:',
      ':tangerine:',
      ':lemon:',
      ':cherries:',
      ':grapes:',
      ':watermelon:',
      ':strawberry:',
      ':peach:',
      ':melon:',
      ':banana:',
      ':pear:',
      ':pineapple:',
      ':sweet_potato:',
      ':eggplant:',
      ':tomato:',
      ':corn:',
    ];

    const emoji = foodEmojis[Math.floor(Math.random()*foodEmojis.length)];

    const params = {
       profile: {
        "status_text": "At Lunch",
        "status_emoji": emoji,
        "status_expiration": oneHourExpiration
      }
    };
    slackLib.updateSlackStatus(params);
  },

}