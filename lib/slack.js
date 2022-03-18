const {default: axios} = require('axios');

const tokenList = [
  process.env.SLACK_TOKEN_1, 
  process.env.SLACK_TOKEN_2, 
  // process.env.SLACK_TOKEN_3, 
  process.env.SLACK_TOKEN_4,
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