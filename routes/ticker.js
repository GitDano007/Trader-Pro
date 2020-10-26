    
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
function call_api(){
  unirest.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers')
  .header("X-RapidAPI-Key", '16471ddbe1mshaa29c110d16c899p1efb9fjsn0e36b112d5de')
  .header('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com')
  .end(function (result) {
  let data = result.body.finance.result[0].quotes
  // console.log(result.status, result.body.finance.result[0].quotes);
  printData(data)
  return data
  });
}
async function printData(data){
  let stockData = []
  let formattedData;
  //  await console.log(data)
  for(i = 0; i < data.length; i++) {
      formattedData = `Stock Symbol: ${data[i].symbol}, Company: ${data[i].longName} Stock Price: ${data[i].regularMarketPrice}, Stock Change Percentage: ${data[i].regularMarketChangePercent}`
      stockData.push(formattedData)
  }
  showData(stockData);
  return stockData;
}

async function showData(stockData){
  // console.log(stockData)

  const symbol = data[i].symbol;
  const longName = data[i].longName;
  const regularMarketPrice = data[i].regularMarketPrice ;
  const regularMarketChangePercent = [];
  const APIKey = '16471ddbe1mshaa29c110d16c899p1efb9fjsn0e36b112d5de';
  
  for (let i = 0; i < result.status, result.body.finance.result[0].quotes; i++){
      var stockData = stockData[i];
      var ticker = $('<div></div>').addClass('ticker')
      ticker.append('<p>hello</p>');
      $('.cardArea').append(ticker);
      $('.symbol').append(symbol.data[i]);
      $('.company').append(longName.data[i]);
      $('.Stock price').append(regularMarketPrice.data[i]);
      $('.Percentage change').append(regularMarketChangePercent.data[i]);
}
}