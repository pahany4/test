if (slider) {
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
}

