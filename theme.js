function setTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");
  const body = document.body;
  body.classList.remove("default", "light", "grain", "zip", "dawn", "black", "rose", "teal", "ice", "glacier", "hamtter", "midnight", "mastodon", "pleroma", "twitter", "x", "classic", "first");
  if (savedTheme) {
      body.classList.add(savedTheme);
  }

  document.querySelector('meta[name="theme-color"]').setAttribute('content', "#000");
  document.querySelector('meta[name="background-color"]').setAttribute('content', themeColor);

}

window.addEventListener("load", setTheme);
