import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECH_ERROR } from "../actions/Types";

const initialState = {
    techs: null,
    loading: false,
    error: null
}

const techReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS: 
            return{
                ...state,
                techs: action.payload,
                loading: false
            }
        case ADD_TECH:
            return{
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
        case DELETE_TECH:
            return{
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false
            }
        case TECH_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }            
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
    
        default:
            return state;
    }
}

export default techReducer;