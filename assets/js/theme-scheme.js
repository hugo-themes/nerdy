(() => {
  const root = document.documentElement;
  let storedTheme = null;

  try {
    storedTheme = localStorage.getItem('theme');
  } catch (_) {
    // Ignore storage errors so theme boot never blocks rendering.
  }

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  const dark = storedTheme ? storedTheme === 'dark' : prefersDark;

  root.classList.toggle('dark', dark);
  root.style.colorScheme = dark ? 'dark' : 'light';
})();
