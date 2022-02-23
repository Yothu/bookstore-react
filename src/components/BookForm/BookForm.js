import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { v4 as generateID } from 'uuid';
import { useState } from 'react';
import { postBookToAPI } from '../../redux/books/books';
import '../Fonts.css';

const FormContainer = styled.div`
  border-top: 1px solid #e8e8e8;
  padding-top: 1rem;
`;

const AddBook = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.18px;
  color: #888;
`;

const categories = [
  'Action',
  'History',
  'Drama',
  'Adventure',
  'Fantasy',
  'Horror',
  'Mystery',
  'Comic',
];

const Form = styled.form`
  display: flex;
  gap: 5vw;
`;

const TextBox = styled.input`
  flex-grow: 5;
  padding: 0.813rem 0 0.813rem 1.063rem;
  border: 1px solid #e8e8e8;
  letter-spacing: -0.15px;
  border-radius: 4px;
  font-size: 1rem;
  color: #c4c4c4;
  &:focus  {
    color: black;
  }
  &:hover {
    border-color: black;
  }
`;

const DropBox = styled.select`
  flex-grow: 3;
  padding: 0.375rem 0 0.563rem 1rem;
  background-color: white;
  border: 1px solid #e8e8e8;
  letter-spacing: -0.15px;
  border-radius: 4px;
  font-size: 1rem;
  color: #c4c4c4;
  cursor: pointer;
  &:hover {
    border-color: black;
  }
`;

const SubmitBtn = styled.input`
  flex-grow: 2;
  border-radius: 3px;
  background-color: #0290ff;
  padding: 0.801rem 0 0.886rem 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: white;
  font-weight: bold;
  font-size: 0.813rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #029fd1;
  }
`;

const BookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const itemId = generateID();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: itemId,
      title,
      category,
    };
    dispatch(postBookToAPI(newBook));
    setTitle('');
  };

  return (
    <FormContainer>
      <AddBook className="montserrat">ADD NEW BOOK</AddBook>
      <Form onSubmit={submitBookToStore}>
        <TextBox className="montserrat" type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Book title" />
        <DropBox className="montserrat" defaultValue="DEFAULT" onChange={(e) => setCategory(e.target.value)}>
          <option value="DEFAULT" disabled>Category</option>
          {
            categories.map((category) => (
              <option key={category}>{category}</option>
            ))
          }
        </DropBox>
        <SubmitBtn className="roboto-slab" type="submit" value="ADD BOOK" />
      </Form>
    </FormContainer>
  );
};

export default BookForm;
