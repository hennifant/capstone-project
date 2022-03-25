import styled from 'styled-components';

import CreateTankForm from '../components/CreateTankForm.js';

export default function AddTankPage({ newTank, setNewTank }) {
  return (
    <TankContainer>
      <TankHeader>Mein Aquarium</TankHeader>

      <CreateTankForm setNewTank={setNewTank} newTank={newTank} />
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
