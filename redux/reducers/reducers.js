import { combineReducers } from 'redux';

const INITIAL_STATE_USER = {
  
};

const INITIAL_STATE_IMAGES = {
  
};

const userReducer = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
    default:
      return state
  }
};

const imagesReducer = (state = INITIAL_STATE_IMAGES, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  user: userReducer,
  images: imagesReducer
});
