import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { v4 as generateID } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const FormContainer = styled.div`
  border-top: 1px solid #e8e8e8;
`;

const AddBook = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.18px;
  color: #888;
`;

const genres = [
  'Action',
  'History',
  'Drama',
  'Adventure',
  'Fantasy',
  'Horror',
  'Mystery',
  'Comic',
];

const BookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const id = generateID();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id,
      title,
      author,
      genre,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <FormContainer>
      <AddBook>ADD NEW BOOK</AddBook>
      <form onSubmit={submitBookToStore}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Book title" />
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Book author" />
        <select defaultValue="DEFAULT" onChange={(e) => setGenre(e.target.value)}>
          <option value="DEFAULT" disabled>Genre</option>
          {
            genres.map((genre) => (
              <option key={genre}>{genre}</option>
            ))
          }
        </select>
        <input type="submit" />
      </form>
    </FormContainer>
  );
};

export default BookForm;
