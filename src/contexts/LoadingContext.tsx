import React, { createContext, useReducer } from 'react';

/* --------------------------------------------------------------- */

interface IInitialState {
  isLoading: boolean
}

interface IAction {
  type: string,
  payload: any
}

interface IProps {
  children: any
}

interface IHandlers {
  [key: string]: Function,
}

/* --------------------------------------------------------------- */

const initialState: IInitialState = {
  isLoading: false,
};

const handlers: IHandlers = {
  INITIALIZE: (state: object, action: IAction) => {
    return {
      ...state,
      ...action.payload
    };
  },
  SET_IS_LOADING: (state: object, action: IAction) => {
    return {
      ...state,
      isLoading: action.payload
    };
  }
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const LoadingContext = createContext({
  ...initialState,
  openLoading: () => Promise.resolve(),
  closeLoading: () => Promise.resolve()
});

//  Provider
function LoadingProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openLoading = () => {
    dispatch({
      type: 'SET_IS_LOADING',
      payload: true
    });
  };

  const closeLoading = () => {
    dispatch({
      type: 'INITIALIZE',
      payload: {
        isLoading: false,
      }
    });
  };

  return (
    <LoadingContext.Provider
      value={{
        ...state,
        openLoading,
        closeLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext, LoadingProvider };