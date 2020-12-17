import { 
  PICTURES_LIST_REQUEST, 
  PICTURES_LIST_SUCCESS, 
  PICTURES_LIST_FAIL, 
} from '../constants/constants';

function picturesListReducer(state = {pictures: {} }, action) {
  switch (action.type) {
    case PICTURES_LIST_REQUEST:
      return {loading: true};
    case PICTURES_LIST_SUCCESS:
      return { loading: false, pictures: action.payload };
    case PICTURES_LIST_FAIL:
      return { loading: false, error: action.payload  };
    default:
      return state;
  }
}

export { picturesListReducer };