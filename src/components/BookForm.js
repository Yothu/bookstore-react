import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { v4 as generateID } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const FormContainer = styled.div`
    border-top: 1px solid #e8e8e8;
  `;

  const AddBook = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: -0.18px;
    color: #888;
  `;

  const [title, setTitle] = useState('');
  const id = generateID();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id,
      title,
      author: 'Robert',
    };
    dispatch(addBook(newBook));
  };

  return (
    <FormContainer>
      <AddBook>ADD NEW BOOK</AddBook>
      <form onSubmit={submitBookToStore}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Book title" />
        <select defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>Category</option>
        </select>
        <input type="submit" />
      </form>
    </FormContainer>
  );
};

export default BookForm;
