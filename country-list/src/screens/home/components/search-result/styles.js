import { ThemedElement } from "components/lib";
import styled from "styled-components";

const CountryIntro = styled.div`
  padding: 1rem 1.5rem;
`;

const CountryName = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  font-weight: var(--weight-bolder);
`;

const CountryList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(380px, auto);
  gap: 2.5rem;
  padding-bottom: 2rem;
`;

const CountryItem = styled.li`
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 3px 4px var(--shadow);
`;

const EmptyResult = styled(ThemedElement)`
  padding: 2rem;
`;

export { CountryIntro, CountryName, CountryItem, CountryList, EmptyResult };
