import { FETCH_COCKTAILS, FETCH_ALCOHOLIC, FETCH_NON_ALCOHOLIC } from '../types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAILS:
      return action.payload;
  	case FETCH_ALCOHOLIC:
      return action.payload;
    case FETCH_NON_ALCOHOLIC:
      return action.payload;
    default:
      return state;
  }
};