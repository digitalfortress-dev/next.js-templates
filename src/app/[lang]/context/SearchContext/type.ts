
import { Dispatch } from 'react';

export type IState = {
  textInput: string;
  dataInput: string[];
}

export type IContext = {
  state: IState;
  dispatch: Dispatch<any>;
}
