import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const Background = styled.div`
padding: 1rem 5vw;
min-height: 100vh;
`;

const Books = () => {
  const bookStore = useSelector((state) => state.booksReducer);

  const bookList = bookStore.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      key={book.id}
      id={book.id}
    />
  ));

  return (
    <Background>
      {bookList}
      {BookForm()}
    </Background>
  );
};

export default Books;
