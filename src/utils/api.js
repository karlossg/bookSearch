const axios = require('axios');

module.exports.getBooks = searchValue => {
  return axios.get(`https://gwo.pl/booksApi/v1/search?query=${searchValue}`);
};
