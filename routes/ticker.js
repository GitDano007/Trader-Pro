    
const unirest = require('unirest');
const express = require('express')


module.exports = function (app){

  var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers");
  req.query({
  "region": "US"
});
  req.headers({
  "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  "x-rapidapi-key": "0e63cf5abcmsh4d3233bfb976d24p1d7311jsne67624f44596",
  "useQueryString": true
});
req.end(function (res) {
  if (res.error) throw new Error(res.error);
  })

    const financeList = [];
  req.end(function (res) {
  if (res.error) throw new Error(res.error);

  for (let i = 0; i < res.body.finance.result[0].quotes.length; i++) {
    const finance = {
      symbol: res.body.finance.result[0].quotes[i].symbol,
      longName: res.body.finance.result[0].quotes[i].longName,
      regularMarketPrice: res.body.finance.result[0].quotes[i].regularMarketPrice,
      regularMarketChangePercent: res.body.finance.result[0].quotes[i].regularMarketChangePercent,
           

    }
    financeList.push(finance);


     // console.log(finance);
   }
      })
 

}