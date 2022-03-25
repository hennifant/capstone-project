import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

import ImageUpload from './ImageUpload.js';

export default function CreateTankForm({ newTank, setNewTank }) {
  const navigate = useNavigate();
  const [tankImage, setTankImage] = useState('');
  const [inputData, setInputData] = useState({
    id: nanoid(),
    title: '',
    fish: '',
    text: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setInputData({ ...inputData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();
    setNewTank([inputData, ...newTank]);
    setInputData({ title: '', text: '', fish: '' });
    navigate('./');
    showSubmitMessage();
  };

  const showSubmitMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <ContainerForm>
      <StyledForm onSubmit={handleFormSubmit}>
        <ImageUpload
          inputData={inputData}
          setInputData={inputData}
          tankImage={tankImage}
          setTankImage={setTankImage}
        />
        <FormInput
          onChange={event =>
            setInputData({ ...inputData, title: event.target.value })
          }
          value={inputData.title}
          type="text"
          aria-label="title"
          name="title"
          maxLength="60"
          required
          placeholder="Auqarienname"
        ></FormInput>
        <textarea
          onChange={event =>
            setInputData({ ...inputData, text: event.target.value })
          }
          value={inputData.text}
          aria-label="text"
          name="text"
          rows="2"
          cols="24"
          maxLength="140"
          required
          placeholder="Fische"
        ></textarea>
        <textarea
          onChange={event =>
            setInputData({ ...inputData, fish: event.target.value })
          }
          value={inputData.fish}
          aria-label="text"
          name="text"
          rows="4"
          cols="24"
          maxLength="280"
          required
          placeholder="Beschreibung"
        ></textarea>
        <button type="submit">Speichern</button>
        <button onClick={() => navigate(-1)}>Zurück</button>

        {isSubmitted ? (
          <SubmitMessage>Das Aquarium wird befüllt</SubmitMessage>
        ) : (
          ''
        )}
      </StyledForm>
    </ContainerForm>
  );
}

const ContainerForm = styled.section`
  margin: 0.5rem;
  border: 2px solid #28382c;
  border-radius: 2px;
  display: grid;
  padding: 0.5rem;
  color: #28382c;
  font-family: Arial, Helvetica, sans-serif;
  gap: 0.75rem;
`;

const StyledForm = styled.form`
  display: grid;
  margin: 0.5rem;
  gap: 0.2rem;
  resize: none;
  font-family: Arial, Helvetica, sans-serif;

  label {
    width: auto;
    text-decoration: underline;
    color: #28382c;
  }

  textarea {
    resize: none;
    border: 1px solid #28382c;
    border-radius: 2px;
    padding: 0.1rem;
    color: #28382c;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
  }
  button {
    background: #28382c;
    color: #dfbe6f;
    font-size: 1rem;
    border: none;
    border-radius: 2px;
    padding: 0.5rem;
  }
`;

const FormInput = styled.input`
  resize: none;
  border: 1px solid #28382c;
  border-radius: 2px;
  padding: 0.1rem;
  color: #28382c;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;

const SubmitMessage = styled.p`
  font-size: 12px;
  color: #28382c;
  text-align: center;
`;
