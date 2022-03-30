import styled from 'styled-components';

export default function Card({ deleteTank, title, text, fish, img }) {
  return (
    <CardContainer>
      <h2>{title}</h2>
      <ImageContainer>
        <ImageTank alt="Image of my Tank" src={img} />
      </ImageContainer>
      <CardList role="list">
        <li>
          <strong>Fische: {fish} </strong>
        </li>
        <li>
          <strong>Beschreibung: {text}</strong>
        </li>
      </CardList>
      <DeleteButton type="button" onClick={deleteTank}>
        Löschen
      </DeleteButton>
    </CardContainer>
  );
}
const CardContainer = styled.section`
  margin: 0.5rem;
  border: 2px solid #28382c;
  border-radius: 2px;
  display: grid;
  padding: 0.8rem;
  color: #28382c;
  font-family: Arial, Helvetica, sans-serif;
  gap: 0.75rem;
  h3 {
    padding-bottom: 0.25rem;
    font-size: 1rem;
    border: 1px solid #28382c;
    text-align: center;
  }
`;

const CardList = styled.ul`
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  color: #28382c;
  opacity: 0.8;

  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  background: #28382c;
  color: #dfbe6f;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
`;

const ImageContainer = styled.div`
  margin: 0.5rem;
  position: relative;
  overflow: hidden;
  border: 2 solid #28382c;
  border-radius: 2px;

  color: transparent;
`;

const ImageTank = styled.img`
  display: inline;

  height: 100%;
  width: 100%;
`;
