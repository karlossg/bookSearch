import { GET_BOOKS } from './actions';

export default function setSearchTerm(books) {
  return {
    type: GET_BOOKS,
    books
  };
}
