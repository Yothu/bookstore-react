const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LIST_BOOK = 'bookStore/books/LIST_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case LIST_BOOK:
      return action.payload;
    default:
      return state;
  }
};

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const listBooks = (payload) => ({
  type: LIST_BOOK,
  payload,
});

const getBooksFromAPI = async () => {
  const POST_API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RJ6E8bGhw1ELJ9P3Dvx1/books';
  const response = await fetch(POST_API_URL);
  const APIbooks = await response.json();
  const books = Object.getOwnPropertyNames(APIbooks).map((id) => ({
    item_id: id,
    ...APIbooks[id][0],
  }));
  return (books);
};

const postBookToAPI = (payload) => async (dispatch) => {
  const POST_API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RJ6E8bGhw1ELJ9P3Dvx1/books';
  const response = await fetch(POST_API_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch(addBook(payload));
  }
};

export default reducer;
export {
  removeBook, addBook, getBooksFromAPI, postBookToAPI, listBooks,
};
