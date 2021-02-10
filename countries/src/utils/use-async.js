import * as React from "react";

const ACTION_TYPES = {
  idle: "idle",
  pending: "pending",
  resovled: "resovled",
  rejected: "rejected",
};

const ASYNC_STATUS = { ...ACTION_TYPES };

const DEFAULT_STATE = {
  status: ACTION_TYPES.idle,
  data: null,
  error: null,
};

function asyncReducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.rejected: {
      return {
        ...state,
        status: ACTION_TYPES.rejected,
        error: payload,
        data: null,
      };
    }
    case ACTION_TYPES.resovled: {
      return {
        ...state,
        status: ACTION_TYPES.resovled,
        data: payload,
        error: null,
      };
    }
    case ACTION_TYPES.pending: {
      return {
        ...state,
        status: ACTION_TYPES.pending,
      };
    }
    case ACTION_TYPES.idle: {
      return { ...state, status: ACTION_TYPES.idle };
    }
    default: {
      throw new Error(`unkown action type:${type}`);
    }
  }
}

function useAsync(initialState = DEFAULT_STATE) {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    ...DEFAULT_STATE,
    ...initialState,
  });

  const run = React.useCallback((promise) => {
    dispatch({ type: ACTION_TYPES.pending });
    return promise
      .then((data) => {
        dispatch({
          type: ACTION_TYPES.resovled,
          payload: data,
        });
        return data;
      })
      .catch((e) => {
        dispatch({ type: ACTION_TYPES.rejected, payload: e });
        return Promise.reject(e);
      });
  }, []);

  const { data, error, status } = state;
  return { data, error, status, run };
}

export { useAsync, ASYNC_STATUS };
