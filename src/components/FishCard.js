import { useState } from 'react';
import styled from 'styled-components';

export default function FishCard({ fish }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <FishContainer>
      <FishName>{fish.FishGerman}</FishName>
      <ContainerFishProperties>
        <FishNameLatin>
          <strong>{fish.FishLatin} </strong>
        </FishNameLatin>
        <FishImage
          src={fish.Image}
          alt={fish.FishName}
          width={80}
          height={80}
        ></FishImage>
      </ContainerFishProperties>
      <ShowDetailsButton type="button" onClick={toggleProperties}>
        Weitere Details
      </ShowDetailsButton>
      {showDetails && (
        <PropertyList>
          <li>
            <strong>Größe: {fish.Characteristics} </strong>
          </li>
          <li>
            <strong>Futter: {fish.Food}</strong>
          </li>
          <li>
            <strong>Haltung: {fish.Husbandry} </strong>
          </li>
          <li>
            <strong>Beckengröße: {fish.Tanksize} </strong>
          </li>
          <li>
            <strong>Alter: {fish.Age} </strong>
          </li>
          <li>
            <strong>Temperatur: {fish.Temperature} </strong>
          </li>
          <li>
            <strong>pH-Wert: {fish.Ph} </strong>
          </li>
          <li>
            <strong>Schwierigkeit: {fish.Difficulty} </strong>
          </li>
        </PropertyList>
      )}
    </FishContainer>
  );

  function toggleProperties() {
    setShowDetails(!showDetails);
  }
}

const FishContainer = styled.div`
  border: 2px solid #28382c;
  border-radius: 2px;
  opacity: 0.95;
  margin: 20px;
`;

const FishName = styled.h2`
  margin-left: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: #28382c;
  opacity: 0.9;
  padding: 10px;
`;

const ContainerFishProperties = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;
  color: #28382c;
  margin-top: 0.1em;
  margin-left: 34px;
  margin-bottom: 10px;
  opacity: 0.9;
  margin-right: 20px;
`;

const FishNameLatin = styled.div`
  box-sizing: border-box;
  justify-self: start;
  padding: 2px;
`;

const FishImage = styled.img`
  box-sizing: border-box;
  justify-self: end;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 2px solid #28382c;
  padding: 2px; ;
`;

const PropertyList = styled.ul`
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  color: #28382c;
  opacity: 0.8;
  margin-left: 34px;
  margin-bottom: 10px;
`;

const ShowDetailsButton = styled.button`
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
  box-shadow: 0 0 2px black;
  border-radius: 2px;
  display: block;
  width: 85%;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: whitesmoke;
    text-decoration: none;
    text-shadow: 0 0 2px #28382c;
    font-size: 1rem;
  }
`;
