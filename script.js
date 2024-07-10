const dropDownElements = document.querySelectorAll("#getGear-content");
const acordeonIcons = document.querySelectorAll("#acordeon-icon");


dropDownElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    element.classList.toggle('getGear-content-opened');

    const icon = acordeonIcons[index];
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-x');
  });
});

