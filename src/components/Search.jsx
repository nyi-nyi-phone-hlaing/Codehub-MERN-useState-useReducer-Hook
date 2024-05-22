import PropTypes from "prop-types";
import ACTIONS from "../utils/actions";

const Search = ({ state, dispatch }) => {
  const searchHandler = (e) => {
    dispatch({ type: ACTIONS.SEARCH, payload: e.target.value });
  };
  return (
    <div className='search'>
      <h1>Search</h1>
      <div className='search-box'>
        <input type='text' placeholder='Type here' onChange={searchHandler} />
        <p>
          Your search query is <span>{state.search}</span>
        </p>
      </div>
    </div>
  );
};

Search.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Search;
