import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getBooksFromAPI, listBooks } from '../../redux/books/books';
import Book from '../Book/Book';

const BooksContainer = styled.div`
  padding-bottom: 2rem;
`;

const BookList = () => {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    const APIbooks = await getBooksFromAPI();
    dispatch(listBooks(APIbooks));
  }, [dispatch]);

  return (
    <BooksContainer>
      {
        bookStore.map((book) => (
          <Book
            title={book.title}
            category={book.category}
            key={book.item_id}
            id={book.item_id}
          />
        ))
      }
    </BooksContainer>
  );
};

export default BookList;
