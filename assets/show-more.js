if (!customElements.get('show-more-button')) {
  customElements.define(
    'show-more-button',
    class ShowMoreButton extends HTMLElement {
      constructor() {
        super();
        const button = this.querySelector('button');
        button.addEventListener('click', (event) => {
          this.expandShowMore(event);
          const nextElementToFocus = event.target.closest('.parent-display').querySelector('.show-more-item');
          if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden') && nextElementToFocus.querySelector('input')) {
            nextElementToFocus.querySelector('input').focus();
          }
        });
      }
      expandShowMore(event) {
        const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.parent-display');
        const parentWrap = parentDisplay.querySelector('.parent-wrap');
        this.querySelectorAll('.label-text').forEach((element) => element.classList.toggle('hidden'));
        parentDisplay.querySelectorAll('.show-more-item').forEach((item) => item.classList.toggle('hidden'));
        if (!this.querySelector('.label-show-less')) {
          this.classList.add('hidden');
        }
      }
    }
  );
}



window.onload = function () {
  setValues();
  slideOne();
  slideTwo();
  slideThree();
  slideFour();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let sliderThree = document.getElementById("slider-3");
let sliderFour = document.getElementById("slider-4");

let displayValOne = document.getElementById("Filter-Price-GTE");
let displayValTwo = document.getElementById("Filter-Price-LTE");
let displayValThree = document.getElementById("Mobile-Filter-Price-GTE");
let displayValFour = document.getElementById("Mobile-Filter-Price-LTE");
let minGap = 0;
let sliderTrackMobile = document.querySelector(".slider-mobile-track");
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;


function setValues() {
  const min = displayValOne.getAttribute('min');
  const max = displayValTwo.getAttribute('max');
  const min_m = displayValThree.getAttribute('min');
  const max_m = displayValFour.getAttribute('max');

  sliderOne.setAttribute('min', min);
  sliderOne.setAttribute('max', max);
  sliderTwo.setAttribute('min', min);
  sliderTwo.setAttribute('max', max);
  sliderThree.setAttribute('min', min_m);
  sliderThree.setAttribute('max', max_m);
  sliderFour.setAttribute('min', min_m);
  sliderFour.setAttribute('max', max_m);
  sliderOne.value = displayValOne.value;
  sliderTwo.value = displayValTwo.value;
  sliderThree.value = displayValThree.value;
  sliderFour.value = displayValFour.value;
}

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.value = sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.value = sliderTwo.value;
  fillColor();
}

function slideThree() {
  if (parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap) {
    sliderThree.value = parseInt(sliderFour.value) - minGap;
  }
  displayValThree.value = sliderThree.value;
  fillColorMobile();
}
function slideFour() {
  if (parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap) {
    sliderFour.value = parseInt(sliderThree.value) + minGap;
  }
  displayValFour.value = sliderFour.value;
  fillColorMobile();
}
function fillColor() {
  sliderMaxValue = document.getElementById("slider-1").max;
  document.querySelector('.filter-min-price').textContent = 'Price $' + sliderOne.value + ' - $' + sliderTwo.value;

  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #f2f2f2 ${percent1}% , #000000 ${percent1}% , #000000 ${percent2}%, #f2f2f2 ${percent2}%)`;
}

function fillColorMobile() {
  sliderMaxValue = document.getElementById("slider-3").max;
  document.querySelector('.filter-mobile-price').textContent = 'Price $' + sliderThree.value + ' - $' + sliderFour.value;

  percent3 = (sliderThree.value / sliderMaxValue) * 100;
  percent4 = (sliderFour.value / sliderMaxValue) * 100;
  sliderTrackMobile.style.background = `linear-gradient(to right, #f2f2f2 ${percent3}% , #000000 ${percent3}% , #000000 ${percent4}%, #f2f2f2 ${percent4}%)`;
}



