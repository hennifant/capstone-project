import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import FishData from './data/FishData.js';
import localStorage from './hooks/localStorage.js';

import TankPage from './pages/TankPage.js';
import FishListPage from './pages/FishListPage.js';
import WatchListPage from './pages/WatchListPage.js';
import AddTankPage from './pages/AddTankPage.js';

import Header from './components/Header.js';
import NavigationBar from './components/NavigationBar.js';

function App() {
  const [loadFishData, setLoadFishData] = localStorage('fish', FishData);
  const [searchFish, setSearchFish] = useState('');
  const [newFilter, setNewFilter] = useState('complete');
  const [newFilterBookmark, setNewFilterBookmark] = useState('complete');
  const [newTank, setNewTank] = useState([]);

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
          <Route
            path="/tank"
            element={
              <TankPage
                newTank={newTank}
                deleteTank={deleteTank}
                setNewTank={setNewTank}
              />
            }
          />
          <Route
            path="/createTank"
            element={<AddTankPage newTank={newTank} setNewTank={setNewTank} />}
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

  function deleteTank(id) {
    setNewTank(newTank.filter(note => note.id !== id));
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
