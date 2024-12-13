const axios = require('axios');
const { getTwitchAccessToken } = require('./twitch_api');

async function searchGameOnIgdb(query) {
    const accessToken = await getTwitchAccessToken();
    if (!accessToken) {
        return [];
    }

    const url = "https://api.igdb.com/v4/games";
    const headers = {
        "Client-ID": process.env.TWITCH_CLIENT_ID,
        "Authorization": `Bearer ${accessToken}`
    };

    const body = `search "${query}"; fields name,cover,url; limit 5;`;

    try {
        const response = await axios.post(url, body, { headers });
        if (response.status === 200) {
            return response.data;
        } else {
            console.error("Error fetching games:", response.status, response.statusText);
            return [];
        }
    } catch (error) {
        console.error("Error fetching games:", error.message);
        return [];
    }
}

module.exports = { searchGameOnIgdb };
