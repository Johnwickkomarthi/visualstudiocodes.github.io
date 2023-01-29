import smartapi
import datetime
from angel_trading import *
i=int(20)#using the index 20 to acces the 20th stock in the list.
historicParam={ "exchange": "NSE","symboltoken":nifty_100_stocks[i],"interval": "FIVE_MINUTE","fromdate": "2021-02-08 09:21", "todate": "2021-02-08 09:25"}
element=obj.getCandleData(historicParam)['data'][0]
print(element)