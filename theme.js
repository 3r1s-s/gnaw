function theme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  function setTheme() {
    const body = document.body;
    if (theme()) {
      body.classList.add('dark');
    } else {
      body.classList.add('light');
    }
  }
  
  window.addEventListener('load', setTheme);