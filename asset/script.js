const themeSelect = document.getElementById('themeSelect');
const body =  document.body;

function setTheme(theme) {
    body.classList.remove('dark-theme', 'pink-theme');

    if (theme !== 'default') {
        body.classList.add(theme + '-theme');
    }

    localStorage.setItem('theme', theme);
    console.log(theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
    themeSelect.value = savedTheme;
}

themeSelect.addEventListener('change', (event) => {
    setTheme(themeSelect.value);
});