import { combineReducers } from 'redux';

const initialStateUser = 
{credits: 10, 
  settings: {
    gender: null, 
    age: null, 
    feedbackGender: {male: false, female: false}, 
    feedbackAge: []
  }
}

const initialStateImageStream = []

const initialStateImages = {
  active: null,
  imageList: []
}

const user = (initialState = initialStateUser, action) => {
  switch (action.type) {
    case 'CHANGE_SETTINGS':
      return {...initialState, settings: action.settings}
    case 'CHANGE_SETTINGS':
      return {...initialState, credits: action.credits}
    default:
      return initialState
  }
};

const imageStream = (initialState = initialStateImageStream, action) => {
  switch (action.type) {
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
  
