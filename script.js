const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// DarkMode Styles
// //TOO REPETATIVE
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     // console.log(toggleIcon.children);
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.remove('fa-sun');
//     toggleIcon.children[1].classList.add('fa-moon');
//     image1.src = 'img/undraw_feeling_proud_dark.svg';
//     image2.src = 'img/undraw_conceptual_idea_dark.svg';
//     image3.src = 'img/undraw_proud_coder_dark.svg';
// }
// // LightMode Styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     // console.log(toggleIcon.children);
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.remove('fa-moon');
//     toggleIcon.children[1].classList.add('fa-sun');
//     image1.src = 'img/undraw_feeling_proud_light.svg';
//     image2.src = 'img/undraw_conceptual_idea_light.svg';
//     image3.src = 'img/undraw_proud_coder_light.svg';
// }

// Dark or Light Mode [Improved code]
function imageMode(color) {
    image1.src = `img/undraw_feeling_proud_${color}.svg`;
    image2.src = `img/undraw_conceptual_idea_${color}.svg`;
    image3.src = `img/undraw_proud_coder_${color}.svg`;
}
function toggleDarkLightMOde(isDark) {
    nav.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
    textBox.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');

}
// function toggleDarkLightMode(isDark) {
//     // Set navigation background color
//     nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';

//     // Set text box background color
//     textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

//     // Update toggle icon text
//     toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';

//     // Update toggle icon class
//     if (isDark) {
//         toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     } else {
//         toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     }

//     // Update image mode (corrected parameters)
//     isDark ? imageMode('dark') : imageMode('light');
// }


// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     imageMode('dark');
// }

// // LightMode Styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     // console.log(toggleIcon.children);
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('light');
// }



// Switch theme Dynamically
function switchTheme(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMOde(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMOde(false);
    }
}
// Eventlistener
toggleSwitch.addEventListener('change', switchTheme);

// check local storage for theme 
const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', `${currentTheme}`);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMOde(toggleSwitch);
    }

}