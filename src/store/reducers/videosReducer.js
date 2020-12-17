import {
    VIDEOS_LIST_REQUEST, 
    VIDEOS_LIST_SUCCESS, 
    VIDEOS_LIST_FAIL
} from '../constants/constants'

function videosListReducer(state = {videos: {} }, action) {
    switch (action.type) {
      case VIDEOS_LIST_REQUEST:
        return {loading: true};
      case VIDEOS_LIST_SUCCESS:
        return { loading: false, videos: action.payload };
      case VIDEOS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

export { videosListReducer }