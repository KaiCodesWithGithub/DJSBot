const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    permissions: [Permissions.FLAGS.SEND_MESSAGES],
    async execute(interaction) {
        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('example-button')
                    .setLabel('Example Button')
                    .setStyle('SUCCESS'))
        const row2 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('example-menu')
                    .setPlaceholder('Nothing is Selected')
                    .setMinValues(1)
                    .setMaxValues(2)
                    .addOptions([
                        {
                            label: `Example1`,
                            description: `The first example selection`,
                            value: '1'
                        },
                        {
                            label: `Example2`,
                            description: `The second example selection`,
                            value: '2'
                        },
                        {
                            label: `Example3`,
                            description: `The third example selection`,
                            value: '3'
                        },
                        {
                            label: `Example4`,
                            description: `The fourth example selection`,
                            value: '4'
                        },
                        {
                            label: `Example5`,
                            description: `The fifth example selection`,
                            value: '5'
                        },
                    ]))
        await interaction.reply({ ephemeral: true, content: 'Pong!', components: [row1, row2]})
    }
}