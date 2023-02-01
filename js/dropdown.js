let dropdownButton = document.querySelector('.dropdown-button');
let dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', () =>{
    dropdownMenu.classList.toggle('show-dropdown')
});