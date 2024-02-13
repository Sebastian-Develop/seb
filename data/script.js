
// Scroll listener (check if element is in view and mark navigation button/s)
const scrollContainer = document.querySelector("div#window-slider")
const welcomeButton = document.getElementById('navLinkWelcome')
const weButton = document.getElementById('navLinkWe')
const eatButton = document.getElementById('navLinkEat')


scrollContainer.addEventListener("scroll", (event) => {
    const windowWelcome = document.querySelector("div#welcome").getBoundingClientRect();
    const windowWe = document.querySelector("div#we").getBoundingClientRect();
    const windowEat = document.querySelector("div#eat").getBoundingClientRect();
    // var bounding = windowWelcome.getBoundingClientRect();
    if (windowWelcome.top >= 0 && windowWelcome.left >= 0 && windowWelcome.right <= (window.innerWidth || document.documentElement.clientWidth) && windowWelcome.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        welcomeButton.classList.add('li-selected')
    } else {
        welcomeButton.classList.remove('li-selected')
    }
    if (windowWe.top >= 0 && windowWe.left >= 0 && windowWe.right <= (window.innerWidth || document.documentElement.clientWidth) && windowWe.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        weButton.classList.add('li-selected')
    } else {
        weButton.classList.remove('li-selected')
    }
    if (windowEat.top >= 0 && windowEat.left >= 0 && windowEat.right <= (window.innerWidth || document.documentElement.clientWidth) && windowEat.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        eatButton.classList.add('li-selected')
    } else {
        eatButton.classList.remove('li-selected')
    }
});
// Image Slider
let images = ["data/images/hmm2/ms1_small.jpeg", "data/images/hmm2/ms2_small.jpeg", "data/images/hmm2/ms4_small.jpeg"];
const slider = document.querySelector('#sebSliderContainer');
const imgEls = [];
images.forEach(image => {
  let imgEl = document.createElement('img');
  imgEl.src = image;
  imgEl.classList.add('imageSlider-image');
  imgEls.push(imgEl);
  slider.appendChild(imgEl);
});
let i = 0;
// initial image setting
imgEls[0].style.opacity = 1;
imgEls[1].style.opacity = 0;
imgEls[2].style.opacity = 0;
function changeImg() {
  imgEls[i].style.opacity = 0;
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  imgEls[i].style.opacity = 1;
  setTimeout("changeImg()", 3000);
}
window.onload = changeImg;