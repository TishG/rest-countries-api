import axios from "axios";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "./constantTypes";

export const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

export const fetchSuccess = (data) => {
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
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(err => dispatch(fetchFailure(err.message)))
}
