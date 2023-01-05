#importing the fyers instace from the authentication_code file.
from authentication_code import fyers
import xlwings as xw
import json
# data = {"symbol":"NSE:SBIN-EQ","resolution":"D","date_format":"1","range_from":"2022-01-01","range_to":"2022-03-31","cont_flag":"1"}


# with open ('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/fyers_broker/text_documents/histrocial_data.txt','w') as file:
#     json_data=json.dumps(fyers.history(data))#json is imported to convert the dictionaary values to json_string to store in the text files.
#     file.write(json_data)
#     file.write('\n')
# with open('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/fyers_broker/text_documents/close_price_list.txt','w') as file:
#     json_close_price_list=json.dumps(fyers.history(data)['candles'][0])
#     file.write(json_close_price_list)
wb=xw.Book('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/fyers_broker/text_documents/NSE_CM.xlsx')
prices=wb.sheets('NSE_CM')
i=int(2)
while(i<=50):
    
    data = {"symbol":prices.range('a'+str(i)).value,"resolution":"D","date_format":"1","range_from":"2022-01-01","range_to":"2022-01-02","cont_flag":"1"}
    list1=fyers.history(data)["candles"]
    list=list1[0]
    prices.range('b'+str(i)).value=list[1]
    prices.range('c'+str(i)).value=list[2]
    prices.range('d'+str(i)).value=list[3]
    prices.range('e'+str(i)).value=list[4]
    prices.range('f'+str(i)).value=list[5]
    i=i+1
j=int(51)
while(j<=101):
    
    data = {"symbol":prices.range('a'+str(j)).value,"resolution":"D","date_format":"1","range_from":"2022-01-01","range_to":"2022-03-31","cont_flag":"1"}
    list1=fyers.history(data)["candles"]
    list=list1[0]
    prices.range('b'+str(j)).value=list[1]
    prices.range('c'+str(j)).value=list[2]
    prices.range('d'+str(j)).value=list[3]
    prices.range('e'+str(j)).value=list[4]
    prices.range('f'+str(j)).value=list[5]
    j=j+1
# wb=xw.Book('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/fyers_broker/live_market_data.xlsx')
# feteched_data=wb.sheets('live_data')

# this will fetch the live from the market into the excel sheet
# while(True):
#     data = {"symbols":"NSE:NIFTYBANK-INDEX"}
#     values=fyers.quotes(data)['d'][0]['v']
#     ask=values['ask']
#     bid=values['bid']
#     lp=values['lp']
#     open_price=values['open_price']
#     high_price=values['high_price']
#     low_price=values['low_price']
#     prev_close_price=values['prev_close_price']
#     volume=values['volume']
#     feteched_data.range('b3').value=ask
#     feteched_data.range('c3').value=bid
#     feteched_data.range('d3').value=lp
#     feteched_data.range('e3').value=open_price
#     feteched_data.range('f3').value=high_price
#     feteched_data.range('g3').value=low_price
#     feteched_data.range('h3').value=prev_close_price
#     feteched_data.range('i3').value=volume
        
    