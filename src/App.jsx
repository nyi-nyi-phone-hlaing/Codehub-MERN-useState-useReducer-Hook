import { useReducer } from "react";
import Counter from "./components/Counter";
import Search from "./components/Search";
import ACTIONS from "./utils/actions";

const initialState = {
  search: "",
  count: 0,
};

const firstReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREASE:
      return { ...state, count: state.count - 1 };
    case ACTIONS.SEARCH:
      return { ...state, search: action.payload };
    default:
      throw new Error("Action type is not define");
  }
};

function App() {
  const [state, dispatch] = useReducer(firstReducer, initialState);
  return (
    <div className='App'>
      <h1 className='hello'>Hello Vite + React</h1>
      <Search state={state} dispatch={dispatch} />
      <Counter state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
