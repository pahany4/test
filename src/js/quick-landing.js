(function () {
    if (quickLandingBtn) {
        quickLandingBtn.addEventListener('click', function (evt) {
            var settingsMore = document.querySelector('.settings-more')
            evt.preventDefault();
            settingsMore.classList.toggle('visually-hidden') // или класс с display: none
        })
    }
}
)()