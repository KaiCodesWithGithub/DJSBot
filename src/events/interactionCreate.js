module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            if (command.permissions && command.permissions.length > 0) {
                if (!interaction.member.permissions.has(command.permissions)) return interaction.reply({ content: `You do not have permission to use the command '${interaction.commandName}'.`})
            }

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error)
                await interaction.reply({ content: 'There was an error while executing this command, please let the owner know of this issue.'})
            } 
        } else if (interaction.isSelectMenu()) {
            const menu = client.menus.get(interaction.customId);

            if (!menu) return await interaction.reply({ content: `There is no menu code for this menu.` })

            try {
                await menu.execute(interaction, client);
            } catch (err) {
                console.error(err)
                await interaction.reply({ content: 'There was an error while executing this command, please let the owner know of this issue.'})
            }
        } else if (interaction.isButton()) {
            const button = client.buttons.get(interaction.customId);

            if (!button) return await interaction.reply({ content: `There is no button code for this button.` })

            try {
                await button.execute(interaction, client);
            } catch (err) {
                console.error(err)
                await interaction.reply({ content: 'There was an error while executing this command, please let the owner know of this issue.'})
            }
        }
    }
}