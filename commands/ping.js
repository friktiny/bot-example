module.exports = {
    name: 'ping',
    description: 'See the bots ping in ms',
    category: 'Example',

    run: async (client, message, args) => {

        message.send({
            title: "Pong!"
        },  message.channel)

    },
};