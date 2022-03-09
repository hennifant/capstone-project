import styled from 'styled-components';
import FishCard from '../components/FishCard.js';

export default function FishListPage({ fishes }) {
  return (
    <FishlistContainer>
      {fishes && fishes.map(fish => <FishCard key={fish.Id} fish={fish} />)}
    </FishlistContainer>
  );
}

const FishlistContainer = styled.section`
  display: grid;
  gap: 16px;
  overflow-y: auto;
  scrollbar-width: none;
`;
