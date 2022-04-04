import styled from 'styled-components';

const Button = styled.button`
  border: none;
  &:hover {
    transform: perspective(500px) rotateX(15deg);
  }

  &:active {
    box-shadow: 0px 2px 0px 0px #dfbe6f;
  }
`;

export default Button;

const SubmitButton = styled(Button)`
  background: #28382c;
  color: #dfbe6f;
  font-size: 1rem;
  border-radius: 2px;
  padding: 0.5rem;
`;

export { SubmitButton };

const DeleteButton = styled(Button)`
  background: #28382c;
  color: #dfbe6f;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  padding: 0.5rem;

  &:active {
    box-shadow: 2px 2px 2px #ff6347;
    color: #ff6347;
  }
`;

export { DeleteButton };

const FishDetailButton = styled(Button)`
  background: #28382c;
  color: #dfbe6f;
  border: none;
  border-radius: 2px;
  padding: 0.6rem 1rem;
  align-self: center;
  margin-bottom: 10px;
  margin-left: 34px;
  text-align: center;
  transition: 0.5s;
  border-radius: 2px;
  width: 80%;
  font-size: 0.8rem bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export { FishDetailButton };

const CreateTankButton = styled(Button)`
  background: #28382c;
  color: #dfbe6f;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 2px;
  padding: 0.5rem;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #28382c;
`;

export { CreateTankButton };

const DetailButton = styled(Button)`
  background: #28382c;
  color: #dfbe6f;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 2px;
  padding: 0.1rem;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #28382c;
`;

export { DetailButton };

const DatabaseButton = styled(Button)`
  grid-area: button;
  background: #28382c;
  color: #dfbe6f;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 2px;
  padding: 0.5rem;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #28382c;
`;

export { DatabaseButton };

const ImageUploadButton = styled(Button)`
  border: 1px solid #ccc;
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 80%;
  font-size: 1rem;
`;

export { ImageUploadButton };

const NavigateButton = styled(Button)`
  position: absolute;
  background: transparent;
  color: #dfbe6f;
  font-size: 26px;
  top: 4px;
  left: 1px;

  &:active {
    box-shadow: none;
    font-size: 28px;
  }
`;

export { NavigateButton };
