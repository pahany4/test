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