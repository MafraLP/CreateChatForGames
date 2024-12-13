const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

let accessToken = null;
let expiresAt = 0;

async function getTwitchAccessToken() {
    if (accessToken && Date.now() < expiresAt) {
        return accessToken;
    }

    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;

    const url = "https://id.twitch.tv/oauth2/token";
    const params = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials"
    });

    try {
        const response = await axios.post(url, params);
        if (response.status === 200) {
            const data = response.data;
            accessToken = data.access_token;
            expiresAt = Date.now() + data.expires_in * 1000;
            return accessToken;
        } else {
            console.error("Erro ao obter token:", response.status, response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Erro ao obter token:", error);
        return null;
    }
}

module.exports = { getTwitchAccessToken };
