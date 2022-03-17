import styled from 'styled-components';
import FishCard from '../components/FishCard.js';

export default function FishListPage({ fishes, toggleBookmark }) {
  return (
    <FishlistContainer>
      {fishes &&
        fishes
          .filter(fish => fish.isBookmarked === true)
          .map(fish => (
            <FishCard
              key={fish.FishGerman}
              fish={fish}
              toggleBookmark={toggleBookmark}
            />
          ))}
      {fishes.filter(fish => fish.isBookmarked === true).length < 1 && (
        <ErrorMessage>
          Sie haben bisher noch keinen Fisch zu Ihrer Wunschliste hinzugefügt.
          Durch das anklicken des Bookmark-Symbols in der Datenbank können Sie
          dies ändern.
        </ErrorMessage>
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
  text-align: center;
  padding: 10px 10px 10px;
  margin: 10px 10px 10px;
  border: 1px solid #28382c;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;
