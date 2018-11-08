import { combineReducers } from 'redux';

const initialStateUser = 
{credits: 22, 
  settings: {
    gender: null, 
    age: null, 
    feedbackGender: {male: false, female: false}, 
    feedbackAge: []
  }
}

const imagesListInit = [
  { id: "1", uri: require("../../assets/testimages/testimage1.jpg"), people: 10, score: 8 },
  { id: "2", uri: require("../../assets/testimages/testimage2.jpg"), people: 10, score: 7 },
  { id: "3", uri: require("../../assets/testimages/testimage3.jpg"), people: 15, score: 8 },
  { id: "4", uri: require("../../assets/testimages/testimage4.jpg"), people: 18, score: 6}
];

const initialStateImageStream = []

const initialStateImages = {
  active: null,
  imageList: imagesListInit
}

const user = (initialState = initialStateUser, action) => {
  switch (action.type) {
    case 'CHANGE_SETTINGS':
      return {...initialState, settings: action.settings}
    case 'CHANGE_CREDITS':
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
  
