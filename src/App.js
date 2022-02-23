import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

const WholePage = styled.div`
  min-height: 100vh;
`;

const App = () => (
  <WholePage>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </WholePage>
);

export default App;
