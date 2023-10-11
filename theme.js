function setTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");
  const body = document.body;
  body.classList.remove("default", "light", "grain", "zip", "dawn", "black", "rose", "teal", "ice", "glacier", "hamtter", "midnight", "mastodon", "pleroma", "twitter", "x", "classic", "first");
  
  if (savedTheme) {
    body.classList.add(savedTheme);
    
    const backgroundColorHex = getComputedStyle(body).getPropertyValue("--background-color");
    
    document.querySelector('meta[name="theme-color"]').setAttribute('content', backgroundColorHex);
    console.log("hi");
  }
  console.log("hi2");
}

window.addEventListener("load", setTheme);
