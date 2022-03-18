import styled from 'styled-components';
import fishIcon from '../images/fish_outline.svg';

function Searchbar({ handleChangeSearch, searchFish }) {
  return (
    <label htmlFor="search-fish-input">
      <SearchbarContainer>
        <SearchbarInputContainer>
          <SearchbarIcon>
            <img alt="Search fishicon" src={fishIcon}></img>
          </SearchbarIcon>
          <SearchbarInput
            aria-label="search-fish-input"
            name="search-fish-input"
            value={searchFish}
            onChange={handleChangeSearch}
            type="text"
            placeholder="  Fischname..."
            maxLength={20}
          ></SearchbarInput>
        </SearchbarInputContainer>
      </SearchbarContainer>
    </label>
  );
}

export default Searchbar;

const SearchbarContainer = styled.div`
  border: 2px solid #28382c;
  overflow: hidden;
  box-shadow: 0px 0.05px 5px 2px #28382c;
  margin: 20px;
  height: 2.6rem;
`;

const SearchbarInputContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 6px;
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  background-color: whitesmoke;
  border-radius: 2px;
  border: 1px solid #28382c;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;

const SearchbarIcon = styled.span`
  font-size: 2rem;
  margin-left: 4px;
  margin-right: 6px;
`;
