import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FishListPage from './pages/FishListPage.js';
import WatchListPage from './pages/WatchListPage.js';
import Header from './components/Header.js';
import NavigationBar from './components/NavigationBar.js';
import FishData from './data/FishData.js';

function App() {
  const [loadFishData, setLoadFishData] = useState(
    loadFromLocal(FishData) ?? FishData
  );
  const [searchFish, setSearchFish] = useState('');
  const [newFilter, setNewFilter] = useState('complete');
  const [newFilterBookmark, setNewFilterBookmark] = useState('complete');

  useEffect(() => {
    saveToLocal('fishes', loadFishData);
  }, [loadFishData]);

  return (
    <AppContainer>
      <Header />
      <PageContainer>
        <Routes>
          <Route
            path="/"
            element={
              <FishListPage
                fishes={loadFishData}
                searchFish={searchFish}
                handleChangeSearch={handleChangeSearch}
                handleChangeFilter={handleChangeFilter}
                toggleBookmark={toggleBookmark}
                newFilter={newFilter}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchListPage
                fishes={loadFishData}
                toggleBookmark={toggleBookmark}
                newFilterBookmark={newFilterBookmark}
                handleChangeFilterBookmark={handleChangeFilterBookmark}
              />
            }
          />
        </Routes>
      </PageContainer>
      <NavigationBar />
    </AppContainer>
  );

  function toggleBookmark(id) {
    setLoadFishData(
      loadFishData.map(fish => {
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

  function handleChangeFilter(value) {
    setNewFilter(value.toLowerCase());
  }

  function handleChangeFilterBookmark(value) {
    setNewFilterBookmark(value);
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
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
