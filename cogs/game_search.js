const { Client, Intents, MessageActionRow, MessageSelectMenu, ActionRowBuilder, ChannelType } = require('discord.js');
const { searchGameOnIgdb } = require('../utils/igdb_api');
const { config } = require('dotenv');
const { SelectMenuBuilder } = require('@discordjs/builders');

config();

class GameSearch {
    constructor(client) {
        this.client = client;
    }

    async new(message, gameName) {
        const games = await searchGameOnIgdb(gameName);

        if (!games.length) {
            await message.channel.send('Nenhum jogo encontrado.');
            return;
        }

        await this.sendGameChoices(message, games);
    }

    async sendGameChoices(message, games) {
        const options = games.map(game => ({
            label: game.name.length > 50 ? game.name.substring(0, 40) + '...' : game.name,
            value: game.name.length > 50 ? game.name.substring(0, 40) + '...' : game.name,
        }));
    
        const selectMenu = new SelectMenuBuilder()
            .setCustomId('select_game')
            .setPlaceholder('Escolha um jogo...')
            .addOptions(options);
    
        const row = new ActionRowBuilder().addComponents(selectMenu);
    
        const filter = interaction => interaction.customId === 'select_game';
    
        const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });
    
        collector.on('collect', async interaction => {
            const selectedGame = interaction.values[0];          
            const gameName = this.formatGameName(selectedGame);
            const guild = message.guild;
            let category = guild.channels.cache.find(c => c.name === process.env.DISCORD_CATEGORY && c.type === ChannelType.GuildCategory);
   
            if (!category) {
                category = await guild.channels.create(process.env.DISCORD_CATEGORY, { type: ChannelType.GuildCategory });
            }
            let existingChannel = guild.channels.cache.find(c => c.name === gameName && c.type === ChannelType.GuildText && c.parentId === category.id);
            if (existingChannel) {
                await interaction.reply({ content: `O canal para o jogo ${gameName} já existe: ${existingChannel}`, ephemeral: true });
            } else {
                console.log(gameName)
                const newChannel = await guild.channels.create({
                    name: gameName,
                    type: ChannelType.GuildText,
                    parent: category.id
                });
                await interaction.reply({ content: `Canal criado para o jogo ${gameName}: ${newChannel}`, ephemeral: true });
            }
        });
    
        await message.channel.send({ content: 'Escolha um jogo:', components: [row] });
    }

    formatGameName(gameName) {
        return gameName.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
    }
}

module.exports = GameSearch;