import axios from "axios"
import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECH_ERROR } from "./Types";

// get technition

export const getTech = () => async dispatch => {
    dispatch(setLoading);
    try {
        const res = await axios.get("/techs");
        dispatch({
            type: GET_TECHS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TECH_ERROR,
            payload: err
        })
    }
}
// add technition 
export const addTech = techData => async dispatch => {
      dispatch(setLoading);
      const config = {
          headers: {
              "Content-Type": "application/json"
          }
      }
      try {
          const res = await axios.post("/techs", techData, config);
          dispatch({
              type: ADD_TECH,
              payload: res.data
          })
      } catch (err) {
         dispatch({
             type: TECH_ERROR,
             payload: err
         }) 
      }
}

// delete technician

export const deleteTech = id => async dispatch => {
     dispatch(setLoading);
     try {
          await axios.delete(`/techs/${id}`);
         dispatch({
             type: DELETE_TECH,
             payload: id
         })
     } catch (err) {
        dispatch({
            type: TECH_ERROR,
            payload: err
        }) 
     }
}

const setLoading = () => {
    return{
        type: SET_LOADING
    }
}