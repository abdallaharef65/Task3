import { NAME, EMAIL } from "../type";

export const name = (e) => {
  return {
    type: NAME,
    payload: e.target.value,
  };
};

export const email = (e) => {
  return {
    type: EMAIL,
    payload: e.target.value,
  };
};
