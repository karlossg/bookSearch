const axios = require('axios');

module.exports.getBooks = searchValue => {
  return axios
    .get(`https://gwo.pl/booksApi/v1/search?query=${searchValue}`)
    .then(data => {
      return data.data.map(item => {
        return {
          cover: item.cover,
          title: item.title,
          author: item.author,
          isbn: item.isbn,
          men: item.men,
          pages_count: item.pages_count,
          school: item.levels[0].school,
          class: item.levels[0].class,
          subject: item.subject,
          type: item.type,
          url: item.url
        };
      });
    })
    .catch(error => {
      console.log(error);
    });
};
