'use client'

import { createContext } from 'react';

import { initialState } from './reducer';
import { IContext } from './type';

const AppContext = createContext<IContext>({
  state: initialState,
  dispatch: () => null
});


export default AppContext;