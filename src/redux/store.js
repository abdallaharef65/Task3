import counterReducer from "./counter/counterReducer";
import formReducer from "./form/formReducer";

import { createStore } from "redux";
const store2 = createStore(counterReducer);
const store = createStore(formReducer);

export default store;
