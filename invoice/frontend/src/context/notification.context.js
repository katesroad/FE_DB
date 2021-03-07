// eslint-disable-next-line
import { Notification } from "components/lib";
import * as React from "react";
import { v4 as uuid } from "uuid";

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

function useNotification() {
  const ref = React.useContext(NotificationContext);
  return ref.current;
}

function createNotification(dispatch, notification, conf = {}) {
  const alert = { id: uuid(), variant: "primary", ...notification };
  dispatch({ type: "add", payload: notification });
  const { duration, autoDelete } = {
    autoDelete: true,
    duration: 2500,
    ...conf,
  };
  if (autoDelete) {
    let t1 = setTimeout(() => {
      dispatch({ type: "delete", payload: alert });
      clearTimeout(t1);
      t1 = null;
    }, duration);
  }
}

export { NotificationProvider, useNotification, createNotification };
