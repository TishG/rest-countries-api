import axios from "axios";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SET_MODE,
  SET_SEARCH,
  FILTER_BY_REGION,
  FILTER_BY_NAME
} from "./constantTypes";

export const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

export const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
};

export const fetchFailure = err => {
  return {
    type: FETCH_FAILURE,
    payload: err
  };
};

export const fetchCountries = () => dispatch => {
  dispatch(fetchStart());
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(err => dispatch(fetchFailure(err.message)));
};

export const setMode = mode => {
  return {
    type: SET_MODE,
    payload: mode
  };
};

export const setSearch = value => {
  return {
    type: SET_SEARCH,
    payload: value
  };
};

export const filterByRegion = value => {
  return {
    type: FILTER_BY_REGION,
    payload: value
  };
};

export const filterByName = () => {
  return {
    type: FILTER_BY_NAME
  };
};
