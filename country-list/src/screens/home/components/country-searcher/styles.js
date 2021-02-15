import { Button } from "components/lib";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components/macro";
import { FaAngleDown } from "react-icons/fa";
import * as mediaQueries from "styles/media-queries";
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

const DropdownButton = styled(ListboxButton)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border: 0;
  outline: 0;
`;

const DropdownArrow = styled(FaAngleDown)`
  font-size: 1.5rem;
  color: var(--colors-text);
`;

const DropdownOption = styled(ListboxOption)`
  padding: 0.35rem 0.5rem;
  cursor: pointer;
  color: var(--text-color);
  background-color: var(--elements-background);
`;

const DropdownPopover = styled(ListboxPopover)`
  border: 0;
  margin: 0;
  color: var(--text-color);
  background-color: var(--elements-background);
`;

const DropdownInput = styled(ListboxInput)`
  padding-top: 2px;
  padding-bottom: 2px;
  border: 0;
  margin: 0;
`;

const DropdownList = styled(ListboxList)`
  padding-top: 1px;
  padding-bottom: 2px;
  border: 0;
  margin: 0;
`;

const Filter = styled.div`
  display: block;
  min-width: 200px;
  padding: 0.3rem 0;
  border-radius: 0.2rem;
  box-shadow: 1px 2px 5px var(--shadow);
  transition: all 0.3s ease 0s;
  ${mediaQueries.small} {
    width: 50%;
    max-width: 320px;
  }
`;

const RegionFilter = styled(Filter)`
  margin-bottom: 4rem;
  ${mediaQueries.small} {
    width: 40%;
    max-width: 240px;
  }
`;
RegionFilter.displayName = "RegionFilter";

const CountryFilter = styled(Filter)`
  margin-bottom: 2rem;
  ${mediaQueries.small} {
    margin-bottom: 4rem;
  }
`;
CountryFilter.displayName = "CountryFilter";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  width: 80%;
  padding: 0.7rem;
  font-size: 1.25rem;
  color: var(--colors-text);
  background-color: transparent;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const SearchButton = styled(Button)`
  background-color: transparent;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 1.25rem;
`;

export {
  RegionFilter,
  CountryFilter,
  Input,
  Label,
  SearchButton,
  SearchIcon,
  Container,
  DropdownButton,
  DropdownArrow,
  DropdownOption,
  DropdownPopover,
  DropdownList,
  DropdownInput,
};
