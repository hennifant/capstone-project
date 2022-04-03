import styled from 'styled-components/macro';
import { useState } from 'react';
import axios from 'axios';
import select from '../images/upIcon.svg';
import cancel from '../images/upCancel.svg';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ImageUpload({ inputData, setImage, image }) {
  const [isUploading, setIsUploading] = useState(false);
  const [process, setProcess] = useState(0);

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
        onUploadProgress: progressEvent => {
          setIsUploading(true);
          let percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProcess(percent);
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    inputData.img = response.data.url;
    setImage(response.data.url);
    setIsUploading(false);
  }

  function handleRemoveImage() {
    setImage('');

    setProcess(0);
    setIsUploading(false);
  }

  return (
    <UploadContainer>
      {isUploading && (
        <UploadProcess>Lädt Bild hoch...{process}%</UploadProcess>
      )}
      {image ? (
        <Preview>
          <CancelButton onClick={handleRemoveImage}>
            <img src={cancel} width="10" alt="Thumb" />
          </CancelButton>
          <img src={image} alt="Delete" height="20px" width="20px" />
        </Preview>
      ) : (
        <div>
          <label htmlFor="file-upload">
            <img src={select} alt="upload" width="35" height="35" />
          </label>
          <input
            data-testid="file-upload"
            id="file-upload"
            type="file"
            onChange={upload}
            hidden
          />
        </div>
      )}
    </UploadContainer>
  );
}

const UploadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
`;

const UploadProcess = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const Preview = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  height: auto;
  img {
    border-radius: 4px;
  }
`;

const CancelButton = styled.button`
  grid-area: 1 / 3 / 2 / 4;

  border: none;
  background: none;
  position: absolute;
  right: 0.5rem;
  top: 0.75rem;
`;
