import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navigation>
      <NavigationLink to="/welcome">Neuigkeiten</NavigationLink>
      <NavigationLink to="/">Datenbank</NavigationLink>
      <NavigationLink to="/watchlist">Wunschliste</NavigationLink>
      <NavigationLink to="/tank">Aquarium</NavigationLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 48px;
  width: 100%;
  place-items: center;
  position: fixed;
  bottom: 0px;
  padding: 0.1rem;
  background-color: #28382c;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
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
