import styled from 'styled-components';

const BookForm = () => {
  const FormContainer = styled.div`
    border-top: 1px solid #e8e8e8;
  `;

  const AddBook = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: -0.18px;
    color: #888;
  `;

  return (
    <FormContainer>
      <AddBook>ADD NEW BOOK</AddBook>
      <form>
        <input type="text" name="name" placeholder="Book title" />
        <select>
          <option disabled selected>Category</option>
        </select>
        <input type="submit" />
      </form>
    </FormContainer>
  );
};

export default BookForm;
