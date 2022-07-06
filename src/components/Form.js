import { useSelector, useDispatch } from "react-redux";
import { email, name } from "../redux/form/formActions";

// const inintialState = {
//   name: "",
//   email: "",
// };

// function reducer(state, action) {
//   return { ...state, [action.input]: action.value };
// }
function Count() {
  /////////////////////////////////////////////////////////////////
  // const [state, dispatch] = useReducer(reducer, inintialState);
  // console.log(state);

  // function onChange(e) {
  //   const action = {
  //     input: e.target.name, //email
  //     value: e.target.value, //ksjdsh
  //   };

  //   console.log(action.input);
  //   dispatch(action);
  // }
  /////////////////////////////////////////////////////////////////

  const selector = useSelector((state) => state);
  console.log(selector);

  const dispatch = useDispatch();

  function onChangename(e) {
    dispatch(name(e));
    // dispatch({
    //   type: NAME,
    //   payload: e.target.value,
    // });
    // console.log(selector);
  }

  function onChangeemail(e) {
    dispatch(email(e));

    // dispatch({
    //   type: EMAIL,
    //   payload: e.target.value,
    // });
    // console.log(selector);
  }
  // console.log();

  return (
    <div>
      <h1>Hi</h1>

      <form>
        <div>
          <label htmlFor="text"> name</label>
          <input
            type="text"
            id="text"
            required
            name="NAME"
            placeholder="Name"
            onChange={onChangename}
          />
        </div>

        <div>
          <label htmlFor="text">email</label>
          <input
            type="email"
            id="text"
            required
            name="email"
            placeholder="Email"
            onChange={onChangeemail}
          />
        </div>
      </form>
    </div>
  );
}

export default Count;
