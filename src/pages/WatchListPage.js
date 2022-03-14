import styled from 'styled-components';

export default function FishListPage({ fishes, searchFish, handleChange }) {
  return (
    <FishlistContainer>
      <ErrorMessage>Dieser Fisch ist nicht vorhanden...</ErrorMessage>
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
