/**
* Portfolio Actions
*/
import {
  INFO_REQUEST, 
  INFO_SUCCESS, 
  INFO_FAIL, 
} from '../constants/constants'

import {client} from "../client"

const getInfoEntries = client.getEntries({
  'content_type': 'info'
});

const listInfo = () => (dispatch) => {
  try{
    dispatch({ type: INFO_REQUEST, loading: true });
    getInfoEntries.then(info => {
          dispatch({ type: INFO_SUCCESS, payload: info.items, loading: false });
      });
  }catch (error) {
    dispatch({ type: INFO_FAIL, payload: error.message });
  }
}

export {
  listInfo
}