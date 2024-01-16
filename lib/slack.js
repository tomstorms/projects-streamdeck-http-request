const {default: axios} = require('axios');

const tokenList = [
  process.env.SLACK_TOKEN_1,    // dws
  // process.env.SLACK_TOKEN_1, // imc
  // process.env.SLACK_TOKEN_2, // brisbane developers
  // process.env.SLACK_TOKEN_3, // twentytwo
  // process.env.SLACK_TOKEN_4, // vest
];

module.exports = {
    updateSlackPresence: function (bodyParameters) {
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
    },

    updateSlackStatus: function (bodyParameters) {
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
    },
}