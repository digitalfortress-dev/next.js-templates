import { SEARCH_TEXT_EDIT } from "./constant";
import { IState } from "./type";

export const initialState: IState = {
  textInput: '',
  dataInput: []
}

function SearchReducer(state: IState, action: {
  type: string,
  payload: any
}) {
  switch (action.type) {
    case SEARCH_TEXT_EDIT: {
      return {
        ...state,
        textInput: action.payload
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export default SearchReducer