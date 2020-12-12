'use strict';

var slider = document.getElementById('slider');
var input = document.getElementById('ante__set')
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

var Min = document.getElementById('Min');
var Max = document.getElementById('Max');
var Bank = document.getElementById('Bank');
var HalfBank = document.getElementById('HalfBank');

var infoButtons = document.querySelectorAll('.btn_info')

var min = 1000;
var max = 50000;
var bank = 2609;
input.addEventListener('input', function () {
    slider.value = input.value
})
slider.addEventListener('change', function () {
    input.value = slider.value
})
slider.addEventListener('input', function () {
    input.value = slider.value
})


input.addEventListener('input', function () {
    slider.noUiSlider.set(+input.value)
})

plus.addEventListener('click', function (evt) {
    evt.preventDefault();
    input.value = +input.value + 1000;
    slider.value = +input.value;

})

minus.addEventListener('click', function (evt) {
    evt.preventDefault();
    input.value = +input.value - 500;
    slider.value = +input.value;
})
Min.addEventListener('click', function (evt) {
    evt.preventDefault();
    input.value = min;
    slider.value = +input.value;
})

Max.addEventListener('click', function (evt) {
    evt.preventDefault();
    input.value = max;
    slider.value = +input.value;
})

Bank.addEventListener('click', function (evt) {
    evt.preventDefault();
    input.value = bank;
    slider.value = +input.value;
})

HalfBank.addEventListener('click', function (evt) {
    evt.preventDefault();
    input.value = bank / 2;
    slider.value = +input.value;
})
function akkordeon() {
    for (var i = 0; i < infoButtons.length; i++) {
        infoButtons[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            var infoText = this.parentNode.querySelector(".quick-description");
            infoText.classList.toggle('visually-hidden')
        });
    }

}

akkordeon();
