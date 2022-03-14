import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navigation>
      <NavigationLink to="/">Datenbank</NavigationLink>
      <NavigationLink to="/watchlist">Wunschliste</NavigationLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  padding: 0.2rem;
  background-color: #28382c;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
`;

const NavigationLink = styled(NavLink)`
  display: grid;
  place-items: center;
  text-decoration: none;
  border-radius: 2px;
  width: 96%;
  height: 96%;
  color: #dfbe6f;

  &.active {
    background-color: #384c3d;
    box-shadow: 0 0 2px black;
  }
`;
