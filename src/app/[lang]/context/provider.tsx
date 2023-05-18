'use client'

import { useReducer, ReactNode } from 'react'
import AppReducer, { initialState } from './reducer';
import { AppContext } from '.';

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider
