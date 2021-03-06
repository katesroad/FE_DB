// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Notification } from "components/lib";

const NotificationContext = React.createContext();

function notifcationReducer(notifications, action) {
  const { type, payload } = action;
  switch (type) {
    case "delete": {
      delete notifications[payload.msg];
      return { ...notifications };
    }
    case "add": {
      notifications[payload.msg] = payload;
      return { ...notifications };
    }
    default: {
      throw new Error(`Unknown action type:${type}`);
    }
  }
}

function NotificationProvider({ children }) {
  const [notifications, dispatch] = React.useReducer(notifcationReducer, {});
  const value = [notifications, dispatch];
  return (
    <NotificationContext.Provider value={value}>
      {/* place global notifications here */}
      <div
        css={`
          position: fixed;
          top: 56px;
          right: 56px;
          z-index: 999;
        `}
      >
        {Object.keys(notifications).map((key) => {
          const { variant, msg } = notifications[key];
          return (
            <Notification variant={variant} key={key}>
              {msg}
            </Notification>
          );
        })}
      </div>
      {children}
    </NotificationContext.Provider>
  );
}

function useFailedAlert(status, msg) {
  const [, dispatch] = React.useContext(NotificationContext);
  React.useEffect(() => {
    if (status === "error") {
      const alert = { msg: msg, variant: "danger" };
      dispatch({ type: "add", payload: alert });
      setTimeout(() => {
        dispatch({ type: "delete", payload: alert });
      }, 2500);
    }
  }, [status]);
}

export { NotificationProvider, useFailedAlert };
