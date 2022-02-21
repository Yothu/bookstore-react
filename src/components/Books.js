import styled from 'styled-components';
import Book from './Book';

const booksData = [
  {
    id: 1,
    genre: 'Action',
    title: 'Rambo',
    author: 'Popeye',
  },
  {
    id: 2,
    genre: 'Fantasy',
    title: 'Quack',
    author: 'Mack',
  },
  {
    id: 3,
    genre: 'History',
    title: 'The Jump',
    author: 'Siluet',
  },
];

const Books = () => {
  const Background = styled.div`
    /* background-color: #fafafa; */
    background-color: lightblue;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 1rem;
    padding-bottom: 1rem;
    min-height: 100vh;
  `;

  const bookList = booksData.map((book) => (<Book data={book} key={book.id} />));

  return (
    <Background>
      {bookList}
    </Background>
  );
};

export default Books;
