#importing the fyers instace from the authentication_code file.
from authentication_code import fyers
import json
data = {"symbol":"NSE:SBIN-EQ","resolution":"D","date_format":"1","range_from":"2022-01-01","range_to":"2022-03-31","cont_flag":"1"}


with open ('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/text_documents/histrocial_data.txt','w') as file:
    json_data=json.dumps(fyers.history(data))#json is imported to convert the dictionaary values to json_string to store in the text files.
    file.write(json_data)
with open('D:/vs_code/visualstudiocodes.github.io-1/python-codes/trading/text_documents/close_price_list.txt','w') as file:
    json_close_price_list=json.dumps(fyers.history(data)['candles'])
    file.write(json_close_price_list)
    