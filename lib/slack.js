const {default: axios} = require('axios');

const tokenList = [
  process.env.SLACK_TOKEN_1, 
  process.env.SLACK_TOKEN_2, 
  // process.env.SLACK_TOKEN_3, 
  // process.env.SLACK_TOKEN_4,
];

function updateSlackPresence(bodyParameters) {
  let url = 'https://slack.com/api/users.setPresence'

  for(i = 0; i<tokenList.length; i++) {
    const token = tokenList[i];

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    axios.post( 
      url,
      bodyParameters,
      config
    ).then(console.log).catch(console.log);
  }
}

function setSlackPresenceAway() {
  const params = {
     presence: "away"
  };
  updateSlackPresence(params);
}

function setSlackPresenceAuto() {
  const params = {
     presence: "auto"
  };
  updateSlackPresence(params);
}

function updateSlackStatus(bodyParameters) {
  let url = 'https://slack.com/api/users.profile.set'

  for(i = 0; i<tokenList.length; i++) {
    const token = tokenList[i];

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    axios.post( 
      url,
      bodyParameters,
      config
    ).then(console.log).catch(console.log);
  }
}

function setSlackStatusAvailable() {
  const params = {
     profile: {
      "status_text": "",
      "status_emoji": "",
      "status_expiration": 0
    }
  };
  updateSlackStatus(params);
}

function setSlackStatusAway() {
  const params = {
     profile: {
      "status_text": "Away from my desk",
      "status_emoji": ":timer_clock:",
      "status_expiration": 0
    }
  };
  updateSlackStatus(params);
}

function setSlackStatusLunch() {
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
      "status_text": "Lunch",
      "status_emoji": emoji,
      "status_expiration": oneHourExpiration
    }
  };
  updateSlackStatus(params);
}


module.exports = {
    setSlackStatusAvailable: function () {
      return setSlackStatusAvailable();      
    },

    setSlackStatusAway: function () {
      return setSlackStatusAway();
    },

    setSlackStatusLunch: function () {
      return setSlackStatusLunch();
    },

    setSlackPresenceAway: function () {
      return setSlackPresenceAway();
    },

    setSlackPresenceAuto: function () {
      return setSlackPresenceAuto();
    },

}