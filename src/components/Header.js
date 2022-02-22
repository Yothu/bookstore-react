import { Link } from 'react-router-dom';
import styled from 'styled-components';
import uIcon from '../assets/images/user.png';

const Header = () => {
  const OuterHeader = styled.header`
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #e8e8e8;
    background-color: white;
  `;

  const InnerHeader = styled.nav`
    display: flex;
    margin: 0 5vw;
    justify-content: space-between;
  `;

  const Title = styled.h1`
    display: flex;
    width: 15rem;
    height: 2.313rem;
    margin: 0.375rem 2.938rem 0.125rem 0;
    font-size: 1.875rem;
    font-weight: bold;
    color: #0290ff;
  `;

  const LinksContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const linkBtn = {
    padding: '0 0.5rem',
    fontSize: '0.82rem',
    textDecoration: 'none',
    color: '#121212',
  };

  const PageTop = styled.div`
    display: flex;
  `;

  const userIco = {
    height: '2.8rem',
    width: '2.8rem',
  };

  const UserIcon = () => <img src={uIcon} style={userIco} alt="user-logo" />;

  return (
    <OuterHeader>
      <InnerHeader>
        <PageTop>
          <Title>Bookstore CMS</Title>
          <LinksContainer>
            <Link style={linkBtn} to="/">BOOKS</Link>
            <Link style={linkBtn} to="/categories">CATEGORIES</Link>
          </LinksContainer>
        </PageTop>
        <UserIcon />
      </InnerHeader>
    </OuterHeader>
  );
};

export default Header;
