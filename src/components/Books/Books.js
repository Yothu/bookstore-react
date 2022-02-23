import styled from 'styled-components';
import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';

const Background = styled.div`
  padding: 1rem 5vw;
  min-height: 100vh;
`;

const Books = () => (
  <Background>
    <BookList />
    <BookForm />
  </Background>
);

export default Books;
