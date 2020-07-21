/** @format */

"use strict";

const container = document.querySelector(".container");

const nextBtn = document.querySelector(".footer-nextBtn");
const preBtn = document.querySelector(".footer-preBtn");
const imgs = document.querySelector(".main__imgWrapper");
const img_1 = document.querySelector(".main-img1");
const img_2 = document.querySelector(".main-img2");
const img_3 = document.querySelector(".main-img3");
const img_4 = document.querySelector(".main-img4");
const rightImgArea = document.querySelector(".graphyic");
const willChange = document.querySelector(".willChange");

const banner = document.querySelector(".banner");

const imgsRect = imgs.getBoundingClientRect();

let x = imgs.scrollWidth / imgs.childElementCount;
let firstSetimg = -x * 3;
let index = 0;
let caseIndex = 0;

function setImg() {
  imgs.style.left = `${firstSetimg}px`;
}

setImg();
function graphyicSwitch() {
  switch (caseIndex) {
    case 0:
      let rightImg = document.createElement("img");
      rightImg.setAttribute("src", "imgs/Girl.jpg ");
      rightImg.setAttribute("class", "willChange");
      rightImgArea.appendChild(rightImg);
      break;
    case 1:
      console.log(willChange.getAttribute());
      break;
  }
}

graphyicSwitch();

nextBtn.addEventListener("click", () => {
  console.log("hello");
  nextImg();
  caseIndex += 1;
  graphyicSwitch();
});
preBtn.addEventListener("click", () => {
  console.log("pre");
  preImg();
});

function nextImg() {
  index = index + x;
  imgs.style.transform = `translateX(${index}px)`;
  imgs.style.transition = "all 0.5s ease-in-out";

  if (index == x * 3) {
    setTimeout(() => {
      imgs.style.transition = "all 0s";
      index = -x;
      imgs.style.transform = `translateX(${index}px)`;
    }, 500);
    imgs.style.transition = "all 0.5s ease-in-out";
  }
}

function preImg() {
  index = index - x;
  imgs.style.transform = `translateX(${index}px)`;
  imgs.style.transition = "all 0.5s ease-in-out";
  if (index == x * -2) {
    setTimeout(() => {
      imgs.style.transition = "all 0s";
      index = x * 2;
      imgs.style.transform = `translateX(${index}px) `;
    }, 500);
    imgs.style.transition = "all 0.5s ease-in-out";
  }
}
