import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { picturesListReducer } from './reducers/picturesReducer';
import { videosListReducer } from './reducers/videosReducer';
import { infoListReducer} from './reducers/infoReducer';


const initialState = {
    picturesList: {},
    videosList: {},
    infoList: {}

};
const reducer = combineReducers({
  picturesList: picturesListReducer,
  videosList: videosListReducer,
  infoList: infoListReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
