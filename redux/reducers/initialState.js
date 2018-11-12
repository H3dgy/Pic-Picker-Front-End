const imagesListInit = [
];


export const initialStateUser = 
{credits: null, 
  settings: {
    gender: null, 
    age: null, 
    feedbackGender: {male: false, female: false}, 
    feedbackAge: [false,false,false,false]
  },
  username: null,
  id: null,
  password: null
};

export const initialStateImageStream = imagesListInit;

export const initialStateImages = {
  active: null,
  imageList: []
}



