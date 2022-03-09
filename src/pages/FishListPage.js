import styled from 'styled-components';
import FishCard from '../components/FishCard.js';
import Header from '../components/Header.js';

export default function FishList({ fishes }) {
  return (
    <PageContainer>
      <Header />
      <FishlistContainer>
        {fishes && fishes.map(fish => <FishCard key={fish.Id} fish={fish} />)}
      </FishlistContainer>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: 48px 1fr;
  height: 100vh;
`;

const FishlistContainer = styled.section`
  display: grid;
  gap: 16px;
  overflow-y: auto;
`;
