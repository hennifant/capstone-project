import styled from 'styled-components';

export default function FishCard({ fish }) {
  return (
    <FishContainer>
      <FishName>{fish.FishGerman}</FishName>
      <PropertyList>
        <li>
          <strong>Lateinischer Name: {fish.FishLatin} </strong>
        </li>
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
    </FishContainer>
  );
}

const FishContainer = styled.div`
  border: 2px solid #28382c;
  border-radius: 2px;
  opacity: 0.95;
`;

const FishName = styled.h2`
  margin-left: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: #28382c;
  opacity: 0.9;
`;

const PropertyList = styled.ul`
  list-style: square;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  color: #28382c;
  opacity: 0.8;
`;
