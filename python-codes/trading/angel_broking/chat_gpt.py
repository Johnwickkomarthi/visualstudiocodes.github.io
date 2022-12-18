import smartapi
import datetime
from angel_trading import *
# authenticate with smartapi


# define opening range time frame
start_time = datetime.datetime(2020, 1, 1, 9, 30)
end_time = datetime.datetime(2020, 1, 1, 10, 30)

# retrieve opening range data
ohlc_data = smartapi.get_historical_data('SBIN', start_time, end_time)

# calculate opening range
opening_range = ohlc_data['high'].max() - ohlc_data['low'].min()

# set breakout threshold as 10% of opening range
breakout_threshold = opening_range * 0.1

# retrieve current price
current_price = smartapi.get_realtime_data('SBIN')

# execute buy order if current price is above opening range + breakout threshold
if current_price > ohlc_data['high'].max() + breakout_threshold:
    smartapi.execute_order('SBIN', 'buy', 1)

# execute sell order if current price is below opening range - breakout threshold
if current_price < ohlc_data['low'].min() - breakout_threshold:
    smartapi.execute_order('SBIN', 'sell', 1)

# continue to monitor and execute orders as necessary
while datetime.datetime.now() < datetime.datetime(2020, 1, 1, 16, 0):
    current_price = smartapi.get_realtime_data('SBIN')
    if current_price > ohlc_data['high'].max() + breakout_threshold:
        smartapi.execute_order('SBIN', 'buy', 1)
    if current_price < ohlc_data['low'].min() - breakout_threshold:
        smartapi.execute_order('SBIN', 'sell', 1)
