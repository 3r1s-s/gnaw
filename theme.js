function setTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");
  const body = document.body;
  body.classList.remove("default", "light", "grain", "zip", "dawn", "black", "rose", "teal", "ice", "glacier", "hamtter", "midnight", "mastodon", "pleroma", "twitter", "x", "classic", "first");

  if (savedTheme) {
    body.classList.add(savedTheme);
    
    // Access the computed value of --navbar from the linked stylesheet (styles.css)
    const computedStyle = getComputedStyle(body);
    const navbarColor = computedStyle.getPropertyValue("--navbar");
    
    // Set the content attribute of the meta tag to the navbar color hexcode
    document.querySelector('meta[name="theme-color"]').setAttribute('content', navbarColor);
    console.log(navbarColor);
  }
}



window.addEventListener("load", setTheme);
