import React, { createContext, useReducer } from 'react';

/* --------------------------------------------------------------- */

interface IInitialState {
  opened: boolean
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
  opened: false,
};

const handlers: IHandlers = {
  SET_OPENED: (state: object, action: IAction) => {
    return {
      ...state,
      opened: action.payload
    };
  }
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const MobileMenuContext = createContext({
  ...initialState,
  openMenu: () => Promise.resolve(),
  closeMenu: () => Promise.resolve()
});

//  Provider
function MobileMenuProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openMenu = () => {
    dispatch({
      type: 'SET_OPENED',
      payload: true
    });
  };

  const closeMenu = () => {
    dispatch({
      type: 'SET_OPENED',
      payload: false
    });
  };

  return (
    <MobileMenuContext.Provider
      value={{
        ...state,
        openMenu,
        closeMenu
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

export { MobileMenuContext, MobileMenuProvider };