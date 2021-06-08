const Dotwood = require("dotwood.js");

let client = new Dotwood.Client({
    prefix: "!", // Bot prefix > !help, !test
    token: "TOKEN", // Your bot token
})

client.login();

// Log events
client.messageDelete("829639369182281760");
client.messageUpdate("829639369182281760");
client.banAdd("829639369182281760");
client.banRemove("829639369182281760");