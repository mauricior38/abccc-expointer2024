export function Theme() {
  const root = window.document.documentElement;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("@lrTheme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    root.classList.add(theme);
  } else {
    root.classList.add(lightTheme);
  }
}
