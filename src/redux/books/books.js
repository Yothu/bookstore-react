const UPDATE = 'bookstore/books/UPDATE';
const REMOVE = 'bookstore/books/REMOVE';

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return action.book;

    case REMOVE:
      return action.book;

    default:
      return state;
  }
};

const removeBook = (bookChange) => ({
  type: REMOVE,
  book: bookChange,
});

const updateBook = (bookChange) => ({
  type: UPDATE,
  book: bookChange,
});

export default reducer;
export { removeBook, updateBook };
