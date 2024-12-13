import discord
from discord.ext import commands

class ChannelManagementCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    # Funções relacionadas à criação de canais, se necessário, podem ir aqui.

def setup(bot):
    bot.add_cog(ChannelManagementCog(bot))
