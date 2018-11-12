import { combineReducers } from 'redux';
import {initialStateUser, initialStateImages, initialStateImageStream} from "./initialState"

const user = (initialState = initialStateUser, action) => {
  switch (action.type) {
    case 'CHANGE_SETTINGS':
      return {...initialState, settings: action.settings}
    case 'CHANGE_CREDITS':
      return {...initialState, credits: action.credits}
    case 'CHANGE_USER':
      return {...action.user}
    default:
      return initialState
  }
};

const imageStream = (initialState = initialStateImageStream, action) => {
  switch (action.type) {
    case 'CHANGE_STREAM':
      return {...action.stream}
    default:
      return initialState
  }
};

const images = (initialState = initialStateImages, action) => {
  switch (action.type) {
    case 'CHANGE_IMAGE_LIST':
      return {...initialState, imageList: action.imageList};
    case 'CHANGE_ACTIVE':
      return {...initialState, active: action.image}
    default:
      return initialState
  }
};

const reducers = combineReducers({
  user,
  imageStream,
  images
})

export default reducers;
  
