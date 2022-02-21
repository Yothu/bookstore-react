import styled from 'styled-components';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ data }) => {
  const DataContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 30% 30%;
    padding: 1.5rem;
    width: 100%;
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
    /* font-family: Montserrat; */
    font-size: 0.875rem;
    font-weight: bold;
    margin: 0 0 0.4rem 0;
    color: #121212;
  `;

  const Title = styled.h3`
    /* font-family: RobotoSlab; */
    font-size: 1.375rem;
    font-weight: bold;
    letter-spacing: -0.2px;
    margin: 0rem;
    color: #121212;
  `;

  const Author = styled.p`
    /* font-family: RobotoSlab; */
    font-size: 0.875rem;
    font-weight: 300;
    margin: 0rem;
    color: #4386bf;
  `;

  const Actions = styled.ul`
    display: flex;
    list-style: none;
    margin: 1rem 0 0 0;
    padding: 0;
  `;

  const Action = styled.li`
    padding-right: 0.7rem;
    color: #4386bf;
  `;

  const CurrentChapter = styled.p`
    opacity: 0.5;
    /* font-family: RobotoSlab; */
    font-size: 0.813rem;
    font-weight: 300;
    letter-spacing: -0.4px;
    margin: 0 0 1rem 0;
  `;

  const Chapter = styled.p`
    /* font-family: RobotoSlab; */
    font-size: 1rem;
    font-weight: 300;
    margin: 0 0 1rem 0;
  `;

  const UpdateButton = styled.button`
    /* font-family: RobotoSlab; */
    font-size: 0.813rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    color: white;
    background-color: #0290ff;
    padding: 0.438rem 1.188rem 0.5rem 1.375rem;
    border-radius: 3px;
    border: none;
  `;

  const { genre, title, author } = data;

  return (
    <DataContainer>
      <div>
        <Data>
          <Genre>{genre}</Genre>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </Data>
        <Actions className="action-list">
          <Action>Comment</Action>
          <Action>Remove</Action>
          <Action>Edit</Action>
        </Actions>
      </div>
      <div>asd</div>
      <div>
        <CurrentChapter>Current Chapter</CurrentChapter>
        <Chapter>Chapter 17</Chapter>
        <UpdateButton>Update progress</UpdateButton>
      </div>
    </DataContainer>
  );
};

Book.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
