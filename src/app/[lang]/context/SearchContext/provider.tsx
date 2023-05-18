'use client'

import { useReducer, ReactNode } from 'react'
import SearchReducer, { initialState } from './reducer';
import { SearchContext } from '.';

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default Provider
