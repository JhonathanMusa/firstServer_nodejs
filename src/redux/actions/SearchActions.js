import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../constants/SearchConstants";

const fetcDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchDataSuccess = (caracter) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: caracter,
  };
};

const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};

const fetch_data = (value) => {
  return (dispatch) => {
    dispatch(fetcDataRequest());
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then((response) => {
        dispatch(fetchDataSuccess([response.data]));
      })
      .catch((error) => {
        dispatch(fetchDataError("Character not found"));
      });
  };
};

export default fetch_data;