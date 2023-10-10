function setTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");
  const body = document.body;
  body.classList.remove("default", "light", "grain", "zip", "dawn", "rose", "ice", "glacier");
  if (savedTheme) {
      body.classList.add(savedTheme);
  }
  console.log(localStorage.getItem("selectedTheme"));
}

window.addEventListener("load", setTheme);
