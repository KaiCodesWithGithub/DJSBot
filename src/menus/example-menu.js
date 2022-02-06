module.exports = {
    data: {
        name: 'example-menu'
    },
    async execute(interaction) {
        if (interaction.customId === "example-menu") {
            let selection = "";
            await interaction.values.forEach(async value => {
                selection += `${value} `
            })
            await interaction.reply({ content: `Woah! You picked ${selection}, nice job 👍`})
        }
    }
}