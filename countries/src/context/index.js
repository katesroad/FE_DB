// eslint-disable-next-line
import styled from "styled-components/macro";
import Footer from "components/footer";
import Header from "components/header";
import { Content } from "components/lib";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalStyles from "components/GlobalStyles";

export default function AppProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
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
