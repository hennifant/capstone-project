import styled from 'styled-components';
import BratesCard from '../components/BrateCard.js';
import SearchBar from '../components/SearchBar.js';

export default function BarteListPage({
  brates,
  searchbrate,
  newFilter,
  handleChangeSearch,

  toggleBookmark,
}) {
  return (
    <BratelistContainer>
      <SearchContainer>
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          searchbrate={searchbrate}
        />
      </SearchContainer>
      {brates &&
        brates
          .filter(brate =>
            brate.brateGerman.trim().toLowerCase().includes(searchbrate.trim())
          )
          .filter(
            brate =>
              brate.Difficulty.toLowerCase() === newFilter ||
              newFilter === 'complete'
          )
          .map(brate => (
            <BratesCard
              key={brate.brateGerman}
              brate={brate}
              toggleBookmark={toggleBookmark}
            />
          ))}
      {brates &&
        brates.filter(brate =>
          brate.brateGerman.trim().toLowerCase().includes(searchbrate)
        ).length < 1 && (
          <ErrorMessage>Kein Eintrag in der Datenbank vorhanden.</ErrorMessage>
        )}
    </BratelistContainer>
  );
}

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
