import { useSelector, useDispatch } from "react-redux";
import { dec, inc, inc3 } from "../redux/counter/counterActions";
import { DECREMENT, INCREMENT, INCREMENT3, SHOWHIDE } from "../redux/type";
function Count() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(counter);

  const incHandlear = () => {
    dispatch(inc());

    // dispatch({
    //   type: INCREMENT,
    //   payload: 5,
    // });
  };

  const decHandlear = () => {
    dispatch(dec());
  };

  const incHandlear3 = () => {
    dispatch(inc3());
  };
  // const showHide = () => {
  //   dispatch({ type: SHOWHIDE });
  // };

  return (
    <div>
      <h1>{counter}</h1>

      <div>
        <button onClick={incHandlear}>+</button>

        <button onClick={decHandlear}>-</button>

        <button onClick={incHandlear3}>INCREMENT3</button>
      </div>
    </div>
  );
}

export default Count;
