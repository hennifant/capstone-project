import styled from 'styled-components';
import { useState, useEffect } from 'react';
import FishListPage from './pages/FishListPage.js';
import Header from './components/Header.js';

function App() {
  const [fishes, setFishes] = useState([]);
  const [searchFish, setSearchFish] = useState('');

  useEffect(() => {
    getFishes();
  }, []);

  return (
    <PageContainer>
      <Header />
      <FishListPage
        fishes={fishes}
        handleChange={handleChange}
        searchFish={searchFish}
      />
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

  function handleChange(event) {
    setSearchFish(event.target.value.trim().toLowerCase());
  }
}

export default App;

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr auto;
  height: 100vh;
`;
