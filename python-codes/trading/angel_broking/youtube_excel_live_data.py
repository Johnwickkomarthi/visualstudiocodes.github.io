from smartapi import SmartConnect
import pandas as pd
import xlwings as xw

wb = xw.Book('AngelExcelCode-1.xlsx')
sht1 = wb.sheets['Token']
sht2 = wb.sheets['Data']
json = pd.read_json('https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json')
df1=pd.DataFrame(json)
sht1.range('A1').value = df1

from angel_trading import *

from smartapi import SmartWebSocket
FEED_TOKEN = feedToken
CLIENT_CODE = 'M187024'
# token="mcx_fo|224570"
token = "nse_fo|49937&nse_fo|49939"  
#token="mcx_fo|224120&nse_cm|2885"
task = "mw"  # mw|sfi|dp
ss = SmartWebSocket(FEED_TOKEN, CLIENT_CODE)

Live_Data = {}

def on_message(ws, message):
    for stock in message:
        # print(stock)
        Live_Data[stock["tk"]] = {"Ltp": stock["ltp"],
                                   "Best Buy price": stock["bp"],
                                  "Best sell price": stock["sp"],
                                  "Change": stock["cng"],
                                  "Low": stock["lo"],
                                  #"High": stock["h"],
                                  #"Open": stock["op"],
                                   "Volume": stock["v"],
                                  "VWAP": stock["ap"],}


        print(Live_Data)



        df2=pd.DataFrame(Live_Data).T
        sht2.range('B1').value = df2
def on_open(ws):
    print("on open")
    ss.subscribe(task, token)


def on_error(ws, error):
    print(error)


def on_close(ws):
    print("Close")


# Assign the callbacks.
ss._on_open = on_open
ss._on_message = on_message
ss._on_error = on_error
ss._on_close = on_close

ss.connect()
print('code successfull')