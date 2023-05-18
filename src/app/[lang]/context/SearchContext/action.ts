import { SEARCH_TEXT_EDIT } from "./constant";

export const setTextInput = (payload: string) => ({
  type: SEARCH_TEXT_EDIT,
  payload
})