import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import Header from '../components/Header.js';
import NavigationBar from '../components/NavigationBar.js';
import ScrollToTop from '../components/ScrollToTop.js';

export default function DatabasePage() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Header>Datenbank</Header>
      <FishlistContainer>
        <TextContainer>Wählen Sie ein Datenbank</TextContainer>
        <ButtonContainer>
          <DatabaseButton onClick={() => navigate('/fishlist')}>
            Fisch Datenbak
          </DatabaseButton>
          <DatabaseButton onClick={() => navigate('/bratelist')}>
            Wirbellose Datenbank
          </DatabaseButton>
        </ButtonContainer>

        <NavigationBar />
        <ScrollToTop />
      </FishlistContainer>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
`;

const FishlistContainer = styled.section`
  display: grid;
`;
const TextContainer = styled.div`
  border: 2px solid #28382c;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  margin: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

const ButtonContainer = styled.div`
  border: 2px solid #28382c;
  grid-template-rows: 50%;
  height: 240px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  margin: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

const DatabaseButton = styled.button`
  height: 40px;
  width: 100px;
`;
