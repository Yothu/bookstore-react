import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  const WholePage = styled.div`
    min-height: 100vh;
  `;

  return (
    <WholePage>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </WholePage>
  );
}

export default App;
