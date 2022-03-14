import styled from 'styled-components';

export default function Header() {
  return <Heading>Tank Buddy</Heading>;
}

const Heading = styled.h1`
  color: #dfbe6f;
  background-color: #28382c;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  text-shadow: 0 0 2px black;
`;
