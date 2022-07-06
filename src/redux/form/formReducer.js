import { EMAIL, NAME } from "../type";

const initialState = { name: "", email: "" };

const formReducer = (state = initialState, action) => {
  if (action.type === NAME) return { ...state, name: action.payload };
  if (action.type === EMAIL) return { ...state, email: action.payload };

  // switch (action.type) {
  //   case NAME:
  //     return {
  //       ...state,
  //       name: [action.payload],
  //     };

  // default:
  return initialState;
  // }
};
export default formReducer;
