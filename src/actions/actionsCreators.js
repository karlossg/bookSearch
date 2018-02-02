import { GET_BOOKS } from './actions';

export default function getBooksActions(books) {
  return {
    type: GET_BOOKS,
    books
  };
}
