import { useState } from 'react';
import styled from 'styled-components';
import { DetailButton } from '../components/Button.js';

export default function FishCard({ fish, toggleBookmark }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <FishContainer>
      <BookmarkButton
        type="button"
        onClick={() => toggleBookmark(fish.FishGerman)}
      >
        {fish.isBookmarked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            alt="notBookmarked"
            fill="#28382c"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            alt="isBookmarked"
            fill="#28382c"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          </svg>
        )}
        <span className="sr-only">Bookmark</span>
      </BookmarkButton>
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
  margin: 10px;
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
  margin-bottom: 30px;
`;

const FishNameLatin = styled.h3`
  grid-area: 2 / 1 / 3 / 2;
  box-sizing: border-box;
  justify-self: center;
  margin-top: 0.2rem;

  font-size: 1rem;
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

const BookmarkButton = styled.button`
  border-style: none;
  background: transparent;
  position: absolute;
  top: 100px;
`;
