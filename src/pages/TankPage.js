import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { CreateTankButton } from '../components/Button.js';

import TankCard from '../components/TankCard.js';
import Header from '../components/Header.js';
import NavigationBar from '../components/NavigationBar.js';
import ScrollToTop from '../components/ScrollToTop.js';

export default function TankPage({ newTank, deleteTank }) {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header>Mein Aquarium</Header>
      <TankContainer>
        <TankHeader>Mein Aquarium</TankHeader>
        <CreateTankButton onClick={() => navigate('/createTank')}>
          Aquarium hinzufügen
        </CreateTankButton>

        {newTank.map(tank => (
          <TankCard
            key={tank.id}
            title={tank.title}
            img={tank.img}
            text={tank.text}
            fish={tank.fish}
            deleteTank={() => deleteTank(tank.id)}
          />
        ))}
        {newTank.length === 0 ? (
          <ErrorMessage>
            Es wurde noch kein virtuelles Aquarium eingerichtet. Bitte befüllen.
          </ErrorMessage>
        ) : (
          ''
        )}
      </TankContainer>
      <ScrollToTop />
      <NavigationBar />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
`;

const TankContainer = styled.section`
  display: grid;
  gap: 0.5rem;
  scrollbar-width: none;
  margin-bottom: 0;
  border: 2px solid #28382c;
  border-radius: 2px;
  opacity: 0.95;
  margin: 20px;
  height: auto;
  box-shadow: 0px 0.05px 5px 2px #28382c;
`;

const TankHeader = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  text-align: center;
  color: #28382c;
`;

const ErrorMessage = styled.p`
  text-align: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #28382c;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;
