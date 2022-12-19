from angel_trading import *
import xlwings as xw
import json


wb=xw.Book('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/angel_broking/text-documents/live_market_data_angel.xlsx')

fetch_live_data=wb.sheets('angel_live_market_data')
while(True):
    data=obj.ltpData('NSE','SBIN-EQ','3045')['data']
    fetch_live_data.range('a2').value=data['open']
    fetch_live_data.range('b2').value=data['high']
    fetch_live_data.range('c2').value=data['low']
    fetch_live_data.range('d2').value=data['close']
    fetch_live_data.range('e2').value=data['ltp']
    
