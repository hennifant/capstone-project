import styled from 'styled-components';
import FishCard from '../components/RandomFishCard.js';
import Header from '../components/Header.js';
import NavigationBar from '../components/NavigationBar.js';
import FishData from '../data/FishData.js';

export default function WelcomePage(fish) {
  const randomFish = FishData[Math.floor(Math.random() * FishData.length)];

  return (
    <PageContainer>
      <Header>AppQuarium</Header>
      <FishlistContainer>
        <TextContainer>Willkommen im AppQuarium</TextContainer>
        <FishOfTheDay>
          Fisch des Tages
          <FishCard key={fish.FishGerman} fish={randomFish} />
        </FishOfTheDay>
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
  font-family: Arial, Helvetica, sans-serif;
  color: #28382c;
  text-align: center;
`;

const FishOfTheDay = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  color: #28382c;
  opacity: 0.9;
  padding: 10px;
  border: 2px solid #28382c;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 0.05px 5px 2px #28382c;
`;

const TextContainer = styled.h3`
  margin: 20px;
  padding: 0.4rem;
`;
