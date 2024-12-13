const { SlashCommandBuilder } = require('@discordjs/builders');
const GameSearch = require('../../cogs/game_search');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('new')
        .setDescription('Cria um canal para um jogo específico.')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('Nome do jogo.')
                .setRequired(true)),
    async execute(interaction) {
        const gameName = interaction.options.getString('game');
        const gameSearchInstance = new GameSearch(interaction.client);

        await gameSearchInstance.new(interaction, gameName);
    }
}