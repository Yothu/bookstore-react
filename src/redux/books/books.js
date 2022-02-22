const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
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

export default reducer;
export { removeBook, addBook };
