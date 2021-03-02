import styled from "styled-components";
import * as mediaQuries from "styles/media-queries";
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

export const DropdownButton = styled(ListboxButton)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border: 0;
  outline: 0;
  text-transform: capitalize;
`;

export const DropdownArrow = styled.span`
  font-size: 1.5rem;
  color: var(--colors-text);
`;

export const DropdownOption = styled(ListboxOption)`
  padding: 0.35rem 0.5rem;
  cursor: pointer;
  text-transform: capitalize;
  color: var(--title-text-color);
  background-color: var(--element-background-color);
`;

export const DropdownPopover = styled(ListboxPopover)`
  border: 0;
  margin: 0;
`;

export const DropdownInput = styled(ListboxInput)`
  display: none;
  font-size: 16px;
  color: var(--title-text-color);
  font-weight: var(--font-weight-bold);
  ${mediaQuries.small} {
    display: block;
    margin-right: 20px;
  }
`;

export const ExtraText = styled.span`
  display: none;
  ${mediaQuries.small} {
    display: inline;
  }
`;

export const DropdownList = styled(ListboxList)`
  padding-top: 1px;
  padding-bottom: 2px;
  border: 0;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--title-text-color);
`;