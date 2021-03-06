// eslint-disable-next-line
import styled from "styled-components/macro";
import { v4 as uuid } from "uuid";
import * as React from "react";
import { Notification } from "components/lib";

const NotificationContext = React.createContext();

function notifcationReducer(notifications, action) {
  const { type, payload } = action;
  switch (type) {
    case "delete": {
      const newNotifications = notifications.filter(
        (notification) => notification.id !== payload.id
      );
      return [...newNotifications];
    }
    case "add": {
      return [...notifications, payload];
    }
    default: {
      throw new Error(`Unknown action type:${type}`);
    }
  }
}

function NotificationProvider({ children }) {
  const [notifications, dispatch] = React.useReducer(notifcationReducer, []);
  const value = [notifications, dispatch];
  const ref = React.useRef(value);
  ref.current = value;
  return (
    <NotificationContext.Provider value={ref}>
      {/* place global notifications here */}
      <div
        css={`
          position: fixed;
          top: 56px;
          right: 56px;
          z-index: 999;
        `}
      >
        {notifications.map((notification) => {
          const { id, variant, msg } = notification;
          return (
            <Notification variant={variant} key={id}>
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
  const { current } = React.useContext(NotificationContext);
  const [, dispatch] = current;
  React.useEffect(() => {
    if (status === "error") {
      const alert = { msg: msg, variant: "danger", id: uuid() };
      dispatch({ type: "add", payload: alert });
      setTimeout(() => {
        dispatch({ type: "delete", payload: alert, id: uuid() });
      }, 2500);
    }
  }, [status, msg, dispatch]);
}

function useNotification() {
  const ref = React.useContext(NotificationContext);
  return ref.current;
}

function createNotification(
  dispatch,
  { variant, msg },
  { autoDelete, duration } = { autoDelete: true, duration: 2500 }
) {
  const notification = { id: uuid(), variant: variant || "primary", msg };
  dispatch({ type: "add", payload: notification });
  if (autoDelete) {
    let t1 = setTimeout(() => {
      dispatch({ type: "delete", payload: notification });
      clearTimeout(t1);
      t1 = null;
    }, duration);
  }
}

export {
  NotificationProvider,
  useFailedAlert,
  useNotification,
  createNotification,
};
