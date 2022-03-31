import { useState } from 'react';
import styled from 'styled-components';
import { DetailButton } from '../components/Button.js';

export default function FishCard({ fish }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <FishContainer>
      <FishName>{fish.FishGerman}</FishName>

      <FishProperties>
        <FishImage
          src={fish.Image}
          alt={fish.FishName}
          width={140}
          height={140}
        ></FishImage>

        <FishNameLatin>
          <strong>{fish.FishLatin} </strong>
        </FishNameLatin>
      </FishProperties>
      <DetailButton type="button" onClick={toggleProperties}>
        {showDetails
          ? 'Eigenschaften ausblenden...'
          : 'Eigenschaften anzeigen...'}
      </DetailButton>
      {showDetails && (
        <PropertyList role="list">
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
          <li>
            <strong>Region: {fish.Region} </strong>
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
  height: auto;

  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1.1fr;
  grid-template-rows: 0.2fr 1fr 0.3fr;
  gap: 2px 0px;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

const FishName = styled.h2`
  grid-area: header;
  margin-left: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  color: #28382c;
  opacity: 0.9;
  padding: 10px;
`;

const FishProperties = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.7fr 0.3fr;
  gap: 0px 0px;
  grid-area: main;
`;

const FishImage = styled.img`
  grid-area: 1 / 1 / 3 / 2;
  justify-self: center;
  border-radius: 50%;
  border: 2px solid #28382c;
  padding: 2px;
  margin: 30px;
`;

const FishNameLatin = styled.h3`
  grid-area: 2 / 1 / 3 / 2;
  box-sizing: border-box;
  justify-self: center;
  margin-top: 0.8rem;
  font-size: 1rem;
`;

const PropertyList = styled.ul`
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  color: #28382c;
  opacity: 0.8;
`;
