import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Book.css';
import { deleteBookFromAPI } from '../../redux/books/books';

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

const Category = styled.p`
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
  &:hover {
    color: #0290ff;
  }
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
  cursor: pointer;
`;

const progressWheel = {
  width: '4.25rem',
  height: '4.25rem',
};

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ChapterContainer = styled.div`
  padding-left: 3rem;
  border-left: 1px solid #e8e8e8;
`;

const Percent = styled.p`
  margin: 0;
  font-size: 2rem;
`;

const Completed = styled.p`
  margin: 0;
`;

const PercentContainer = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Book = ({
  id,
  title,
  category,
}) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    e.preventDefault();
    dispatch(deleteBookFromAPI(id));
  };

  return (
    <DataContainer id={id}>
      <div>
        <Data>
          <Category className="montserrat">{category}</Category>
          <Title className="roboto-slab">{title}</Title>
          <Author className="roboto-slab">Dhaivy</Author>
        </Data>
        <Actions className="action-list">
          <Action className="roboto-slab">Comment</Action>
          <Action className="roboto-slab" onClick={removeBookFromStore}>Remove</Action>
          <Action className="roboto-slab">Edit</Action>
        </Actions>
      </div>
      <ProgressContainer>
        <div style={progressWheel}>
          <CircularProgressbar value={65} />
        </div>
        <PercentContainer>
          <Percent className="montserrat">65%</Percent>
          <Completed className="montserrat">Completed</Completed>
        </PercentContainer>
      </ProgressContainer>
      <ChapterContainer>
        <CurrentChapter className="roboto-slab">Current Chapter</CurrentChapter>
        <Chapter className="roboto-slab">Chapter [Number]</Chapter>
        <UpdateButton className="roboto-slab">Update progress</UpdateButton>
      </ChapterContainer>
    </DataContainer>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
