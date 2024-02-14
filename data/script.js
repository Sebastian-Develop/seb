
// Scroll listener (check if element is in view and mark navigation button/s)
const scrollContainer = document.querySelector("div#window-slider")
const welcomeButton = document.getElementById('navLinkWelcome')
const weButton = document.getElementById('navLinkWe')
const foodButton = document.getElementById('navLinkFood')
const dateButton = document.getElementById('navLinkDate')


scrollContainer.addEventListener("scroll", (event) => {
    const windowWelcome = document.querySelector("div#welcome").getBoundingClientRect();
    const windowWe = document.querySelector("div#we").getBoundingClientRect();
    const windowFood = document.querySelector("div#food").getBoundingClientRect();
    const windowDate = document.querySelector("div#date").getBoundingClientRect();
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
    if (windowFood.top >= 0 && windowFood.left >= 0 && windowFood.right <= (window.innerWidth || document.documentElement.clientWidth) && windowFood.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        foodButton.classList.add('li-selected')
    } else {
        foodButton.classList.remove('li-selected')
    }
    if (windowDate.top >= 0 && windowDate.left >= 0 && windowDate.right <= (window.innerWidth || document.documentElement.clientWidth) && windowDate.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        dateButton.classList.add('li-selected')
    } else {
        dateButton.classList.remove('li-selected')
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
  imgEl.style.opacity = 0;
  imgEls.push(imgEl);
  slider.appendChild(imgEl);
});
let i = 0;
// initial image setting
imgEls[0].style.opacity = 1;
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

// send script

function send() {

    let sendMail = "sebastianr.p2000@hotmail.com"
    let subject = "Valentinstag Gutschein"

    let mainForm = document.getElementById('mainForm')
    let coupon = mainForm.elements["coupon"].value
    let dateDay = mainForm.elements["datum"].value
    let dateTime = mainForm.elements["uhrzeit"].value

    if(coupon === '' || dateDay === '' || dateTime === ''){
        alert ('Bitte wähle ein Coupon und trage das gewünschte Datum ein!')
    } else {
        // alert('Daten: '+coupon+dateDay+dateTime)
        window.location = "mailto:"+sendMail+"?&subject="+subject+"&body=Gutschein:%20"+coupon+"%0aTag: "+dateDay+"%0aUhrzeit: "+dateTime
    }
}