import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FishListPage from './pages/FishListPage.js';
import WatchListPage from './pages/WatchListPage.js';
import Header from './components/Header.js';
import NavigationBar from './components/NavigationBar.js';

function App() {
  const [fishes, setFishes] = useState([]);
  const [searchFish, setSearchFish] = useState('');

  useEffect(() => {
    getFishes();
  }, []);

  return (
    <AppContainer>
      <Header />
      <PageContainer>
        <Routes>
          <Route
            path="/"
            element={
              <FishListPage
                fishes={fishes}
                handleChange={handleChange}
                searchFish={searchFish}
              />
            }
          />
          <Route
            path="/watchlist"
            element={<WatchListPage fishes={fishes} />}
          />
        </Routes>
      </PageContainer>
      <NavigationBar />
    </AppContainer>
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

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  height: 100vh;
`;

const PageContainer = styled.main`
  overflow-y: auto;
`;
