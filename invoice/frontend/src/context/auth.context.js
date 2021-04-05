// eslint-disable-next-line
import styled from "styled-components/macro";
import { Content } from "components/lib";
import * as React from "react";
import { useQueryClient } from "react-query";
import { useGetUser } from "hooks/auth.hooks";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

export function AuthProvider(props) {
  const queryClient = useQueryClient();
  const { data, status, error } = useGetUser();
  const [user, setUser] = React.useState(() => {
    try {
      return queryClient.getQueryData(["user"]);
    } catch (e) {
      console.log(e);
      return null;
    }
  });

  React.useEffect(() => {
    if (status === "success") {
      setUser(data);
    }
  }, [status, data]);

  if (["loading", "idle"].includes(status)) {
    return (
      <Content
        css={`
          position: fixed;
          top: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          background: var(--body-background);
        `}
      >
        <p>Loading...</p>
      </Content>
    );
  }

  if (status === "error") {
    console.log(error);
  }

  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used inside of AuthProvider`);
  }
  return context;
}
