// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Notification } from "components/lib";

/**
 * Giving notification variant, and msg, generate a notificaiton
 * - The data schema for a notification: msg, variant, id
 * @param{object} notification - notification {msg:string, variant:string}
 */
function generateNotification(notification) {
  const id = Date.now();
  return { id, ...notification };
}

const NotificationContext = React.createContext();

function notifcationReducer(notifications, action) {
  const { type, payload } = action;
  switch (type) {
    case "delete": {
      const remainingNotifications = notifications.filter(
        (notification) => notification.id !== payload.id
      );
      return [...remainingNotifications];
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
  const [notifications, dispatch] = React.useReducer(notifcationReducer, [
    generateNotification({ variant: "danger", msg: "Danger" }),
  ]);
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
        {notifications.map(({ variant, msg, id }) => (
          <Notification varaint={variant} key={id}>
            {msg}
          </Notification>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
}

function useNotification() {
  const context = React.useContext(NotificationContext);
  if (!context) {
    const msg = `using useNotification outside of <NotificationProvider />`;
    throw new Error(msg);
  }
  return context;
}

function addNotification(dispatch, notification) {
  dispatch({
    type: "add",
    payload: notification,
  });
}

function deleteNotification(dispatch, notification) {
  dispatch({
    type: "delete",
    payload: notification,
  });
}

export {
  NotificationProvider,
  useNotification,
  generateNotification,
  addNotification,
  deleteNotification,
};
