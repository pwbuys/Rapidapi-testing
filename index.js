const axios = require('axios');

const options = {
  method: 'get',
  url: 'https://gems-exchange-weather1.p.rapidapi.com/forecast/daily',
  params: { units: 'S', lang: 'ar', lat: '43.5', lon: '-93.5' },
  headers: {
    'X-RapidAPI-Key': '0299b7742fmsh69dc34d77b4fb3ep1e275cjsnb9287357b914',
    'X-RapidAPI-Host': 'gems-exchange-weather1.p.rapidapi.com',
  },
};

for (let i = 1; i <= 1; i++) {
  axios
    .request(options)
    .then(function (response) {
      console.log('test', i, response.status, response.statusText);
      // console.log(response.data);
    })
    .catch(function (error) {
      console.error('error', error);
    });
}

// gems-exchange-weather1.p.rapidapi.com
// gems-exchange-landcover.p.rapidapi.com
