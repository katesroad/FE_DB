import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { Image } from "components/lib";

const CountryName = styled.h2`
  font-size: 2.1rem;
  margin-bottom: 1.7rem;
  margin-top: 1.7rem;
`;

const CountryFlag = styled(Image)`
  box-shadow: 1px 1px 4px var(--shadow);
  ${mediaQueries.xlarge} {
    width: 40%;
  }
`;

const CountryInfo = styled.div`
  margin-bottom: 2rem;
  ${mediaQueries.small} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    p {
      width: 50%;
    }
  }
`;

const CountryIntro = styled.article`
  ${mediaQueries.xlarge} {
    width: 42%;
  }
`;

const Country = styled.section`
  ${mediaQueries.xlarge} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export { Country, CountryName, CountryFlag, CountryInfo, CountryIntro };
