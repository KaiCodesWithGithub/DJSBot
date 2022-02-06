module.exports = {
    data: {
        name: 'example-button'
    },
    async execute(interaction) {
        await interaction.reply({ content: `You pressed the example button!`})
    }
}