# Sending-Webpages

# 1. Request the URLs from the API
Make a fetch request inside of your script's event handler to the URL https://cfw-takehome.developers.workers.dev/api/variants, and parse the response as JSON. The response will be an array of URLs, which should be saved to a variable.

# 2. Request a (random: see #3) variant
Make a fetch request to one of the two URLs, and return it as the response from the script.

# 3. Distribute requests between variants
The /api/variants API route will return an array of two URLs. Requests should be evenly distributed between the two urls, in A/B testing style. This means that when a client makes a request to the Workers script, the script should roughly return each variant around 50% of the time
