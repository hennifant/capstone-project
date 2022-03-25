import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import TankCard from '../components/TankCard.js';

export default function TankPage({ newTank, setNewTank, deleteTank }) {
  const navigate = useNavigate();

  return (
    <TankContainer>
      <TankHeader>Mein Aquarium</TankHeader>
      <TankAddButton onClick={() => navigate('/createTank')}>
        Aquarium hinzufügen
      </TankAddButton>

      {newTank.map((tank, index) => (
        <TankCard
          key={index}
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
  );
}

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

const TankAddButton = styled.button`
  background: rgb(99, 166, 20);
  background: linear-gradient(
    266deg,
    rgba(99, 166, 20, 1) 10%,
    rgba(99, 167, 20, 1) 42%,
    rgba(0, 212, 255, 1) 100%
  );
  margin-left: 34px;
  margin-bottom: 10px;
  padding: 10px 40px;
  text-align: center;
  transition: 0.5s;
  background-size: 100% auto;
  color: #28382c;
  box-shadow: 0 0 8px black;
  border-radius: 2px;
  outline: none;
  display: block;
  width: 85%;
  font-size: 0.8rem bold;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: #384c3d;
    text-decoration: none;
    text-shadow: 0 0 1px #28382c;
    box-shadow: 0 0 12px #28382c;
  }
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
