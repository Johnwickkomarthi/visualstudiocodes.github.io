from smartapi import SmartConnect 
import json


obj=SmartConnect(api_key='mNjk9pyN')
arr=[0]
def moving_average(nextNumber,n):
    print(round(sum(arr)/n,4))
    arr.pop(0)
    arr.append(nextNumber)

while(True):
    next_number=float(input("enter a number"))
    print('The moving average is')
    moving_average(next_number,3)