// const unirest = require('unirest');
// const req = unirest('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes');
// req.query({
// 	'region': 'US'
// });
// req.headers({
// 	'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
// 	'x-rapidapi-key': 'c19e0e157amsh230c2f6a8d7bf80p132affjsn40ac5c914de6',
// 	'useQueryString': true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

// const express = require('express');
// const app = express();
// const unirest = require("unirest");
// const { data } = require('jquery');

// function call_api(){
//     unirest.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes')
//     .header("X-RapidAPI-Key", 'c19e0e157amsh230c2f6a8d7bf80p132affjsn40ac5c914de6')
//     .header('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com')
//     .end(function (result) {
//     let data = result.body.finance.result[0].quotes
//     // console.log(result.status, result.body.finance.result[0].quotes);
//     printData(data)
//     return data
//     });
// }

// async function printData(data){
//     let stockData = []
//     let formattedData;
//     //  await console.log(data)
//     for(i = 0; i < data.length; i++) {
//         formattedData = `Stock Symbol: ${data[i].symbol}, Company: ${data[i].longName} Stock Price: ${data[i].regularMarketPrice}, Stock Change Percentage: ${data[i].regularMarketChangePercent}`
//         stockData.push(formattedData)
//     }
//     showData(stockData);
//     return stockData;
// }

// async function showData(stockData){
//     console.log(stockData)
// }

const express = require('express');
const app = express();
const unirest = require("unirest");
const { data } = require('jquery');

function call_api(){
    unirest.get('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/TWLO,BBBY,RKT,NFLX,TSLA')
    .header("X-RapidAPI-Key", '0e63cf5abcmsh4d3233bfb976d24p1d7311jsne67624f44596')
    .header('x-rapidapi-host', 'yahoo-finance15.p.rapidapi.com')
    .end(function (result) {
    // let data = result.body.finance.result[0].quotes
    console.log(result.status);
    // printData(data)
    // return data
    });
}