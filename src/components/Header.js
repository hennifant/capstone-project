import styled from 'styled-components';

export default function Header() {
  return <Heading>Tank Buddy</Heading>;
}

const Heading = styled.h1`
  color: #28382c;
  font-family: 'Lucida Console', Courier, monospace;
  align-self: center;
  text-align: center;
  margin: 0;
`;
