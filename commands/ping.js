module.exports = {
    name: 'ping',
    description: 'See the bots ping in ms',
    category: 'Example',

    run: async (client, message, args) => {

        client.embed.send({
            title: "hey!",
            desc: "pong!"
        },  message.channel, message)

    },
};