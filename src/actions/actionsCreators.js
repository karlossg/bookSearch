const axios = require('axios');

export const REQUEST_BOOKS = 'REQUEST_BOOKS'
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'

function requestBooks(searchValue) {
  return {
    type: REQUEST_BOOKS,
    searchValue
  }
}

function receiveBooks(resp) {
  return {
    type: RECEIVE_BOOKS,
    books: resp,
  }
}

function getBooks(searchValue) {
  return dispatch => {
    dispatch(requestBooks(searchValue))
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
      }).then(resp => dispatch(receiveBooks(resp)))
      .catch(error => {
        console.log(error);
      });
  }
}

function shouldGetBooks(state) {
  const books = state.books
  if (!books) {
    return true
  } else if (books.isFetching) {
    return false
  }
}

export function getBooksIfNeeded(searchValue) {
  return (dispatch, getState) => {
    if (shouldGetBooks(getState())) {
      return dispatch(getBooks(searchValue))
    }
  }
}
