import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header.js';
import NavigationBar from '../components/NavigationBar.js';
import BrateCard from '../components/BrateCard.js';
import SearchBar from '../components/SearchBar.js';
import FilterSearch from '../components/FilterSearch.js';
import ScrollToTop from '../components/ScrollToTop.js';
import { NavigateButton } from '../components/Button.js';

export default function InverteBratesListPage({
  brates,
  toggleBookmark,
  handleChangeSearch,
  handleChangeFilter,
  searchFish,
  newFilter,
}) {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Header>
        <NavigateButton onClick={() => navigate(-1)}>&#8617;</NavigateButton>
        Wirbellose Datenbank
      </Header>
      <BratelistContainer>
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

        {brates &&
          brates
            .filter(brate =>
              brate.BrateGerman.trim().toLowerCase().includes(searchFish.trim())
            )
            .filter(
              brate =>
                brate.Difficulty.toLowerCase() === newFilter ||
                newFilter === 'complete'
            )

            .map(brate => (
              <BrateCard
                key={brate.BrateGerman}
                brate={brate}
                toggleBookmark={toggleBookmark}
              />
            ))}
        {brates &&
          brates.filter(brate =>
            brate.BrateGerman.trim().toLowerCase().includes(searchFish)
          ).length < 1 && (
            <ErrorMessage>
              Kein Eintrag in der Datenbank vorhanden.
            </ErrorMessage>
          )}
        <ScrollToTop />
      </BratelistContainer>
      <NavigationBar />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
`;

const BratelistContainer = styled.section`
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
