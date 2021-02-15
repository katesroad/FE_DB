import { Button } from "components/lib";
import styled from "styled-components";

const InfoItem = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const InfoItemName = styled.span`
  margin-right: 0.4rem;
  font-weight: var(--weight-bolder);
  text-transform: capitalize;
`;

const BorderCountry = styled(Button)`
  padding: 0.5em 2em;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 4px;
  margin: 0.5rem 0.7rem 0.5rem 0;
  cursor: auto;
`;

export { InfoItem, InfoItemName, BorderCountry };
