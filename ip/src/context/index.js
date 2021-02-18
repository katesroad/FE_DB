// eslint-disable-next-line
import styled from "styled-components/macro";
import { Content } from "components/lib";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalStyles from "components/GlobalStyles";

export default function AppProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Content
          as="main"
          css={`
            flex-grow: 10;
          `}
        >
          <Switch>{children}</Switch>
        </Content>
        <Footer />
      </Router>
    </>
  );
}
