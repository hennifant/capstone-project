import styled from 'styled-components';
import { useState, useEffect } from 'react';
import FishListPage from './pages/FishListPage.js';
import Header from './components/Header.js';

function App() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    getFishes();
  }, []);

  return (
    <PageContainer>
      <Header />
      <FishListPage fishes={fishes} />
    </PageContainer>
  );

  async function getFishes() {
    try {
      const response = await fetch('pisces.json');
      const data = await response.json();
      setFishes(data.fishes);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }
}

export default App;

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;
