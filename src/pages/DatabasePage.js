import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { DatabaseButton } from '../components/Button.js';

import Header from '../components/Header.js';
import NavigationBar from '../components/NavigationBar.js';
import ScrollToTop from '../components/ScrollToTop.js';

import fishImage from '../images/fish.jpg';
import brateImage from '../images/invertebrate.jpg';

export default function DatabasePage() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Header>Datenbank</Header>
      <BoxContainer>
        <TextContainer>Wählen Sie eine Datenbank</TextContainer>
        <NavigationContainer>
          <DatabaseHeader>Fisch Datenbank</DatabaseHeader>
          <DatabaseImage
            src={fishImage}
            alt={fishImage}
            width={140}
            height={100}
          ></DatabaseImage>
          <DatabaseButton onClick={() => navigate('/fishlist')}>
            Datenbank erkunden
          </DatabaseButton>
        </NavigationContainer>
        <NavigationContainer>
          <DatabaseHeader>Wirbellose Datenbank</DatabaseHeader>
          <DatabaseImage
            src={brateImage}
            alt={brateImage}
            width={140}
            height={100}
          ></DatabaseImage>
          <DatabaseButton onClick={() => navigate('/bratelist')}>
            Datenbank erkunden
          </DatabaseButton>
        </NavigationContainer>

        <NavigationBar />
        <ScrollToTop />
      </BoxContainer>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  color: #28382c;
`;

const BoxContainer = styled.section`
  display: grid;
`;
const TextContainer = styled.h2`
  border: 2px solid #28382c;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  margin: 20px;
  font-family: Helvetica, sans-serif;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
`;

const NavigationContainer = styled.div`
  border: 2px solid #28382c;
  display: grid;
  grid-auto-rows: 1fr;
  gap: 2px 0px;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr 0.3fr;
  grid-template-areas:
    'header'
    'img'
    'button';

  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  margin: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

const DatabaseHeader = styled.h3`
  grid-area: header;
  text-align: center;
  padding: 0.2rem;
`;

const DatabaseImage = styled.img`
  justify-self: center;
  border-radius: 5px;
  border: 2px solid #28382c;
`;
