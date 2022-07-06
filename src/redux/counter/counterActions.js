import { INCREMENT, DECREMENT, INCREMENT3, SHOWHIDE } from "../type";

export const inc = () => {
  return {
    type: INCREMENT,
    payload: 5,
  };
};

export const dec = () => {
  return {
    type: DECREMENT,
    payload: 5,
  };
};

export const inc3 = () => {
  return {
    type: INCREMENT3,
    payload: 3,
  };
};
