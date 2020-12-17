/**
* Portfolio Actions
*/
import {
    VIDEOS_LIST_REQUEST, 
    VIDEOS_LIST_SUCCESS, 
    VIDEOS_LIST_FAIL
  
  } from '../constants/constants'
  
  import {client} from "../client"
  
  const getVideosEntries = client.getEntries({
    'content_type': 'videos'
  });
  
  
  const listVideos = () => (dispatch) => {
    try{
      dispatch({ type: VIDEOS_LIST_REQUEST, loading: true });
      getVideosEntries.then(videos => {
        dispatch({ type: VIDEOS_LIST_SUCCESS, payload: videos.items, loading: false });
     });
    }
    catch (error) {
      dispatch({ type: VIDEOS_LIST_FAIL, payload: error.message });
    }
  }
  export {
    listVideos
  }