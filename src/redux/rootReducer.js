import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SET_MODE,
  SET_SEARCH
} from "./constantTypes";

const initialState = {
  loading: false,
  error: "",
  search: "Search for a country...",
  filter: "",
  mode: "dark",
  countries: []
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SET_MODE:
      return {
        ...state,
        mode: action.payload
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};
