const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeColorSwitch: document.querySelector('#theme-switch-toggle'),
};

const themeColorSwitchFunction = () => {
  if (refs.themeColorSwitch.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('themeColor', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('themeColor', Theme.LIGHT);
  }
};

if (localStorage.getItem('themeColor') === Theme.DARK) {
  refs.themeColorSwitch.checked = true;
  themeColorSwitchFunction();
}

refs.themeColorSwitch.addEventListener('change', themeColorSwitchFunction);
