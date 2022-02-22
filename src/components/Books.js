// import { Provider } from 'react-redux';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import store from '../redux/configureStore';

const booksData = [
  {
    id: 1,
    title: 'Rambo',
    author: 'Popeye',
  },
  {
    id: 2,
    title: 'Quack',
    author: 'Mack',
  },
  {
    id: 3,
    title: 'The Jump',
    author: 'Siluet',
  },
];

const Books = () => {
  const Background = styled.div`
    background-color: lightblue;
    padding: 1rem 5vw;
    min-height: 100vh;
  `;

  // const bookList = booksData.map((book) => (
  //   <Book
  //     title={book.title}
  //     author={book.author}
  //     key={book.id}
  //     id={book.id}
  //   />
  // ));

  return (
    <Background>
      {
        booksData.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
          />
        ))
      }
      <Provider store={store}>
        <BookForm />
      </Provider>
    </Background>
  );
};

export default Books;
