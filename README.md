# 🎮 CreateChatForGames

<p align="center">
  <a href="#-english">English</a> •
  <a href="#-português">Português</a>
</p>

---

## 🇺🇸 English

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-v16+-yellow.svg)
![Discord.js](https://img.shields.io/badge/discord.js-v14-7289da.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![IGDB](https://img.shields.io/badge/IGDB-API-orange.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A Discord bot that creates game-specific chat channels using the IGDB database.

### Features

- Search games using IGDB database
- Create dedicated chat channels for games
- Simple command structure
- Easy setup and configuration

### Requirements

- Node.js
- Discord Bot Token
- Twitch API credentials (for IGDB access)

### Installation

```bash
# Clone the repository
git clone https://github.com/MafraLP/CreateChatForGames.git

# Navigate to project folder
cd CreateChatForGames

# Install dependencies
npm install
```

### Configuration

1. Rename the `.env.example` file to `.env` and fill in with your credentials:

```
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id
GUILD_ID=your_discord_server_id
TWITCH_CLIENT_ID=your_twitch_client_id
TWITCH_CLIENT_SECRET=your_twitch_client_secret
DISCORD_CATEGORY=your_discord_category_id
```

2. Invite the bot to your Discord server with appropriate permissions
3. Create a dedicated text channel for the bot commands

> **Note**: For detailed instructions on creating and deploying your Discord bot, please refer to the official guides in the [Discord Developer Portal](https://discord.com/developers/docs/intro).

### Usage

1. Use the `/new [game_name]` command in the dedicated bot channel
2. Select a game from the dropdown menu that appears
3. The bot will create a new chat channel for the selected game under the specified category

### Dependencies

- discord.js: ^14.16.3
- axios: ^1.7.9
- dotenv: ^16.4.7

---

## 🇧🇷 Português

![Versão](https://img.shields.io/badge/versão-1.0.0-blue.svg)
![Licença](https://img.shields.io/badge/licença-MIT-green.svg)
![Node](https://img.shields.io/badge/node-v16+-yellow.svg)
![Discord.js](https://img.shields.io/badge/discord.js-v14-7289da.svg)
![Status](https://img.shields.io/badge/status-ativo-success.svg)
![IGDB](https://img.shields.io/badge/IGDB-API-orange.svg)
![PRs](https://img.shields.io/badge/PRs-bem--vindos-brightgreen.svg)

Um bot para Discord que cria canais de chat específicos para jogos utilizando o banco de dados do IGDB.

### Funcionalidades

- Pesquisa jogos usando o banco de dados IGDB
- Cria canais de chat dedicados para jogos
- Estrutura de comandos simples
- Configuração fácil e rápida

### Requisitos

- Node.js
- Token de Bot do Discord
- Credenciais da API Twitch (para acesso ao IGDB)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/MafraLP/CreateChatForGames.git

# Navegue para a pasta do projeto
cd CreateChatForGames

# Instale as dependências
npm install
```

### Configuração

1. Renomeie o arquivo `.env.example` para `.env` e preencha com suas credenciais:

```
DISCORD_TOKEN=seu_token_do_bot_discord
CLIENT_ID=seu_client_id_discord
GUILD_ID=id_do_seu_servidor_discord
TWITCH_CLIENT_ID=seu_client_id_twitch
TWITCH_CLIENT_SECRET=seu_client_secret_twitch
DISCORD_CATEGORY=id_da_categoria_discord
```

2. Convide o bot para o seu servidor Discord com as permissões adequadas
3. Crie um canal de texto dedicado para os comandos do bot

> **Nota**: Para instruções detalhadas sobre como criar e fazer deploy do seu bot Discord, consulte os guias oficiais no [Portal de Desenvolvedores do Discord](https://discord.com/developers/docs/intro).

### Uso

1. Use o comando `/new [nome_do_jogo]` no canal dedicado ao bot
2. Selecione um jogo no menu dropdown que aparece
3. O bot criará um novo canal de chat para o jogo selecionado na categoria especificada

### Dependências

- discord.js: ^14.16.3
- axios: ^1.7.9
- dotenv: ^16.4.7

---

<div align="center">
  <sub>Made with ❤️ by MafraLP</sub>
</div>
