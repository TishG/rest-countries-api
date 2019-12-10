import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SET_MODE,
  SET_SEARCH,
  FILTER_BY_REGION,
  FILTER_BY_NAME
} from "./constantTypes";

const initialState = {
  loading: false,
  error: "",
  search: "Search for a country...",
  mode: "dark",
  countries: [],
  filteredCountries: []
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
        search: action.payload,
        region:""
      };
    case FILTER_BY_REGION:
      return {
        ...state,
        filteredCountries: state.countries.filter(
          country => country.region === action.payload
        )
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filteredCountries: state.countries.filter(
          country =>
            country.name.toLowerCase().indexOf(state.search.toLowerCase()) !==
            -1
        )
      };
    default:
      return state;
  }
};
