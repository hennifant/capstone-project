import styled from 'styled-components';

const Button = styled.button`
  border: none;
`;

export default Button;

const ShowDetailsButton = styled(Button)`
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

export { ShowDetailsButton };

const SubmitButton = styled(Button)`
  background: #28382c;
  color: #dfbe6f;
  font-size: 1rem;

  border-radius: 2px;
  padding: 0.5rem;
`;

export { SubmitButton };

const DetailsButton = styled(Button)`
  background: #28382c;
  color: #dfbe6f;

  border: none;
  border-radius: 2px;
  padding: 0.4rem 1rem;
  align-self: center;
  margin-bottom: 10px;
  margin-left: 34px;

  text-align: center;
  transition: 0.5s;

  box-shadow: 0 0 8px black;
  border-radius: 2px;

  width: 50%;
  font-size: 0.8rem bold;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: #384c3d;
    text-decoration: none;
    text-shadow: 0 0 1px #28382c;
    box-shadow: 0 0 12px #28382c;
  }
`;

export { DetailsButton };

const CreateTankButton = styled(Button)`
  background: #28382c;
  color: #dfbe6f;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 2px;
  padding: 0.5rem;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #28382c;

  &:hover {
    transform: perspective(500px) rotateX(15deg);
  }

  &:active {
    box-shadow: 1px 2px #666;
  }
`;

export { CreateTankButton };

const DetailButton = styled(Button)`
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

  &:hover {
    transform: perspective(500px) rotateX(15deg);
  }

  &:active {
    box-shadow: 1px 2px #666;
  }
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

  &:hover {
    transform: perspective(500px) rotateX(15deg);
  }

  &:active {
    box-shadow: 1px 2px #666;
  }
`;

export { DatabaseButton };
