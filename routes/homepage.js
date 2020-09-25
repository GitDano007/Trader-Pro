var unirest = require('unirest');
var req = unirest('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary');
req.query({
	'region': 'US'
});
req.headers({
	'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
	'x-rapidapi-key': 'c19e0e157amsh230c2f6a8d7bf80p132affjsn40ac5c914de6',
	'useQueryString': true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});