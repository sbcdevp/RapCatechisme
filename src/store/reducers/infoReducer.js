import { 
    INFO_REQUEST, 
    INFO_SUCCESS, 
    INFO_FAIL
  } from '../constants/constants';
  

function infoListReducer(state = {info: {} }, action) {
    switch (action.type) {
      case INFO_REQUEST:
        return {loading: true};
      case INFO_SUCCESS:
        return { loading: false, info: action.payload };
      case INFO_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

export { infoListReducer }