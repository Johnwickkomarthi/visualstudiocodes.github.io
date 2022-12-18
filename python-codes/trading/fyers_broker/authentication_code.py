from fyers_api import fyersModel,accessToken
import pyotp
import json
import requests
import time
import os
from urllib.parse import parse_qs,urlparse
import sys

app_id="DI4W5R31J5" #app id from myapi dashboard is in the form appid-apptype. example- DI4W5R31J5-100, in this code DI4W5R31J5 will be
#app_id and 100 is the app type.
app_type="100"
secret_key1="ZHDCA4A27S"
client_id1=f'{app_id}-{app_type}'

fy_id="XS30702" #your fyers id
app_id_type="2"# keep default as 2, it denotes web login
totp_key=""
def get_access_token():
    #I'm using a text file to store the access_token so I don't need to login and authenticate again and again for access token.
    #if condition checks the file, if file doesn't exists then I login and authenticate the process. Otherwise I will use the token in the text document for the further process.
    if not os.path.exists('D:/vs_code/visualstudiocodes.github.io/python-codes/trading/fyers_broker/text_documents/access_token.txt'):
        session=accessToken.SessionModel(client_id=client_id1,secret_key=secret_key1,redirect_uri="https://www.google.co.in/", response_type="code", grant_type="authorization_code")
        response = session.generate_authcode()
        print("Login url: ",response)
        auth_code=input("Enter authcode :")
        session.set_token(auth_code)
        response = session.generate_token()
        access_token = response["access_token"]
        with open('D:/vs_code/visualstudiocodes.github.io/python-codes/trading/fyers_broker/text_documents/access_token.txt','w') as file:
            file.write(access_token)
    else:
        with open ('D:/vs_code/visualstudiocodes.github.io/python-codes/trading/fyers_broker/text_documents/access_token.txt','r') as file:
            access_token=file.read()
    return access_token
#creating a fyers instace. for the trading.
fyers = fyersModel.FyersModel(client_id=client_id1, token=get_access_token())






