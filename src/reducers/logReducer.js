import {
  ADD_LOG,
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  LOG_UPDATE,
  DELETE_LOG
} from "../actions/Types";

const initialState = {
  logs: null,
  current: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case LOG_UPDATE:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case DELETE_LOG:
        return{
            ...state,
            logs: state.logs.filter(log => log.id !== action.payload)
        }
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
