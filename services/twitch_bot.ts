const isnumber = require('is-number');
import voting from './twitch_votes';

// Require necessary node modules
// Make the variables inside the .env element available to our Node project
require('dotenv').config();

const tmi = require('tmi.js');
let isClient: boolean = false;

// Setup connection configurations
// These include the channel, username and password
const options = {
  options: {
    debug: true,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.TWITCH_CHANNEL],
};

//Wrap everyhing in a function so that we can use the 'this' keyword
//This is a function that will be called when the bot connects to the server
async function init() {
  if (isClient) {
    return;
  }
  // Connect to the channel specified using the setings found in the configurations
  // Any error found shall be logged out in the console
  const client = new tmi.client(options);
  isClient = true;
  client.connect().catch((err) => console.log(err));

  let votedUsers = [];

  //Client.on message, if not self return, log out the message
  client.on('message', (channel, userstate, message, self) => {
    console.log(votedUsers);
    if (isnumber(message) && votedUsers.indexOf(userstate.username) == -1) {
      //Push to votedUsers array the username of the user who voted
      votedUsers.push(userstate.username);
      setTimeout(() => {
        console.log(userstate.username + " can vote again");
        //Remove the username from the votedUsers array
        votedUsers.splice(votedUsers.indexOf(userstate.username), 1);
      }, 15000);
      voting.increase_vote(parseInt(message));
    }
    if (!self) {
      return;
    }
  });
}

export default init;
