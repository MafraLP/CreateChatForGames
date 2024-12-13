import requests
import os
import time

access_token = None
expires_at = 0

def get_twitch_access_token():
    global access_token, expires_at

    if access_token and time.time() < expires_at:
        return access_token

    client_id = os.getenv("TWITCH_CLIENT_ID")
    client_secret = os.getenv("TWITCH_CLIENT_SECRET")

    url = "https://id.twitch.tv/oauth2/token"
    params = {
        "client_id": client_id,
        "client_secret": client_secret,
        "grant_type": "client_credentials"
    }

    response = requests.post(url, params=params)

    if response.status_code == 200:
        data = response.json()
        access_token = data["access_token"]
        expires_at = time.time() + data["expires_in"]
        return access_token
    else:
        print("Erro ao obter token:", response.status_code, response.text)
        return None
