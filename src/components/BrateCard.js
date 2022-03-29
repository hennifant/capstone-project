import { useState } from 'react';
import styled from 'styled-components';

export default function BratesCard({ brate, toggleBookmark }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <BrateContainer>
      <BookmarkButton
        type="button"
        onClick={() => toggleBookmark(brate.BartesGerman)}
      >
        {brate.isBookmarked ? (
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
      <BrateName>{brate.BrateGerman}</BrateName>

      <ContainerBrateProperties>
        <BrateNameLatin>
          <strong>{brate.BrateLatin} </strong>
        </BrateNameLatin>

        <BrateImage
          src={brate.Image}
          alt={brate.BrateName}
          width={80}
          height={80}
        ></BrateImage>
      </ContainerBrateProperties>
      <ShowDetailsButton type="button" onClick={toggleProperties}>
        {showDetails
          ? 'Eigenschaften ausblenden...'
          : 'Eigenschaften anzeigen...'}
      </ShowDetailsButton>
      {showDetails && (
        <PropertyList role="list">
          <li>
            <strong>Größe: {brate.Characteristics} </strong>
          </li>
          <li>
            <strong>Futter: {brate.Food}</strong>
          </li>
          <li>
            <strong>Haltung: {brate.Husbandry} </strong>
          </li>
          <li>
            <strong>Beckengröße: {brate.Tanksize} </strong>
          </li>

          <li>
            <strong>Temperatur: {brate.Temperature} </strong>
          </li>
          <li>
            <strong>pH-Wert: {brate.Ph} </strong>
          </li>
          <li>
            <strong>Schwierigkeit: {brate.Difficulty} </strong>
          </li>
          <li>
            <strong>Region: {brate.Region} </strong>
          </li>
        </PropertyList>
      )}
    </BrateContainer>
  );

  function toggleProperties() {
    setShowDetails(!showDetails);
  }
}

const BrateContainer = styled.div`
  border: 2px solid #28382c;
  border-radius: 2px;
  opacity: 0.95;
  margin: 20px;
  height: auto;
  box-shadow: 0px 0.05px 5px 2px #28382c;
`;

const BrateName = styled.h2`
  margin-left: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  color: #28382c;
  opacity: 0.9;
  padding: 10px;
`;

const ContainerBrateProperties = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;
  color: #28382c;
  margin: 0.1em 20px 10px 34px;
  opacity: 0.9;
`;

const BrateNameLatin = styled.div`
  box-sizing: border-box;
  justify-self: start;
  padding: 2px;
`;

const BrateImage = styled.img`
  box-sizing: border-box;
  justify-self: end;
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

const BookmarkButton = styled.button`
  border-style: none;
  background: transparent;
`;