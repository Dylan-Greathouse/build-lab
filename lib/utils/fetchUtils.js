const fetch  = require('node-fetch');



const URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/';

const fetchURL = async (num) => {
  const trueURL = await fetch(`${URL}${num}`);
  return trueURL.json();
};



module.exports = fetchURL ;
