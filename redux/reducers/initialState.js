export const initialStateUser = 
{credits: 22, 
  settings: {
    gender: null, 
    age: null, 
    feedbackGender: {male: false, female: false}, 
    feedbackAge: []
  }
};

export const initialStateImageStream = []

export const initialStateImages = {
  active: null,
  imageList: imagesListInit
}

const imagesListInit = [
  { id: 1, uri: require("../../assets/testimages/testimage1.jpg"), people: 10, score: 8 },
  { id: 2, uri: require("../../assets/testimages/testimage2.jpg"), people: 10, score: 7 },
  { id: 3, uri: require("../../assets/testimages/testimage3.jpg"), people: 15, score: 8 },
  { id: 4, uri: require("../../assets/testimages/testimage4.jpg"), people: 18, score: 6}
];


