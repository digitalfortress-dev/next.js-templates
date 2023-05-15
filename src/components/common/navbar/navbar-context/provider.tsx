'use client'

import { useReducer, ReactNode } from 'react'
import NavbarReducer, { initialState } from './reducer';
import { NavbarContext } from '.';

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(NavbarReducer, initialState);

  return (
    <NavbarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default Provider
