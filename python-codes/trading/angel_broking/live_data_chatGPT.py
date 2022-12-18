import requests
import matplotlib.pyplot as plt

# Set the API endpoint URL
url = "https://api.angelbroking.com/api/v2/market/realtime/NSE/BHEL"

# Set the API key
api_key = "mNjk9pyN"

# Set the headers for the request
headers = {
    "Authorization": "Bearer {}".format(api_key)
}

# Send the GET request
response = requests.get(url, headers=headers)

# Parse the response into a dictionary
data = response.json()

# Extract the stock price data from the dictionary
prices = data["data"]["lastPrice"]

# Set up a matplotlib plot to visualize the data
plt.ion()
fig, ax = plt.subplots()
print('code successfull')
# Stream the data in a loop
while True:
    # Update the plot with the latest data
    ax.clear()
    print(ax.plot(prices))
    plt.show()
    plt.pause(0.1)
