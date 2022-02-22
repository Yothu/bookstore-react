import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Book.css';
import { removeBook } from '../redux/books/books';

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 30% 30%;
  padding: 1.5rem;
  margin: 0.3rem 0rem;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const Genre = styled.p`
  opacity: 0.5;
  font-size: 0.875rem;
  font-weight: bold;
  margin: 0 0 0.4rem 0;
  color: #121212;
`;

const Title = styled.h3`
  font-size: 1.375rem;
  font-weight: bold;
  letter-spacing: -0.2px;
  margin: 0rem;
  color: #121212;
`;

const Author = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  margin: 0rem;
  color: #4386bf;
`;

const Actions = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  padding: 0;
`;

const Action = styled.button`
  padding-right: 0.7rem;
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: #4386bf;
`;

const CurrentChapter = styled.p`
  opacity: 0.5;
  font-size: 0.813rem;
  font-weight: 300;
  letter-spacing: -0.4px;
  margin: 0 0 1rem 0;
`;

const Chapter = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
`;

const UpdateButton = styled.button`
  font-size: 0.813rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: white;
  background-color: #0290ff;
  padding: 0.438rem 1.188rem 0.5rem 1.375rem;
  border-radius: 3px;
  border: none;
`;

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <DataContainer id={id}>
      <div>
        <Data>
          <Genre>Genre</Genre>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </Data>
        <Actions className="action-list">
          <Action>Comment</Action>
          <Action onClick={removeBookFromStore}>Remove</Action>
          <Action>Edit</Action>
        </Actions>
      </div>
      <div>
        <p>Percent</p>
        <p>Completed</p>
      </div>
      <div>
        <CurrentChapter>Current Chapter</CurrentChapter>
        <Chapter>Chapter [Number]</Chapter>
        <UpdateButton>Update progress</UpdateButton>
      </div>
    </DataContainer>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
