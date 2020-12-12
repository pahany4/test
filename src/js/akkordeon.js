(function () {

    if (infoButtons) {
        for (var i = 0; i < infoButtons.length; i++) {
            infoButtons[i].addEventListener('click', function (evt) {
                evt.preventDefault();
                var infoText = this.parentNode.querySelector(".quick-description");
                infoText.classList.toggle('visually-hidden')
            });
        }
    }
}

)();