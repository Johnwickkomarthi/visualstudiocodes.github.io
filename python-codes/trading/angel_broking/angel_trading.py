from smartapi import SmartConnect 
import numpy as np
import pyotp
import json
import xlwings as xw
secret_key='4eb67ab8-4b22-48ff-9810-07cdf493e704'
totop_code='22X5MZ74NNGDCDHK5IGOOBWPDA'
obj=SmartConnect(api_key='mNjk9pyN')#Instace of angel broking to access the api data.
data=obj.generateSession('M187024','3471179$@!M',pyotp.TOTP('22X5MZ74NNGDCDHK5IGOOBWPDA').now())
refreshToken= data['data']['refreshToken']

#fetch the feedtoken
feedToken=obj.getfeedToken()

# historicParam={ "exchange": "NSE","symboltoken": "3045","interval": "FIVE_MINUTE","fromdate": "2021-02-08 09:16", "todate": "2021-02-08 09:20"}
    
#     with open('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/angel_broking/text-documents/historical_data.txt','w') as file:
        
#         element=obj.getCandleData(historicParam)['data']
#         json_data=json.dumps(element)
#         file.write(json_data)
#         # for element in obj.getCandleData(historicParam)['data']:
#         #     json_data=json.dumps(element[4])
#         #     file.write(json_data+'\n')

# Interval Constants Interval Description
# ONE_MINUTE	    1 Minute
# THREE_MINUTE	    3 Minute
# FIVE_MINUTE	    5 Minute
# TEN_MINUTE	    10 Minute
# FIFTEEN_MINUTE	15 Minute
# THIRTY_MINUTE	    30 Minute
# ONE_HOUR	        1 Hour
# ONE_DAY	        1 Day
###########################################
# Interval	        Max Days in one Request
# ONE_MINUTE	    30
# THREE_MINUTE	    90
# FIVE_MINUTE	    90
# TEN_MINUTE	    90
# FIFTEEN_MINUTE	180
# THIRTY_MINUTE	    180
# ONE_HOUR	        365
# ONE_DAY	        2000
###########################################
# In Get Candle Data Request fromdate and todate format should be "yyyy-MM-dd hh:mm"
# The response is an array of records, where each record in turn is an array of the following values — [timestamp, open, high, low, close, volume].
# {
#      "status": true,
#      "message": "SUCCESS",
#      "errorcode": "",
#      "data": [
#           [
#    time            "2021-02-10T09:15:00+05:30",
#    open             394.05,
#    high             397.7,
#    low              394,
#    close            396.3,
#    volume           722616
#           ],
#           [
#                "2021-02-10T09:16:00+05:30",
#                396.25,
#                396.65,
#                395.85,
#                395.85,
#                391702
#           ]
#      ]
# }
#Historic api
i=int(80)
nifty_100_stocks=["22","25","3563","15083","10217","1270","157","236","6066","5900","16669","16675","305","317","2263","4668","383","404","10604","11373","2181","526","547","685","694","20374","15141","772","10940","14732","19913","881","910","4717","1153","10099","1232","2303","9819","7229","1330","4244","1333","467","1348","1363","1394","4963","21770","18652","11195","5258","29135","1594","1624","13611","1660","11723","1922","9480","11483","17818","2031","4067","10999","10447","4204","4503","23650","13751","17963","11630","6545","2475","6705","2535","2664","24184","14977","2885","17971","21808","3045","3103","3150","3273","3351","3432","3456","3426","3499","11536","13538","3506","3518","11532","11287","3063","3787","5097"]
wb=xw.Book('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/angel_broking/text-documents/fo_mktlots.xlsx')
prices=wb.sheets('NIFTY100')
#str(prices.range('b'+str(i)).value)
try:
    while(i>1):
        historicParam={ "exchange": "NSE","symboltoken":'3045',"interval": "FIVE_MINUTE","fromdate": "2021-02-08 09:21", "todate": "2021-02-08 09:25"}
        element=obj.getCandleData(historicParam)
        with open('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/angel_broking/text-documents/historical_data.txt','w') as file:
            json_data=json.dumps(element)
            file.write(json_data)
        # prices.range('c'+str(i)).value=element[0][1]
        # prices.range('d'+str(i)).value=element[0][2]
        # prices.range('e'+str(i)).value=element[0][3]
        # prices.range('f'+str(i)).value=element[0][4]
        # prices.range('g'+str(i)).value=element[0][5]
        i=i-1
except Exception as e:
    print("Historic Api failed: {}".format(e.message))

print('code successful')
