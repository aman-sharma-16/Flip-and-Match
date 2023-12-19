// write a function to restrict the user from flipping more than 2 cards at a time

const box = document.getElementsByClassName("box");
const container = document.getElementById("container");
const img = document.getElementsByClassName("Image");
const backImg = document.getElementsByClassName("backImg");
const imgInfo = [];
let pair = 2;
let pairInfo = [];

const imageDict = {
  "ultimate humangasaur": ["./src/download (1).jpg", 2],
  "ultimate swarmpfire": ["./src/download (2).jpg", 2],
  brainstrom: ["./src/download.jpg", 2],
  "diamond head": ["./src/images (1).jpg", 2],
  ghost: ["./src/images (2).jpg", 2],
  wolf: ["./src/images.jpg", 2],
  accelerate: ["./src/images.png", 2],
  rath: ["./src/rath.png", 2],
};

const selectImgTag = [
  "ultimate humangasaur",
  "ultimate swarmpfire",
  "brainstrom",
  "diamond head",
  "ghost",
  "wolf",
  "accelerate",
  "rath",
];

const showImg = () => {
  for (let i = 0; i < box.length; i++) {
    setTimeout(() => {
      img[i].style.transform = "rotateY(180deg)";
      backImg[i].style.transform = "rotateY(0deg)";
    }, 2000);
  }
};

showImg();

const play = (position) => {
  box[position - 1].addEventListener("click", () => {
    if (img[position - 1].style.transform != "rotateY(0deg)") {
      img[position - 1].style.transition = "transform 2s";
      backImg[position - 1].style.transition = "transform 2s";
      img[position - 1].style.transform = "rotateY(0deg)";
      backImg[position - 1].style.transform = "rotateY(180deg)";
      if (pair != 0 && !(position in pairInfo)) {
        pairInfo[2 - pair] = position;
        pair--;
      }
      // console.log(position in pairInfo);
      // console.log(pairInfo)
      console.log(pair);
      if (pair == 0) {
        // console.log(pairInfo);
        // console.log(imgInfo[pairInfo[0] - 1]);
        // console.log(imgInfo[pairInfo[1] - 1]);
        // console.log(imgInfo);
        matchAndFlip(pairInfo);
      }
    }
  });
};

const insert = () => {
  for (let i = 0; i < 16; i++) {
    while (!addImage(i)) {}
  }
};

const reset = () => {
  pair = 2;
  pairInfo = [];
};

const addImage = (pos) => {
  let random = Math.floor(Math.random() * 8);
  if (imageDict[selectImgTag[random]][1] != 0) {
    img[pos].src = imageDict[selectImgTag[random]][0];
    imageDict[selectImgTag[random]][1]--;
    imgInfo[pos] = selectImgTag[random];
    return true;
  }
  return false;
};

const check = () => {
  for (let i = 1; i <= box.length; i++) {
    play(i);
  }
};

const matchAndFlip = (arr) => {
  if (imgInfo[arr[0] - 1] != imgInfo[arr[1] - 1]) {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        img[arr[i] - 1].style.transform = "rotateY(180deg)";
        backImg[arr[i] - 1].style.transform = "rotateY(0deg)";
      }, 2000);
    }
  } else {
    console.log("else executed");
  }
  reset();
};

insert();
check();
