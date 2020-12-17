/**
* Portfolio Actions
*/
import {
    PICTURES_LIST_REQUEST, 
    PICTURES_LIST_SUCCESS, 
    PICTURES_LIST_FAIL
  
  } from '../constants/constants'
  
  import {client} from "../client"
  
  
  const getPicturesEntries = client.getEntries({
    'content_type': 'projects'
  });
  
  const listPictures = () => (dispatch) => {
    try{
      dispatch({ type: PICTURES_LIST_REQUEST, loading: true });
    getPicturesEntries.then(pictures => {
            dispatch({ type: PICTURES_LIST_SUCCESS, payload: pictures.items, loading: false });
        });
    }catch (error) {
      dispatch({ type: PICTURES_LIST_FAIL, payload: error.message });
    }
  }
  
  export {
    listPictures
  }