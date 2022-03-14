import styled from 'styled-components';
import FishCard from '../components/FishCard.js';
import SearchBar from '../components/SearchBar.js';

export default function FishListPage({ fishes, searchFish, handleChange }) {
  return (
    <FishlistContainer>
      <SearchBar handleChange={handleChange} searchFish={searchFish} />
      {fishes &&
        fishes
          .filter(fish =>
            fish.FishGerman.trim().toLowerCase().includes(searchFish)
          )
          .map(fish => <FishCard key={fish.FishGerman} fish={fish} />)}
      {fishes &&
        fishes.filter(fish =>
          fish.FishGerman.trim().toLowerCase().includes(searchFish)
        ).lenght < 1 && (
          <ErrorMessage>Dieser Fisch ist nicht vorhanden...</ErrorMessage>
        )}
    </FishlistContainer>
  );
}

const FishlistContainer = styled.section`
  display: grid;
  gap: 16px;
  scrollbar-width: none;
  margin-bottom: 0;
  gap: 10px;
`;

const ErrorMessage = styled.p`
  padding: 20px 20px 20px;
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;
