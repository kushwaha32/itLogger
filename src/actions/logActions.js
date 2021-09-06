import axios from "axios";
import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  ADD_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  LOG_UPDATE,
  DELETE_LOG,
  SEARCH_LOG,
} from "./Types";

export const getLogs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await axios.get("/logs");

      dispatch({
        type: GET_LOGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err,
      });
    }
  };
};
// add log function

export const addLog = (logData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const log = await axios.post("/logs", logData, config);

    dispatch({
      type: ADD_LOG,
      payload: log.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// log filling the update array

export const setCurrent = (data) => (dispatch) => {
  dispatch(clearCurrent());
  dispatch({
    type: SET_CURRENT,
    payload: data,
  });
};

const clearCurrent = () => (dispatch) => {
  return {
    type: CLEAR_CURRENT,
  };
};

// update log function

export const logUpdate = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put(`/logs/${data.id}`, data, config);

    dispatch({
      type: LOG_UPDATE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// delete log function

export const deleteLog = (id) => async (dispatch) => {
  try {
    await axios.delete(`/logs/${id}`);
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// search log
export const searchLog = (query) => async (dispatch) => {
  try {
    const res = await axios.get(`/logs?q=${query}`);

    dispatch({
      type: SEARCH_LOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// set loading function

const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
