const axios = require('axios');
const { getToken } = require('../config/auth');

async function fetchStockPrices(ticker, minutes) {
  const token = await getToken();
  const url = `http://20.244.56.144/evaluation-service/stocks/${ticker}?minutes=${minutes}`;
  const { data } = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

module.exports = { fetchStockPrices };
