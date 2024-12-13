import discord
from discord.ext import commands  # Certifique-se de que isso está presente
import os
from dotenv import load_dotenv
from cogs.game_search import GameSearchCog
from cogs.channel_management import ChannelManagementCog

# Carregar variáveis de ambiente
load_dotenv()

# Configurar o bot
intents = discord.Intents.default()
intents.message_content = True  # Necessário para o bot ler conteúdo das mensagens (caso use comandos na mensagem)
bot = commands.Bot(command_prefix='/', intents=intents)


@bot.event
async def on_ready():
    print(f'Logado como {bot.user}')

    # Aguardar os cogs serem adicionados corretamente
    await bot.add_cog(GameSearchCog(bot))
    await bot.add_cog(ChannelManagementCog(bot))

# Rodar o bot
bot.run(os.getenv("DISCORD_TOKEN"))