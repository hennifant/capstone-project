import styled from 'styled-components';

export default function FilterSearch({ handleChangeFilter, newFilter }) {
  return (
    <FilterContainer>
      <FilterFieldset>
        <FilterLegend id="filterLegend">Schwierigkeits-Level:</FilterLegend>
        <LabelFilter htmlFor="filterAllFish" newfilter={newFilter}>
          <FilterInput
            type="radio"
            value="complete"
            name="filterFishes"
            id="filterAllFish"
            onChange={({ target: { value } }) => handleChangeFilter(value)}
          ></FilterInput>
          Alle
        </LabelFilter>
        <LabelFilterEasy htmlFor="filterEasyFish" newfilter={newFilter}>
          <FilterInput
            type="radio"
            value="einfach"
            name="filterFishes"
            id="filterEasyFish"
            onChange={({ target: { value } }) => handleChangeFilter(value)}
          ></FilterInput>
          Einfach
        </LabelFilterEasy>
        <LabelFilterNormal htmlFor="filterNormalFish" newfilter={newFilter}>
          <FilterInput
            type="radio"
            value="normal"
            name="filterFishes"
            id="filterNormalFish"
            onChange={({ target: { value } }) => handleChangeFilter(value)}
          ></FilterInput>
          Normal
        </LabelFilterNormal>
        <LabelFilterDifficult
          htmlFor="filterDifficultFish"
          newfilter={newFilter}
        >
          <FilterInput
            type="radio"
            value="schwierig"
            name="filterFishes"
            id="filterDifficultFish"
            onChange={({ target: { value } }) => handleChangeFilter(value)}
          ></FilterInput>
          Schwierig
        </LabelFilterDifficult>
        <LabelFilterSpecial htmlFor="filterSpecialFish" newfilter={newFilter}>
          <FilterInput
            type="radio"
            value="speziell"
            name="filterFishes"
            id="filterSpecialFish"
            onChange={({ target: { value } }) => handleChangeFilter(value)}
          ></FilterInput>
          Speziell
        </LabelFilterSpecial>
      </FilterFieldset>
    </FilterContainer>
  );
}
const FilterContainer = styled.form`
  padding-bottom: 0.4rem;
`;

const FilterFieldset = styled.fieldset`
  display: grid;
  grid-template-rows: auto;
  border: none;
  padding: 2px 10px;
  background-color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  color: #28382c;
`;

const FilterLegend = styled.legend`
  font-size: 1rem;
  padding-left: 10px;
`;

const FilterInput = styled.input`
  display: none;
`;

const LabelFilter = styled.label`
  background-color: ${props =>
    props.newfilter === 'complete' ? '#28382c' : 'transparent'};
  color: ${props => (props.newfilter === 'complete' ? '#dfbe6f' : '#000')};
  border-radius: 2px;
  border: 1px solid #28382c;
  padding: 1px 1px 1px 1px;
  margin: 0.1rem;
  width: 100%;
`;

const LabelFilterEasy = styled(LabelFilter)`
  background-color: ${props =>
    props.newfilter === 'einfach' ? '#28382c' : 'transparent'};
  color: ${props => (props.newfilter === 'einfach' ? '#dfbe6f' : '#000')};
`;

const LabelFilterNormal = styled(LabelFilter)`
  background-color: ${props =>
    props.newfilter === 'normal' ? '#28382c' : 'transparent'};
  color: ${props => (props.newfilter === 'normal' ? '#dfbe6f' : '#000')};
`;

const LabelFilterDifficult = styled(LabelFilter)`
  background-color: ${props =>
    props.newfilter === 'schwierig' ? '#28382c' : 'transparent'};
  color: ${props => (props.newfilter === 'schwierig' ? '#dfbe6f' : '#000')};
`;

const LabelFilterSpecial = styled(LabelFilter)`
  background-color: ${props =>
    props.newfilter === 'speziell' ? '#28382c' : 'transparent'};
  color: ${props => (props.newfilter === 'speziell' ? '#dfbe6f' : '#000')};
`;
