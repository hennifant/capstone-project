import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ImageUploadButton } from './Button.js';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ImageUpload({ inputData }) {
  const [image, setImage] = useState('');

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    inputData.img = response.data.url;
    setImage(response.data.url);
  }

  return (
    <ImageContainer>
      <ImageUploadButton>
        Bild hinzufügen
        {image ? (
          <img src={image} alt="" width="100" height="40" />
        ) : (
          <input type="file" name="tankImage" onChange={upload} />
        )}
      </ImageUploadButton>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  position: relative;
  img {
    border-radius: 2px;
  }
  input {
    opacity: 0;
    align-self: left;
  }
`;
