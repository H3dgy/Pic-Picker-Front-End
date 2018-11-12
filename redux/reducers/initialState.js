
const data1 = {
  score: 7,
  people: 10,
  feedbackGender: {male: 10, female: 90}, 
  feedbackAge: [80,23,56,76]
}

const data2 = {
  score: 6,
  people: 15,
  feedbackGender: {male: 80, female: 20}, 
  feedbackAge: [10,40,50,30]
}
const data3 = {
  score: 5,
  people: 20,
  feedbackGender: {male: 60, female: 40}, 
  feedbackAge: [10,30,25,80]
}
const data4 = {
  score: 9,
  people: 12,
  feedbackGender: {male: 30, female: 70}, 
  feedbackAge: [50,25,30,50]
}

const imagesListInit = [
  { id: 1, uri: require("../../assets/testimages/testimage1.jpg"), data: data1 },
  { id: 2, uri: require("../../assets/testimages/testimage2.jpg"), data: data2 },
  { id: 3, uri: require("../../assets/testimages/testimage3.jpg"), data: data3 },
  { id: 4, uri: require("../../assets/testimages/testimage4.jpg"), data: data4 }
];


export const initialStateUser = 
{credits: 22, 
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
  active: imagesListInit[1],
  imageList: imagesListInit
}



