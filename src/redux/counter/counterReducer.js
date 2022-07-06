import { INCREMENT, DECREMENT, SHOWHIDE, INCREMENT3 } from "../type";

const inintialState = { counter: 0 };
const counterReducer = (state = inintialState, action) => {
  if (action.type === INCREMENT)
    return {
      counter: state.counter + 1 + action.payload,
    };
  if (action.type === DECREMENT)
    return {
      counter: state.counter - 1,
    };
  if (action.type === INCREMENT3)
    return {
      counter: state.counter + action.payload,
    };

  return state;
};
export default counterReducer;
