import styled from 'styled-components/macro';
import { useState } from 'react';
import axios from 'axios';
import select from '../images/uploadImage.svg';
import remove from '../images/removeImage.svg';

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
      {isUploading && <UploadProcess>Upload...{process}%</UploadProcess>}
      {image ? (
        <Preview>
          <CancelButton onClick={handleRemoveImage}>
            <img src={remove} width="26" alt="Thumb" />
          </CancelButton>
          <img src={image} alt="Delete" height="auto" width="100%" />
        </Preview>
      ) : (
        <UploadInput>
          <label htmlFor="file-upload">
            <img src={select} alt="upload" width="34" height="34" />
          </label>
          <input
            data-testid="file-upload"
            id="file-upload"
            type="file"
            onChange={upload}
            hidden
          />
        </UploadInput>
      )}
    </UploadContainer>
  );
}

const UploadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const UploadProcess = styled.div`
  font-size: 1rem;
  grid-column: 2/3;
`;

const Preview = styled.div`
  grid-column: 1/3;
`;

const CancelButton = styled.button`
  background: transparent;
  position: absolute;
  right: 3.1rem;
  top: 7.7rem;
  width: 30px;
  height: 30px;
  color: #28382c;
  border: none;
`;

const UploadInput = styled.div`
  grid-column: 1/2;
`;
