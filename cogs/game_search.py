import discord
from discord.ext import commands
from discord.ui import Select, View
from utils.igdb_api import search_game_on_igdb
import os

class GameSearchCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def new(self, ctx, *, game_name):
        """Comando para buscar um jogo na IGDB e criar um canal com o nome do jogo"""
        games = search_game_on_igdb(game_name)

        if not games:
            await ctx.send("Nenhum jogo encontrado.")
            return

        await self.send_game_choices(ctx, games)

    async def send_game_choices(self, ctx, games):
        options = [
            discord.SelectOption(label=game['name'], value=game['name'])
            for game in games
        ]

        select = Select(
            placeholder="Escolha um jogo...",
            min_values=1,
            max_values=1,
            options=options
        )

        async def select_callback(interaction):
            selected_game = select.values[0]
            game_name = self.format_game_name(selected_game)

            guild = ctx.guild
            category = discord.utils.get(guild.categories, name=os.getenv("DISCORD_CATEGORY"))

            if not category:
                category = await guild.create_category(os.getenv("DISCORD_CATEGORY"))

            existing_channel = discord.utils.get(guild.text_channels, name=game_name)

            if existing_channel:
                await interaction.response.send_message(f"O canal para o jogo {game_name} já existe: {existing_channel.mention}", ephemeral=True)
            else:
                new_channel = await guild.create_text_channel(game_name, category=category)
                await interaction.response.send_message(f"Canal para o jogo {new_channel.mention} foi criado com sucesso!", ephemeral=True)

            await interaction.message.delete()

        select.callback = select_callback

        view = View()
        view.add_item(select)

        await ctx.send("Escolha um jogo da lista abaixo:", view=view)


    def format_game_name(self, game_name):
        return game_name.lower().replace(" ", "-").replace("_", "-")

def setup(bot):
    bot.add_cog(GameSearchCog(bot))