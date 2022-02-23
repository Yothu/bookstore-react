import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksFromAPI, listBooks } from '../../redux/books/books';
import Book from '../Book/Book';

const BookList = () => {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    const APIbooks = await getBooksFromAPI();

    console.log('books:', APIbooks);
    dispatch(listBooks(APIbooks));
  }, [dispatch]);

  return (
    <div>
      {
        bookStore.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            genre={book.category}
            key={book.item_id}
            id={book.item_id}
          />
        ))
      }
    </div>
  );
};

export default BookList;
