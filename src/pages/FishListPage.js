import styled from 'styled-components';
import FishCard from '../components/FishCard.js';
import SearchBar from '../components/SearchBar.js';

export default function FishListPage({
  fishes,
  searchFish,
  handleChangeSearch,
  toggleBookmark,
}) {
  return (
    <FishlistContainer>
      <SearchBar
        handleChangeSearch={handleChangeSearch}
        searchFish={searchFish}
      />
      {fishes &&
        fishes
          .filter(fish =>
            fish.FishGerman.trim().toLowerCase().includes(searchFish)
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
          <ErrorMessage>Kein Eintrag in der Datenbank vorhanden.</ErrorMessage>
        )}
    </FishlistContainer>
  );
}

const FishlistContainer = styled.section`
  display: grid;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 0;
  gap: 10px;
  margin-top: 0;
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
