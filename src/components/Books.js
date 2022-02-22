import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const bookStore = useSelector((state) => state.booksReducer);

  const Background = styled.div`
    background-color: lightblue;
    padding: 1rem 5vw;
    min-height: 100vh;
  `;

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
      <BookForm />
    </Background>
  );
};

export default Books;
