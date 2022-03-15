import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FishListPage from './pages/FishListPage.js';
import WatchListPage from './pages/WatchListPage.js';
import Header from './components/Header.js';
import NavigationBar from './components/NavigationBar.js';

function App() {
  const [fetchedFishes, setFetchedFishes] = useState(loadLocalFish('fishes'));
  const [searchFish, setSearchFish] = useState('');

  useEffect(() => {
    savedLocalFish('fishes', fetchedFishes);
    if (!fetchedFishes) {
      getFishes();
    }
  }, [fetchedFishes]);

  return (
    <AppContainer>
      <Header />
      <PageContainer>
        <Routes>
          <Route
            path="/"
            element={
              <FishListPage
                fishes={fetchedFishes}
                searchFish={searchFish}
                handleChangeSearch={handleChangeSearch}
                toggleBookmark={toggleBookmark}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchListPage
                fishes={fetchedFishes}
                toggleBookmark={toggleBookmark}
              />
            }
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
      setFetchedFishes(data.fishes);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  function toggleBookmark(id) {
    setFetchedFishes(
      fetchedFishes.map(fish => {
        if (fish.FishGerman === id) {
          return { ...fish, isBookmarked: !fish.isBookmarked };
        } else {
          return fish;
        }
      })
    );
  }

  function handleChangeSearch(event) {
    setSearchFish(event.target.value.toLowerCase());
  }

  function savedLocalFish(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadLocalFish(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
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
