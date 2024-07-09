const dropDownElement = document.querySelectorAll("#getGear-content")

for (let i = 0; i < dropDownElement.length; i++) {
    dropDownElement[i].addEventListener('click', () => {
        dropDownElement[i].classList.toggle('getGear-content-opened')
        })
}

