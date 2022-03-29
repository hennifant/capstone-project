import styled from 'styled-components';

import Header from '../components/Header.js';
import NavigationBar from '../components/NavigationBar.js';
import FishCard from '../components/FishCard.js';
import SearchBar from '../components/SearchBar.js';
import FilterSearch from '../components/FilterSearch.js';
import ScrollToTop from '../components/ScrollToTop.js';

export default function FishListPage({
  fishes,
  searchFish,
  newFilter,
  handleChangeSearch,
  handleChangeFilter,
  toggleBookmark,
}) {
  return (
    <PageContainer>
      <Header>Datenbank</Header>
      <FishlistContainer>
        <SearchContainer>
          <SearchBar
            handleChangeSearch={handleChangeSearch}
            searchFish={searchFish}
          />
          <FilterSearch
            handleChangeFilter={handleChangeFilter}
            newFilter={newFilter}
          />
        </SearchContainer>
        {fishes &&
          fishes
            .filter(fish =>
              fish.FishGerman.trim().toLowerCase().includes(searchFish.trim())
            )
            .filter(
              fish =>
                fish.Difficulty.toLowerCase() === newFilter ||
                newFilter === 'complete'
            )
            .map(fish => (
              <FishCard
                key={fish.FishGerman}
                fish={fish}
                toggleBookmark={toggleBookmark}
              />
            ))}
        {fishes &&
          fishes.filter(fish =>
            fish.FishGerman.trim().toLowerCase().includes(searchFish)
          ).length < 1 && (
            <ErrorMessage>
              Kein Eintrag in der Datenbank vorhanden.
            </ErrorMessage>
          )}
        <ScrollToTop />
      </FishlistContainer>
      <NavigationBar />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
`;

const FishlistContainer = styled.section`
  display: grid;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 0;
  margin-top: 0;
`;

const SearchContainer = styled.div`
  border: 2px solid #28382c;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  margin: 20px;
`;
const ErrorMessage = styled.p`
  text-align: center;
  padding: 10px 10px 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #28382c;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;
