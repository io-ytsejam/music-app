import { GET_TITLE, SET_TITLE } from "./types";

export const getTitle = (title) => {
  return  {
    type: GET_TITLE,
    payload: title
  }
};

export const setTitle = () => {
  return {
    type: NEW_TITLE
  }
}