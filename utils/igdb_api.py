import requests
import os
from utils.twitch_api import get_twitch_access_token


def search_game_on_igdb(query):
    access_token = get_twitch_access_token()
    if not access_token:
        return []

    url = "https://api.igdb.com/v4/games"
    headers = {
        "Client-ID": os.getenv("TWITCH_CLIENT_ID"),
        "Authorization": f"Bearer {access_token}"
    }

    body = f"search \"{query}\"; fields name,cover,url; limit 5;"

    response = requests.post(url, headers=headers, data=body)

    if response.status_code == 200:
        games = response.json()
        return games
    else:
        print("Erro ao buscar jogos:", response.status_code, response.text)
        return []
