from smartapi import SmartConnect 
import numpy as np
import pyotp
import json
from smartapi import SmartWebSocket
secret_key='4eb67ab8-4b22-48ff-9810-07cdf493e704'
totop_code='22X5MZ74NNGDCDHK5IGOOBWPDA'
obj=SmartConnect(api_key='mNjk9pyN')
data=obj.generateSession('M187024','3471179$@!M',pyotp.TOTP('22X5MZ74NNGDCDHK5IGOOBWPDA').now())
refreshToken= data['data']['refreshToken']

#fetch the feedtoken
feedToken=obj.getfeedToken()

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
try:
    historicParam={ "exchange": "NSE","symboltoken": "3045","interval": "ONE_MINUTE","fromdate": "2021-02-08 09:00", "todate": "2021-02-08 15:45"}
    
    with open('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/angel_broking/text-documents/historical_data.txt','w') as file:
        
        element=obj.getCandleData(historicParam)['data']
        json_data=json.dumps(element)
        file.write(json_data)
        # for element in obj.getCandleData(historicParam)['data']:
        #     json_data=json.dumps(element[4])
        #     file.write(json_data+'\n')
except Exception as e:
    print("Historic Api failed: {}".format(e.message))

print('code sucessfull')